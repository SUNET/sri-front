/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CustomerQueryVariables = {|
  customerId: string
|};
export type CustomerQueryResponse = {|
  +getCustomerById: ?{|
    +__typename: string,
    +id: string,
    +name: string,
  |}
|};
export type CustomerQuery = {|
  variables: CustomerQueryVariables,
  response: CustomerQueryResponse,
|};
*/


/*
query CustomerQuery(
  $customerId: ID!
) {
  getCustomerById(id: $customerId) {
    __typename
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "customerId",
    "type": "ID!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "customerId"
      }
    ],
    "concreteType": "Customer",
    "kind": "LinkedField",
    "name": "getCustomerById",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CustomerQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CustomerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CustomerQuery",
    "operationKind": "query",
    "text": "query CustomerQuery(\n  $customerId: ID!\n) {\n  getCustomerById(id: $customerId) {\n    __typename\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c8c50cc38e57bd2936f12f7de05f1009';

module.exports = node;
