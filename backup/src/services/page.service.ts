import {getFromCache, saveToCache} from "~src/utils/cache.utils";
import {iPage} from "~src/models";
import {iFunctionOptions} from "./config";
import {getPageGql} from "./page.graphql";

const fetchPage = async (slug: string, options: iFunctionOptions = {}): Promise<iPage | null> => {
    try {
        const cacheKey = `fetchPage_${slug}`;
        if (!options.byPassCache) {
            const cachedValue = getFromCache<iPage>(cacheKey);
            if (cachedValue) {
                return cachedValue;
            }
        }
        const result = await getPageGql(slug);
        if (!options.byPassCache) {
            saveToCache(cacheKey, result);
        }
        return result;
    }
    catch (exception) {
        console.error(`Exception in fetchPage_${slug}`, exception);
        return null;
    }
};

export {fetchPage};