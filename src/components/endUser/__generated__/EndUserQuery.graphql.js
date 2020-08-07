/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EndUserQueryVariables = {|
  endUserId: string
|};
export type EndUserQueryResponse = {|
  +getEndUserById: ?{|
    +__typename: string,
    +id: string,
    +name: string,
    +type: {|
      +name: string
    |},
  |}
|};
export type EndUserQuery = {|
  variables: EndUserQueryVariables,
  response: EndUserQueryResponse,
|};
*/


/*
query EndUserQuery(
  $endUserId: ID!
) {
  getEndUserById(id: $endUserId) {
    __typename
    id
    name
    type: node_type {
      name: type
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "endUserId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "endUserId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": "name",
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EndUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "EndUser",
        "kind": "LinkedField",
        "name": "getEndUserById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": "type",
            "args": null,
            "concreteType": "NINodeType",
            "kind": "LinkedField",
            "name": "node_type",
            "plural": false,
            "selections": [
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EndUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "EndUser",
        "kind": "LinkedField",
        "name": "getEndUserById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": "type",
            "args": null,
            "concreteType": "NINodeType",
            "kind": "LinkedField",
            "name": "node_type",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "EndUserQuery",
    "operationKind": "query",
    "text": "query EndUserQuery(\n  $endUserId: ID!\n) {\n  getEndUserById(id: $endUserId) {\n    __typename\n    id\n    name\n    type: node_type {\n      name: type\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8690a461b02b5963e208e223d7afffb2';

module.exports = node;
