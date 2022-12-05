import {getFromCache, saveToCache} from '~src/utils/cache.utils';
import {iLink} from "~src/models";
import {getNavigationGql} from "./navigation.graphql";
import {iFunctionOptions} from "./config";



const fetchNavigation = async (slug: string, options: iFunctionOptions = {}): Promise<Array<iLink>> => {
    try {
        const cacheKey = `fetchNavigation_${slug}`;
        if (!options.byPassCache) {
            const cachedValue = getFromCache<Array<iLink>>(cacheKey);
            if (cachedValue) {
                return cachedValue;
            }
        }
        const result = await getNavigationGql(slug);
        if (!options.byPassCache) {
            saveToCache(cacheKey, result);
        }
        return result;
    }
    catch (exception) {
        console.error(`Exception in fetchNavigation_${slug}`, exception);
        return [];
    }
};

export {fetchNavigation};