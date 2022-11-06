import {gql} from "@apollo/client";
import {iLink} from "~src/models";
import {gqlClient} from "./config";


const morphLinks = (base: any): Array<iLink> => {
    return base.data.navigationCollection.items?.[0]?.links?.map((item: any) => ({
        label: item.label,
        href: item.href,
        visible: item.visible
    } as iLink));
};
const getNavigationGql = async (slug: string): Promise<Array<iLink>> => {
    const result = await gqlClient.query({
        query: gql`
            query($slug: String) {
              navigationCollection(limit:1, where:{slug:$slug}){
                items{
                  links
                }
              }
            }
        `,
        variables: {
            slug: slug
        }
    });
    return morphLinks(result);
};

export {
    getNavigationGql
};