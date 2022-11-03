import {iLink, iSiteConfig} from "~src/models";
import {fetchSiteConfig} from "./siteConfig.service";
import {fetchNavigation} from "./navigation.service";


interface iFunction {
    (): Promise<[iSiteConfig | null, Array<iLink>]>;
}

const fetchSiteData: iFunction = async () => {
    return await Promise.all([fetchSiteConfig(), fetchNavigation("header-navigation")]);
};

export {
    fetchSiteData
};