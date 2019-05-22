import { Environment, Network, RecordSource, Store } from "relay-runtime";
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

function fetchQuery(operation, variables) {
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
    }).then((response) => {
        if (response.redirected) {
            document.location = response.url;
        }
        return response.json();
    });
}

const RelayEnvironment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource())
});

export default RelayEnvironment;
