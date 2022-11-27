import {iFunctionOptions} from "~src/services/config";
import {iContentWidget} from "~src/models";
import {getFromCache, saveToCache} from "~src/utils/cache.utils";
import {getContentWidgetGql} from "./contentWidget.graphql";


export const fetchContentWidget = async (id: string, options: iFunctionOptions = {}): Promise<iContentWidget | null> => {
    console.log("IN fetchContentWidget", id);
    try {
        const cacheKey = `fetchContentWidget_${id}`;
        if (!options.byPassCache) {
            const cachedValue = getFromCache<iContentWidget>(cacheKey);
            if (cachedValue) {
                return cachedValue;
            }
        }
        const result = await getContentWidgetGql(id);
        if (!options.byPassCache) {
            saveToCache(cacheKey, result);
        }
        return result;
    }
    catch (exception) {
        console.error(`Exception in fetchContentWidget_${id}`, exception);
        return null;
    }
};