import {getFromCache, saveToCache} from "~src/utils/cache.utils";
import {iFunctionOptions} from "~gqlConfig";
import {tCover} from "./model";
import {fetchDataGql} from "./graphql";


export const fetchCover = async (slug: string, options: iFunctionOptions = {}) => {
    const cacheKey = `fetchCover_${slug}`;
    try {
        if (!options.byPassCache) {
            const cachedValue = getFromCache<tCover>(cacheKey);
            if (cachedValue) {
                return cachedValue;
            }
        }
        const response = await fetchDataGql(slug);
        const result = response?.[0];
        if (!options.byPassCache && result) {
            saveToCache(cacheKey, result);
        }
        return result;
    }
    catch (exception) {
        console.error(`Exception in ${cacheKey}`, exception);
        return null;
    }
};