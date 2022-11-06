import {gql} from "@apollo/client";
import {iKeyValue} from "~src/models";
import {gqlClient} from "./config";


const morphKeyValues = (base: any): iKeyValue => {
    return base.data.keyValueDataCollection.items?.[0]?.jsonData as iKeyValue;
};

const getKeyValueDataGql = async (slug: string): Promise<iKeyValue> => {
    const result = await gqlClient.query({
        query: gql`
            query($slug: String) {
              keyValueDataCollection(where: { slug: $slug }) {
                items {
                  jsonData
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