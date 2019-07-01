/**
 * @flow
 * @relayHash 02a4a74b65b77b74c624961d62903fb4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DropdownQueryVariables = {|
  name: string
|};
export type DropdownQueryResponse = {|
  +getChoicesForDropdown: ?$ReadOnlyArray<?{|
    +name: string,
    +value: string,
  |}>
|};
export type DropdownQuery = {|
  variables: DropdownQueryVariables,
  response: DropdownQueryResponse,
|};
*/


/*
query DropdownQuery(
  $name: String!
) {
  getChoicesForDropdown(name: $name) {
    __typename
    name
    value
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name",
    "type": "String!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DropdownQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getChoicesForDropdown",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DropdownQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getChoicesForDropdown",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DropdownQuery",
    "id": null,
    "text": "query DropdownQuery(\n  $name: String!\n) {\n  getChoicesForDropdown(name: $name) {\n    __typename\n    name\n    value\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a084763b46e47fd40d438714d89c94e1';
module.exports = node;
