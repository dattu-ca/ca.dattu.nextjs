import {iFunctionOptions} from "~src/services/config";
import {iExperience} from "~src/models";
import {getFromCache, saveToCache} from "~src/utils/cache.utils";
import {getExperienceGql} from "./experience.graphql";


export const fetchExperience = async (id: string, options: iFunctionOptions = {}): Promise<iExperience | null> => {
    try {
        const cacheKey = `fetchExperience_${id}`;
        if (!options.byPassCache) {
            const cachedValue = getFromCache<iExperience>(cacheKey);
            if (cachedValue) {
                return cachedValue;
            }
        }
        const result = await getExperienceGql(id);
        if (!options.byPassCache) {
            saveToCache(cacheKey, result);
        }
        return result;
    }
    catch (exception) {
        console.error(`Exception in fetchExperience_${id}`, exception);
        return null;
    }
};