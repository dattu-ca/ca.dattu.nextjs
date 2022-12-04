import {gqlClient} from "~gqlConfig";
import {gql} from "@apollo/client";


interface iProps {
    where: Record<string, any>,
    order?: string[],
    limit?: number,
    skip?: number,
}

export const WIDGET_TYPE_NAME ={
    JSON_DATA_WIDGET: 'JsonDataWidget',
    NAVIGATION_WIDGET: 'NavigationWidget',
}


const FRAGMENTS = {
    JSON_DATA_WIDGET: `JsonDataWidget{
                            slug
                            data
                          }`,
    NAVIGATION_WIDGET: `NavigationWidget{
                            slug
                            links
                          }`
}


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
            query CoverCollection($limit: Int, $skip: Int, $where: CoverFilter, $order: [CoverOrder]) {
              coverCollection(limit: $limit, skip: $skip, where: $where, order: $order) {
                items {
                  sys {
                    id
                  }
                  slug
                  content {
                    json
                    links {
                      entries {
                        block{
                          sys {
                            id
                          }
                          typename: __typename
                          ... on ${FRAGMENTS.JSON_DATA_WIDGET}
                          ... on ${FRAGMENTS.NAVIGATION_WIDGET}
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