import {iSiteConfig} from "~src/models";


const fetchSiteConfig = ():Promise<iSiteConfig | null> => {
    return new Promise(resolve => resolve(null))
};

export {fetchSiteConfig};