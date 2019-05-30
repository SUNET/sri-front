import {
    Environment,
    Network,
    RecordSource,
    Store,
    QueryResponseCache
} from "relay-runtime";
// import $ from "jquery";

// function getCookie(name) {
//     var cookieValue = null;
//     if (document.cookie && document.cookie !== "") {
//         var cookies = document.cookie.split(";");
//         for (var i = 0; i < cookies.length; i++) {
//             var cookie = $.trim(cookies[i]);
//             if (cookie.substring(0, name.length + 1) === name + "=") {
//                 cookieValue = decodeURIComponent(
//                     cookie.substring(name.length + 1)
//                 );
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }
//
// var csrftoken = getCookie("csrftoken");

// CACHING
const oneMinute = 60 * 1000;
const cache = new QueryResponseCache({ size: 100, ttl: oneMinute });

const API_HOST = "http://localhost:8000";

let _csrfToken = null;

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

function fetchQuery(operation, variables, cacheConfig, uploadables) {
    const queryId = operation.name;
    const isMutation = operation.operationKind === "mutation";
    const isQuery = operation.operationKind === "query";
    const cachedData = cache.get(queryId, variables);
    const forceLoad = cacheConfig && cacheConfig.force;

    console.log(isQuery);
    console.log(cacheConfig);
    console.log(cachedData);

    if (isQuery && !forceLoad && cachedData) {
        return cachedData;
    }

    if (forceLoad) {
        // clear() means to reset all the cache, not only the entry addressed by specific queryId.
        cache.clear();
    }

    return fetch(`${API_HOST}/graphql/`, {
        credentials: "include",
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": getCsrfToken()
        },
        body: JSON.stringify({
            query: operation.text,
            variables
        })
    })
        .then((response) => {
            if (response.redirected) {
                document.location = response.url;
            }
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
