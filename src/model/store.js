
/**
 * creates a pluralized version of a string
 * @param noun
 * @param suffix
 * @returns {`${string}s`}
 */
const pluralize = (noun, suffix = 's') =>
    `${noun}${suffix}`;

let cache = {}
let models = {}
let rootUrl = '/'
/**
 * Singleton to load and instantiate models
 * todo: fix cache for comment releationship
 * todo: maybe pass in state to find and findAll and have store setState directly?
 * @type {{models: {}, registerModel: Store.registerModel, cache: {}, find: Store.find, listUrl(*): string, detailUrl(*): string}}
 */
export const Store  = {
    registerRootUrl: (url) => {
        rootUrl = url;
    },
    registerModel: (name, model) => {
        models[name] = model;
        cache[name] = new Map();
    },
    /**
     * retrieve a single instance of a model
     * @param name
     * @param id
     */
    find: (name, id, basePath='') => {
        if(!models.hasOwnProperty(name)){
            throw new TypeError(`model ${name} not registered with the store`);
        }
        if ( cache[name].get(id)) {
            return new Promise((resolve) => {
                resolve(cache[name].get(id));
            });
        }
        const url = Store.detailUrl(name, id, basePath)
        return new Promise((resolve) =>
        {
            fetch(url)
                .then((result) => result.json()
                .then((result) => {
                   cache[name].set(result.id, new models[name](result));
                   resolve(cache[name].get(result.id));
                }))
        });
    },
    /**
     * retrieve all the models
     *
     * @param name
     */
    findAll: (name, basePath='', disableCache=false) => {
        if(!models.hasOwnProperty(name)){
            throw TypeError(`model ${name} not registered with the store`);
        }
        if (!cache[name]) {
            cache[name] = new Map();
        }
        if(!disableCache && cache[name] && cache[name].size > 0) {
            return new Promise((resolve) => {
                resolve(cache[name]);
            });
        }
        const url = Store.listUrl(name, basePath)
        return new Promise((resolve) =>
        {
            fetch(url)
                .then((result) => result.json())
                .then((result) => {
                    cache[name] = new Map();
                    result.forEach(item => {
                        cache[name].set(item.id, new models[name](item));
                    })
                    resolve(cache[name]);
                });
        });

    },
    /**
     * the url to retrieve a single instance of the model
     * @param modelName - the name of the model
     * @param id - the id of the model to retrieve
     * @returns {string}
     */
    detailUrl(modelName, id, basePath='') {
        const path = pluralize(modelName);
        return `${rootUrl}${basePath}${path}/${id}`;
    },

    /**
     * the url to retrieve a list of the models
     * @param
     * @returns {string}
     */
    listUrl(modelName, basePath='') {
        const path = pluralize(modelName);
        return `${rootUrl}${basePath}${path}`;
    }

}