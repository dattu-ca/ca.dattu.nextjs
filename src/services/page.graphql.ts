import {gql} from "@apollo/client";
import _ from "lodash";
import {prepareRichTextWhileMorphing} from "~src/utils/prepareRichTextWhileMorphing";
import {iBanner, iPage, iPageSmall, iPagesSmall} from "~src/models";
import {gqlClient} from "./config";



const morphPage = (base: any): Array<iPage> => {
    return base?.data?.pageCollection?.items?.map((item: any) => {
        const page: iPage = {
            pretitle: item.pretitle,
            title: item.title,
            slug: item.slug,
            subtitle: item.subtitle,
            bannerContent: prepareRichTextWhileMorphing(item.bannerContent),
            content: prepareRichTextWhileMorphing(item.content),
            metaTitle: item.metaTitle || item.title,
            metaDescription: item.metaDescription,
            bannersCollection: []
        };
        if (item.bannersCollection && item.bannersCollection.items && item.bannersCollection.items.length >= 0) {
            page.bannersCollection = _.cloneDeep(item.bannersCollection.items) as iBanner[];
        }
        return page;
    });
};

const getPageGql = async (slug: string): Promise<iPage> => {
    const result = await gqlClient.query({
        query: gql`
            query($slug: String) {
              pageCollection (limit: 1, where :{ slug: $slug } ){
                items{
                  friendlyName
                  pretitle
                  title
                  slug
                  subtitle
                  bannerContent{
                    json
                  }
                  content{
                    json
                  }
                  metaTitle
                  metaDescription
                  bannersCollection {
                    items {
                      url
                      fileName
                      description
                    }
                  }
                }
              }
            }
        `,
        variables: {
            slug: slug
        }
    });
    const pages = morphPage(result);
    return pages[0];
};

export {getPageGql};