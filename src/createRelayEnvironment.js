import { Environment, Network, RecordSource, Store, QueryResponseCache } from "relay-runtime";
import { API_HOST } from "./config";

// CACHING
const oneMinute = 1; // the cache is deactivated because the filters stop working, because when you change the filters the variables are kept.
const cache = new QueryResponseCache({ size: 100, ttl: oneMinute });

export let _csrfToken = null;

async function getCsrfToken() {
    if (_csrfToken === null) {
        const response = await fetch(`${API_HOST}/csrf/`, {
            credentials: "include"
        });
        const data = await response.json();
        _csrfToken = data.csrfToken;
    }
    return _csrfToken;
}

async function fetchQuery(operation, variables, cacheConfig, uploadables) {
    const queryId = operation.name;
    const isMutation = operation.operationKind === "mutation";
    const isQuery = operation.operationKind === "query";
    const cachedData = cache.get(queryId, variables);
    const forceLoad = cacheConfig && cacheConfig.force;

    if (isQuery && !forceLoad && cachedData) {
        return cachedData;
    }

    if (forceLoad) {
        // clear() means to reset all the cache, not only the entry addressed by specific queryId.
        cache.clear();
    }

    const csrfToken = await getCsrfToken();
    return fetch(`${API_HOST}/graphql/`, {
        credentials: "include",
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken
        },
        body: JSON.stringify({
            query: operation.text,
            variables
        })
    })
        .then((response) => {
<<<<<<< HEAD
<<<<<<< Updated upstream
            // if (response.redirected) {
            //     document.location = response.url;
            // }
=======
            if (response.redirected) {
                console.log(response.url);
                document.location.href = response.url;
            }
>>>>>>> Stashed changes
=======
>>>>>>> acba4c65d845bc2b90a5c27a9d99e2f7ab87cc2a
            return response.json();
        })
        .then((json) => {
            // Update cache on queries
            if (isQuery && json) {
                cache.set(queryId, variables, json);
            }
            // Clear cache on mutations
            if (isMutation) {
                cache.clear();
            }

            return json;
        });
}

const RelayEnvironment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource())
});

export default RelayEnvironment;
