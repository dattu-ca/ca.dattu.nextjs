import {gqlClient} from "~gqlConfig";
import {gql} from "@apollo/client";


interface iProps {
    where: Record<string, any>,
    order?: string[],
    limit?: number,
    skip?: number,
}

export const CONTENT_MODEL_TYPE_NAME = {
    COPY: "Copy",
    PAGE: "Page",
    JSON_DATA_WIDGET: "JsonDataWidget",
    NAVIGATION_WIDGET: "NavigationWidget",
    ASSET_WIDGET: "AssetWidget",
    ASSETS_COLLECTION: "AssetsCollection"
};


const FRAGMENTS: any = {};
FRAGMENTS.JSON_DATA_WIDGET = `${CONTENT_MODEL_TYPE_NAME.JSON_DATA_WIDGET}{
                                slug
                                data
                              }`;
FRAGMENTS.NAVIGATION_WIDGET = `${CONTENT_MODEL_TYPE_NAME.NAVIGATION_WIDGET}{
                                slug
                                links
                              }`;
FRAGMENTS.ASSET_WIDGET = `${CONTENT_MODEL_TYPE_NAME.ASSET_WIDGET}{
                              slug
                              name
                              description
                              asset {
                                url
                                fileName
                                description
                              }
                            }
                          `;
FRAGMENTS.ASSETS_COLLECTION = `${CONTENT_MODEL_TYPE_NAME.ASSETS_COLLECTION}{
                                slug
                                content {
                                  links {
                                    entries {
                                      block{
                                        typename: __typename
                                        ... on ${FRAGMENTS.ASSET_WIDGET}
                                      }
                                    }
                                  }
                                }
                              }`;


export const COPY_QUERY = (props: iProps) => {
    const variables = {
        ...props
    };
    if (!variables.limit) {
        variables.limit = 1;
    }
    if (!variables.skip) {
        variables.skip = 0;
    }
    if (!variables.order) {
        variables.order = [];
    }

    return gqlClient.query({
        query: gql`
            query CopyCollection($limit: Int, $skip: Int, $where: CopyFilter, $order: [CopyOrder]) {
              copyCollection(limit: $limit, skip: $skip, where: $where, order: $order) {
                items {
                  sys {
                    id
                  }
                  slug
                  content {
                    links {
                      entries {
                        block{
                          sys {
                            id
                          }
                          typename: __typename
                          ... on ${FRAGMENTS.JSON_DATA_WIDGET}
                          ... on ${FRAGMENTS.NAVIGATION_WIDGET}
                          ... on ${FRAGMENTS.ASSETS_COLLECTION}
                        }
                      }
                    }
                  }
                }
              }
            }          
        `,
        variables: variables
    });
};