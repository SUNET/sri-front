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
    +operational_state: string,
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
    operational_state
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "switchId"
      }
    ],
    "concreteType": "Switch",
    "kind": "LinkedField",
    "name": "getSwitchById",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "operational_state",
        "storageKey": null
      },
      {
        "alias": "type",
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
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
    "name": "SwitchQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SwitchQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SwitchQuery",
    "operationKind": "query",
    "text": "query SwitchQuery(\n  $switchId: ID!\n) {\n  getSwitchById(id: $switchId) {\n    __typename\n    id\n    name\n    description\n    operational_state\n    type: __typename\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '141b2fafaa94acbc6e7a494a2f0b1899';

module.exports = node;
