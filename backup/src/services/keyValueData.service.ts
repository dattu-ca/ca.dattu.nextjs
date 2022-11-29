import {iKeyValue, iLink} from "~src/models";
import {getFromCache, saveToCache} from "~src/utils/cache.utils";
import {getKeyValueDataGql} from "./keyValueData.graphql";
import {iFunctionOptions} from "~src/services/config";


const fetchKeyValueData = async (slug: string, options: iFunctionOptions = {}): Promise<iKeyValue | null> => {
    try {
        const cacheKey = `fetchKeyValueData_${slug}`;
        if (!options.byPassCache) {
            const cachedValue = getFromCache<iKeyValue>(cacheKey);
            if (cachedValue) {
                return cachedValue;
            }
        }
        const result = await getKeyValueDataGql(slug);
        if (!options.byPassCache) {
            saveToCache(cacheKey, result);
        }
        return result;
    }
    catch (exception) {
        console.error(`Exception in fetchKeyValueData_${slug}`, exception);
        return [];
    }
};

export {fetchKeyValueData};