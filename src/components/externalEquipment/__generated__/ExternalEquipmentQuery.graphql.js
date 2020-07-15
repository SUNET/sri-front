/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ExternalEquipmentQueryVariables = {|
  externalEquipmentId: string
|};
export type ExternalEquipmentQueryResponse = {|
  +getExternalEquipmentById: ?{|
    +__typename: string,
    +id: string,
    +name: string,
    +description: ?string,
    +type: string,
  |}
|};
export type ExternalEquipmentQuery = {|
  variables: ExternalEquipmentQueryVariables,
  response: ExternalEquipmentQueryResponse,
|};
*/


/*
query ExternalEquipmentQuery(
  $externalEquipmentId: ID!
) {
  getExternalEquipmentById(id: $externalEquipmentId) {
    __typename
    id
    name
    description
    type: __typename
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "externalEquipmentId",
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
        "variableName": "externalEquipmentId"
      }
    ],
    "concreteType": "ExternalEquipment",
    "kind": "LinkedField",
    "name": "getExternalEquipmentById",
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
    "name": "ExternalEquipmentQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ExternalEquipmentQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ExternalEquipmentQuery",
    "operationKind": "query",
    "text": "query ExternalEquipmentQuery(\n  $externalEquipmentId: ID!\n) {\n  getExternalEquipmentById(id: $externalEquipmentId) {\n    __typename\n    id\n    name\n    description\n    type: __typename\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dda429fcb38de818723f952a44b1a38a';

module.exports = node;
