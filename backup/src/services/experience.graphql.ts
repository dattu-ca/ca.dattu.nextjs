import {gql} from "@apollo/client";
import {iExperience} from "~src/models";
import {prepareRichTextWhileMorphing} from "./morphRichText";
import {gqlClient} from "./config";


const morphExperience = (base: any): (iExperience | null) => {
    if (!base?.data?.contentWidget) {
        return null;
    }
    return base?.data?.contentWidget?.map((item: any) => {
        const experience: iExperience = {
            __typename: item.__typename,
            id: item.sys.id,
            title: item.title,
            experiencesList: item.experiencesList
        };
        return experience;
    });
};

const getExperienceGql = async (id: string): Promise<iExperience | null> => {
    const response = await gqlClient.query({
        query: gql`
            query($id: String){
              contentWidget(id: $id) {
                __typename
                sys {
                  id
                }
                title
                content {
                  json
                }
              }
            }            
        `,
        variables: {
            id: id
        }
    });
    return morphExperience(response);
};

export {getExperienceGql};