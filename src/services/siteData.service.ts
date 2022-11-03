import {iHeaderNavigation, iSiteConfig} from "~src/models";
import {fetchSiteConfig} from "./siteConfig.service";
import {fetchHeaderNavigation} from "./headerNaigation.service";


interface iFunction {
    (): Promise<[iSiteConfig, iHeaderNavigation]>;
}

const fetchSiteData: iFunction = async () => {
    return await Promise.all([fetchSiteConfig(), fetchHeaderNavigation()]);
};

export {
    fetchSiteData
};