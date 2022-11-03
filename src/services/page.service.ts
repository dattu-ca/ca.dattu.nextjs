import {getFromCache, saveToCache} from "~src/utils/cache.utils";
import {iPagesSmall, iPage} from "~src/models";
import {getAllPagesSlugsGql, getPageGql} from "./page.graphql";
import {iFunctionOptions} from "./model";


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

const fetchPage = async (slug: string, options: iFunctionOptions = {}): Promise<iPage | undefined> => {
    try {
        const cacheKey = `fetchPage_${slug}`;
        if (!options.byPassCache) {
            const cachedValue = getFromCache<iPage | undefined>(cacheKey);
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
        return undefined;
    }
};

export {fetchPagesSlugs, fetchPage};