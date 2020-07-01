/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CableQueryVariables = {|
  cableId: string
|};
export type CableQueryResponse = {|
  +getCableById: ?{|
    +__typename: string,
    +id: string,
    +name: string,
    +description: ?string,
    +type: ?{|
      +name: string,
      +value: string,
    |},
  |}
|};
export type CableQuery = {|
  variables: CableQueryVariables,
  response: CableQueryResponse,
|};
*/


/*
query CableQuery(
  $cableId: ID!
) {
  getCableById(id: $cableId) {
    __typename
    id
    name
    description
    type: cable_type {
      name
      value
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
    "name": "cableId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "cableId"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CableQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Cable",
        "kind": "LinkedField",
        "name": "getCableById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": "type",
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "cable_type",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v6/*: any*/)
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
    "name": "CableQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Cable",
        "kind": "LinkedField",
        "name": "getCableById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": "type",
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "cable_type",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v6/*: any*/),
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
    "name": "CableQuery",
    "operationKind": "query",
    "text": "query CableQuery(\n  $cableId: ID!\n) {\n  getCableById(id: $cableId) {\n    __typename\n    id\n    name\n    description\n    type: cable_type {\n      name\n      value\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f8265e6d7dfe4c4f675b565d8815ade4';

module.exports = node;
