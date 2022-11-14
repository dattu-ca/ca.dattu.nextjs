import {gql} from "@apollo/client";
import {iLink} from "~src/models";
import {gqlClient} from "./config";


const morphLinks = (base: any): Array<iLink> => {
    const links = JSON.parse(base.data.navigationCollection.items?.[0]?.links) || [];
    return links?.map((item: any) => ({
        label: item.label,
        href: item.url,
        visible: item.visible,
        target: item.target,
        sequence: item.sequence
    } as iLink)).sort((a:iLink, b: iLink) => {
        // @ts-ignore
        return a.sequence < b.sequence ? -1 : 1
    });
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