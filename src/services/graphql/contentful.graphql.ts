import {gqlClient} from "~gqlConfig";
import {gql} from "@apollo/client";


interface iProps {
    where: Record<string, any>,
    order?: string[],
    limit?: number,
    skip?: number,
}

export const WIDGET_TYPE_NAME = {
    JSON_DATA_WIDGET: "JsonDataWidget",
    NAVIGATION_WIDGET: "NavigationWidget",
    ASSET_WIDGET: "AssetWidget",
    ASSETS_COLLECTION: "AssetsCollection"
};


const FRAGMENTS: any = {};
FRAGMENTS.JSON_DATA_WIDGET = `${WIDGET_TYPE_NAME.JSON_DATA_WIDGET}{
                                slug
                                data
                              }`;
FRAGMENTS.NAVIGATION_WIDGET = `${WIDGET_TYPE_NAME.NAVIGATION_WIDGET}{
                                slug
                                links
                              }`;
FRAGMENTS.ASSET_WIDGET = `${WIDGET_TYPE_NAME.ASSET_WIDGET}{
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
FRAGMENTS.ASSETS_GALLERY_WIDGET = `${WIDGET_TYPE_NAME.ASSETS_COLLECTION}{
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


export const COVER_QUERY = (props: iProps) => {
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
            query DocumentCollection($limit: Int, $skip: Int, $where: DocumentFilter, $order: [DocumentOrder]) {
              documentCollection(limit: $limit, skip: $skip, where: $where, order: $order) {
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
                          ... on ${FRAGMENTS.ASSETS_GALLERY_WIDGET}
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