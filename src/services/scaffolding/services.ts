import {fetchCopy, tCopy} from "../copy";
import {tScaffoldingData} from "./model";


export const fetchScaffoldingData = async () => {
    const result = await Promise.all([
        new Promise(async (resolve) => {
            try {
                resolve(await fetchCopy("app-settings-copy"));
            }
            catch (ex) {
                console.error(ex);
                resolve({});
            }
        }),
        new Promise(async (resolve) => {
            try {
                resolve(await fetchCopy("header-copy"));
            }
            catch (ex) {
                console.error(ex);
                resolve({});
            }
        })
    ]);
    const siteData: tScaffoldingData = {
        appSettings: result[0] as tCopy,
        header: result[1] as tCopy,
    }
    return siteData;
};