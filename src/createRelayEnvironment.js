import { Environment, Network, RecordSource, Store } from "relay-runtime";

function fetchQuery(operation, variables) {
    return fetch("http://django.localni.info/graphql/", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: operation.text,
            variables
        })
    }).then((response) => {
        console.log(response);
        document.location = response.url
        // return response.json();
    });
}

const RelayEnvironment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource())
});

export default RelayEnvironment;
