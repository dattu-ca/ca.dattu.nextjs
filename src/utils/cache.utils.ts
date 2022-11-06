import cacheData from "memory-cache";


const MAX_CACHE_AGE = 15 * 60 * 60;

const saveToCache = <Type>(key: string, data: Type, maxAge = MAX_CACHE_AGE) => {
    const timeStampedData = {
        maxAge: new Date((new Date()).valueOf() + maxAge).valueOf(),
        data: data
    };
    cacheData.put(key, timeStampedData);
};

const getFromCache = <Type>(key: string): (Type | null) => {
    const cachedRaw = cacheData.get(key);
    if (cachedRaw) {
        const {maxAge} = cachedRaw;
        if (maxAge < (new Date()).valueOf()) {
            return cachedRaw.data as Type;
        }
    }
    return null;
};


export {
    saveToCache,
    getFromCache
};