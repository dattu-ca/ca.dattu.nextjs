import {gql} from "@apollo/client";
import {iKeyValue} from "~src/models";
import {gqlClient} from "./config";


const morphKeyValues = (base: any): iKeyValue => {
    const data = base.data.keyValueDataCollection.items?.[0]?.data;
    if (data) {
        return JSON.parse(data) as iKeyValue;
    }
    return {} as iKeyValue;
};

const getKeyValueDataGql = async (slug: string): Promise<iKeyValue> => {
    const result = await gqlClient.query({
        query: gql`
            query($slug: String) {
              keyValueDataCollection(where: { slug: $slug }) {
                items {
                  data
                }
              }
            }

        `,
        variables: {
            slug: slug
        }
    });
    return morphKeyValues(result);
};

export {
    getKeyValueDataGql
};