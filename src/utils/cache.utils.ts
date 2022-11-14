import cacheData from "memory-cache";


const MAX_CACHE_AGE = 15 * 60 * 60;
const ENABLE_CACHE = process.env.ENABLE_CACHE;

const saveToCache = <T>(key: string, data: T, maxAge = MAX_CACHE_AGE) => {
    if (ENABLE_CACHE === "true") {
        const timeStampedData = {
            maxAge: new Date((new Date()).valueOf() + maxAge).valueOf(),
            data: data
        };
        cacheData.put(key, timeStampedData);
    }
};

const getFromCache = <T>(key: string): (T | null) => {
    if (ENABLE_CACHE === "true") {
        const cachedRaw = cacheData.get(key);
        if (cachedRaw) {
            const {maxAge} = cachedRaw;
            if (maxAge < (new Date()).valueOf()) {
                return cachedRaw.data as T;
            }
        }
    }
    return null;
};


export {
    saveToCache,
    getFromCache
};