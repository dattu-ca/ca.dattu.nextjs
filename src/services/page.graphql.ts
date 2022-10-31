import {gql} from "@apollo/client";
import {gqlClient} from "./contentful.config";
import {iPage, iPages} from "~src/models";


const morphPages = (base: any): Array<iPage> => {
    return base?.data?.pageCollection?.items?.map((item: any) => ({
        title: item.title,
        slug: item.slug,
        content: item.content
    } as iPage));
};

const getAllPages = async (): Promise<iPages> => {
    const result = await gqlClient.query({
        query: gql`
        query {
          pageCollection{
            items{
              title
              slug
              content{
                json
              }
            }
          }
        }
    `
    });
    const pages = morphPages(result);
    return {
        pages
    };
};

const getPage = async (slug: string): Promise<iPage> => {
    const result = await gqlClient.query({
        query: gql`
            query {
              pageCollection (where :{ slug:"${slug}" } ){
                items{
                  title
                  slug
                  content{
                    json
                  }
                }
              }
            }
        `
    });
    const pages = morphPages(result);
    return pages[0];
};

export {getAllPages, getPage};