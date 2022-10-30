import {axiosService} from "./axios.config";


const fetchSiteConfig = async () => {
    const result = await axiosService.get('/api/siteConfig');
    return result.data;
}


export {
    fetchSiteConfig
}