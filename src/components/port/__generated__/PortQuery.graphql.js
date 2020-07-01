/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PortQueryVariables = {|
  portId: string
|};
export type PortQueryResponse = {|
  +getPortById: ?{|
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
export type PortQuery = {|
  variables: PortQueryVariables,
  response: PortQueryResponse,
|};
*/


/*
query PortQuery(
  $portId: ID!
) {
  getPortById(id: $portId) {
    __typename
    id
    name
    description
    type: port_type {
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
    "name": "portId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "portId"
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
    "name": "PortQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Port",
        "kind": "LinkedField",
        "name": "getPortById",
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
            "name": "port_type",
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
    "name": "PortQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Port",
        "kind": "LinkedField",
        "name": "getPortById",
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
            "name": "port_type",
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
    "name": "PortQuery",
    "operationKind": "query",
    "text": "query PortQuery(\n  $portId: ID!\n) {\n  getPortById(id: $portId) {\n    __typename\n    id\n    name\n    description\n    type: port_type {\n      name\n      value\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f283c6a43100d5be93d7a43f37b6b969';

module.exports = node;
