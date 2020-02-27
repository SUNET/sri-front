/**
 * @flow
 * @relayHash 16c79eb05107a9b31c68ac1db1e5b573
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CustomerList_customers$ref = any;
export type CustomerOrderBy = "created_ASC" | "created_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "url_ASC" | "url_DESC" | "%future added value";
export type CustomerListForwardQueryVariables = {|
  count: number,
  cursor?: ?string,
  orderBy?: ?CustomerOrderBy,
|};
export type CustomerListForwardQueryResponse = {|
  +$fragmentRefs: CustomerList_customers$ref
|};
export type CustomerListForwardQuery = {|
  variables: CustomerListForwardQueryVariables,
  response: CustomerListForwardQueryResponse,
|};
*/


/*
query CustomerListForwardQuery(
  $count: Int!
  $cursor: String
  $orderBy: CustomerOrderBy
) {
  ...CustomerList_customers_32czeo
}

fragment CustomerList_customers_32czeo on Query {
  customers(first: $count, after: $cursor, orderBy: $orderBy) {
    edges {
      node {
        id
        ...CustomerRow_customer
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment CustomerRow_customer on Customer {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "CustomerOrderBy",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "orderBy",
  "variableName": "orderBy"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v1/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CustomerListForwardQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "CustomerList_customers",
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CustomerListForwardQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "customers",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "CustomerConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "CustomerEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Customer",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "customers",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "CustomerList_customers",
        "filters": []
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CustomerListForwardQuery",
    "id": null,
    "text": "query CustomerListForwardQuery(\n  $count: Int!\n  $cursor: String\n  $orderBy: CustomerOrderBy\n) {\n  ...CustomerList_customers_32czeo\n}\n\nfragment CustomerList_customers_32czeo on Query {\n  customers(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...CustomerRow_customer\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment CustomerRow_customer on Customer {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f36b8f8588f7abd4fec1327cf44c867';
module.exports = node;
