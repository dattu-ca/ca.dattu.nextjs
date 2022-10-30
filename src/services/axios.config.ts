import baseAxios from "axios";

const axiosService = baseAxios.create({
    baseURL: process.env.API_URL
});
const axiosContentful = baseAxios.create({});


export {axiosService, axiosContentful};