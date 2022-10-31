import {iSiteConfig} from "~src/models";
import {siteConfigMock} from "~src/services/mock/siteConfig.mock";


const fetchSiteConfig = () => {
    return new Promise<iSiteConfig>((resolve) => {
        return resolve(siteConfigMock.get);
    });
};

export {fetchSiteConfig};