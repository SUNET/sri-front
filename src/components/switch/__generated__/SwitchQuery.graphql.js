/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SwitchQueryVariables = {|
  switchId: string
|};
export type SwitchQueryResponse = {|
  +getSwitchById: ?{|
    +__typename: string,
    +id: string,
    +name: string,
    +description: ?string,
    +operational_state: ?{|
      +name: string,
      +value: string,
    |},
    +type: string,
  |}
|};
export type SwitchQuery = {|
  variables: SwitchQueryVariables,
  response: SwitchQueryResponse,
|};
*/


/*
query SwitchQuery(
  $switchId: ID!
) {
  getSwitchById(id: $switchId) {
    __typename
    id
    name
    description
    operational_state {
      name
      value
      id
    }
    type: __typename
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "switchId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "switchId"
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
},
v7 = {
  "alias": "type",
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SwitchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Switch",
        "kind": "LinkedField",
        "name": "getSwitchById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "operational_state",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/)
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
    "name": "SwitchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Switch",
        "kind": "LinkedField",
        "name": "getSwitchById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "operational_state",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v6/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SwitchQuery",
    "operationKind": "query",
    "text": "query SwitchQuery(\n  $switchId: ID!\n) {\n  getSwitchById(id: $switchId) {\n    __typename\n    id\n    name\n    description\n    operational_state {\n      name\n      value\n      id\n    }\n    type: __typename\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '96f1edd82423cbb7d8aa99e55842ea55';

module.exports = node;
