import baseAxios from "axios";
import {API_URL, CONTENTFUL_GRAPHQL_URL} from "~src/services/config";

const axiosService = baseAxios.create({
    baseURL: API_URL
});
const axiosContentful = baseAxios.create({
    baseURL: CONTENTFUL_GRAPHQL_URL
});


export {axiosService, axiosContentful};