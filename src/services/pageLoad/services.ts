import {fetchCover, tCover} from "../cover";
import {tSiteData} from "./model";


export const fetchDataForPageLoad = async () => {
    const result = await Promise.all([
        new Promise(async (resolve) => {
            try {
                resolve(await fetchCover("app-settings-document"));
            }
            catch (ex) {
                console.error(ex);
                resolve({});
            }
        }),
        new Promise(async (resolve) => {
            try {
                resolve(await fetchCover("header-document"));
            }
            catch (ex) {
                console.error(ex);
                resolve({});
            }
        })
    ]);
    const siteData: tSiteData = {
        appSettings: result[0] as tCover,
        header: result[1] as tCover,
    }
    return siteData;
};