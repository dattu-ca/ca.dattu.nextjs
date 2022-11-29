import {iFunctionOptions} from "~src/services/config";
import {iPagesSmall} from "~src/models";
import {getFromCache, saveToCache} from "~src/utils/cache.utils";
import {getAllPagesSlugsGql} from "./pagesSlugs.graphql";


const fetchPagesSlugs = async (options: iFunctionOptions = {}): Promise<iPagesSmall> => {
    try {
        const cacheKey = "fetchPagesSlugs";
        if (!options.byPassCache) {
            const cachedValue = getFromCache<iPagesSmall>(cacheKey);
            if (cachedValue) {
                return cachedValue;
            }
        }
        const result = await getAllPagesSlugsGql();
        if (!options.byPassCache) {
            saveToCache(cacheKey, result);
        }
        return result;
    }
    catch (exception) {
        console.error("Exception in fetchPages", exception);
        return {pages: []};
    }
};

export {fetchPagesSlugs};