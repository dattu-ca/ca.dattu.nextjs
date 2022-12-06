import {getFromCache, saveToCache} from "~src/utils/cache.utils";
import {iFunctionOptions} from "~gqlConfig";
import {Copy} from "./model";
import {fetchDataGql} from "./graphql";


export const fetchCopy = async (slug: string, options: iFunctionOptions = {}) => {
    const cacheKey = `fetchDocument_${slug}`;
    try {
        if (!options.byPassCache) {
            const cachedValue = getFromCache<Copy>(cacheKey);
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