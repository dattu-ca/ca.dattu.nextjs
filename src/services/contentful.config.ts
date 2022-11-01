import {ApolloClient, InMemoryCache} from '@apollo/client';
import {CONTENTFUL_GRAPHQL_URL} from "~src/services/config";

const gqlClient = new ApolloClient({
    uri: CONTENTFUL_GRAPHQL_URL,
    cache: new InMemoryCache(),
});

export {gqlClient}