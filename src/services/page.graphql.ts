import {gql} from "@apollo/client";
import {iPage, iPageSmall, iPagesSmall} from "~src/models";
import {gqlClient} from "./config";


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


const morphPages = (base: any): Array<iPage> => {
    return base?.data?.pageCollection?.items?.map((item: any) => ({
        title: item.title,
        slug: item.slug,
        content: item.content
    } as iPage));
};
const getPageGql = async (slug: string): Promise<iPage> => {
    const result = await gqlClient.query({
        query: gql`
            query($slug: String) {
              pageCollection (limit: 1, where :{ slug: $slug } ){
                items{
                  title
                  slug
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
    const pages = morphPages(result);
    return pages[0];
};

export {getAllPagesSlugsGql, getPageGql};