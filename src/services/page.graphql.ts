import {gql} from "@apollo/client";
import {iPage, iPageSmall, iPagesSmall} from "~src/models";
import {gqlClient} from "./config";
import {prepareRichText} from "~src/utils/prepareRichText";


const morphPagesSmall = (base: any): Array<iPageSmall> => {
    return base?.data?.pageCollection?.items?.map((item: any) => ({
        slug: item.slug
    } as iPageSmall));
};

const getAllPagesSlugsGql = async (): Promise<iPagesSmall> => {
    const result = await gqlClient.query({
        query: gql`
        query {
          pageCollection{
            items{
              slug
            }
          }
        }
    `
    });
    const pages = morphPagesSmall(result);
    return {
        pages
    };
};

const morphPage = (base: any): Array<iPage> => {
    return base?.data?.pageCollection?.items?.map((item: any) => {
        const page: iPage = {
            pretitle: item.pretitle,
            title: item.title,
            slug: item.slug,
            subtitle: item.subtitle,
            bannerContent: prepareRichText(item.bannerContent),
            content: prepareRichText(item.content)
        };
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

export {getAllPagesSlugsGql, getPageGql};