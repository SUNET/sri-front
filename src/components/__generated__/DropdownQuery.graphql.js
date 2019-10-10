/**
 * @flow
 * @relayHash 232e05362cf7d621a99a6e2482004d16
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
    name
    value
    id
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
    "variableName": "name"
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
        "concreteType": "Choice",
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
        "concreteType": "Choice",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DropdownQuery",
    "id": null,
    "text": "query DropdownQuery(\n  $name: String!\n) {\n  getChoicesForDropdown(name: $name) {\n    name\n    value\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a084763b46e47fd40d438714d89c94e1';
module.exports = node;
