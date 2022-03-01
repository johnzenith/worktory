const getCacheKey = (key: string) => `worktory/${key}`;

/*
 * Cache Hook
 *
 * @param string key The key to use for the cache instance.
 */
const useLocalStorage = (key: string) => {
  const cacheKey = getCacheKey(key);

  return {
    /**
     * Get a cache item
     *
     * @return null|any Returns cache data on success. Null otherwise.
     */
    get: (): any => {
      try {
        let item: any = localStorage.getItem(cacheKey) || {};

        if (typeof item === 'string') {
          item = JSON.parse(item);
        }

        // Cache data is serialized and saved in object
        return item?.data;
      }
      catch (e) {
        return null;
      }
    },

    /**
     * Set a cache item
     *
     * @param data   data Cache data
     */
    set: (data: any): void => {
      const cacheData = JSON.stringify({ data });
      localStorage.setItem(cacheKey, cacheData);
    },

    /**
     * Remove a cache item
     * 
     * @return void
     */
    remove: (): void => {
      localStorage.removeItem(cacheKey);
    },
  };
};

export default useLocalStorage;