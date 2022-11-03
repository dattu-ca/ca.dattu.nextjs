import {ApolloClient, InMemoryCache} from "@apollo/client";

export const CONTENTFUL_GRAPHQL_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}?ACCESS_TOKEN=${process.env.CONTENTFUL_CONTENT_API_KEY}`;
export const API_URL = process.env.API_URL;

const gqlClient = new ApolloClient({
    uri: CONTENTFUL_GRAPHQL_URL,
    cache: new InMemoryCache()
});

export {gqlClient};