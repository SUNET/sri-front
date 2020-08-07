/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HostUserQueryVariables = {|
  hostUserId: string
|};
export type HostUserQueryResponse = {|
  +getHostUserById: ?{|
    +__typename: string,
    +id: string,
    +name: string,
    +type: {|
      +name: string
    |},
  |}
|};
export type HostUserQuery = {|
  variables: HostUserQueryVariables,
  response: HostUserQueryResponse,
|};
*/


/*
query HostUserQuery(
  $hostUserId: ID!
) {
  getHostUserById(id: $hostUserId) {
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
    "name": "hostUserId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "hostUserId"
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
    "name": "HostUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HostUser",
        "kind": "LinkedField",
        "name": "getHostUserById",
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
    "name": "HostUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HostUser",
        "kind": "LinkedField",
        "name": "getHostUserById",
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
    "name": "HostUserQuery",
    "operationKind": "query",
    "text": "query HostUserQuery(\n  $hostUserId: ID!\n) {\n  getHostUserById(id: $hostUserId) {\n    __typename\n    id\n    name\n    type: node_type {\n      name: type\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4451ab944163fcddd5207e216da559de';

module.exports = node;
