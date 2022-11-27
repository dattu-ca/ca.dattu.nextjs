import {iBasePage, iPagesSmall} from "~src/models";
import {gqlClient} from "~src/services/config";
import {gql} from "@apollo/client";


const morphPagesSmall = (base: any): Array<iBasePage> => {
    return base?.data?.pageCollection?.items?.map((item: any) => ({
        slug: item.slug
    } as iBasePage));
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

export {
    getAllPagesSlugsGql
};