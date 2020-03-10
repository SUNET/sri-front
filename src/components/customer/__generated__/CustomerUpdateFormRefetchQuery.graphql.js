/**
 * @flow
 * @relayHash 7e230a3c6cb433082161df773168fa5f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CustomerUpdateForm_customer$ref = any;
export type CustomerUpdateFormRefetchQueryVariables = {|
  customerId: string
|};
export type CustomerUpdateFormRefetchQueryResponse = {|
  +getCustomerById: ?{|
    +$fragmentRefs: CustomerUpdateForm_customer$ref
  |}
|};
export type CustomerUpdateFormRefetchQuery = {|
  variables: CustomerUpdateFormRefetchQueryVariables,
  response: CustomerUpdateFormRefetchQueryResponse,
|};
*/


/*
query CustomerUpdateFormRefetchQuery(
  $customerId: ID!
) {
  getCustomerById(id: $customerId) {
    ...CustomerUpdateForm_customer
    id
  }
}

fragment CustomerUpdateForm_customer on Customer {
  id
  name
  description
  url
  created
  creator {
    email
    id
  }
  modified
  modifier {
    email
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "customerId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "customerId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "email",
    "args": null,
    "storageKey": null
  },
  (v2/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CustomerUpdateFormRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getCustomerById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Customer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CustomerUpdateForm_customer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CustomerUpdateFormRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getCustomerById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Customer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "url",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "created",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v3/*: any*/)
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "modified",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v3/*: any*/)
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CustomerUpdateFormRefetchQuery",
    "id": null,
    "text": "query CustomerUpdateFormRefetchQuery(\n  $customerId: ID!\n) {\n  getCustomerById(id: $customerId) {\n    ...CustomerUpdateForm_customer\n    id\n  }\n}\n\nfragment CustomerUpdateForm_customer on Customer {\n  id\n  name\n  description\n  url\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '551df833d0b2379ba31f888cb792cef8';
module.exports = node;
