import {getFromCache, saveToCache} from "~src/utils/cache.utils";
import {iPagesSmall, iPage} from "~src/models";
import {getAllPagesSlugsGql, getPageGql} from "./page.graphql";
import {iFunctionOptions} from "./config";


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

export {fetchPagesSlugs, fetchPage};