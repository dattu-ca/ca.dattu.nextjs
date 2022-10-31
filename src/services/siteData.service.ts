import {iHeaderNavigation, iSiteConfig} from "~src/models";
import {fetchSiteConfig} from "./siteConfig.service";
import {fetchHeaderNavigation} from "./headerNaigation.service";
import {siteConfigMock} from "~src/services/mock/siteConfig.mock";
import {headerNavigationMock} from "~src/services/mock/headerNavigation.mock";


interface iFunction {
    (): Promise<[iSiteConfig, iHeaderNavigation]>;
}

const fetchSiteData: iFunction = async () => {
    try {
        return await Promise.all([fetchSiteConfig(), fetchHeaderNavigation()]);
    }
    catch (ex) /* istanbul ignore next */ {        
        console.error("fetchSiteData logged an error");
        return [siteConfigMock.get, headerNavigationMock.get];
    }
};

export {
    fetchSiteData
};