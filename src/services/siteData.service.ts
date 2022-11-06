import {iLink, iKeyValue} from "~src/models";
import {fetchKeyValueData} from "./keyValueData.service";
import {fetchNavigation} from "./navigation.service";


interface iFunction {
    (): Promise<[iKeyValue | null, Array<iLink>]>;
}

const fetchSiteData: iFunction = async () => {
    return await Promise.all([fetchKeyValueData('site-config', {byPassCache: true}), fetchNavigation("header-navigation")]);
};

export {
    fetchSiteData
};