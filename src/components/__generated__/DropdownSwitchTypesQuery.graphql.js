/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DropdownSwitchTypesQueryVariables = {||};
export type DropdownSwitchTypesQueryResponse = {|
  +getSwitchTypes: ?$ReadOnlyArray<?{|
    +value: string,
    +name: string,
  |}>
|};
export type DropdownSwitchTypesQuery = {|
  variables: DropdownSwitchTypesQueryVariables,
  response: DropdownSwitchTypesQueryResponse,
|};
*/


/*
query DropdownSwitchTypesQuery {
  getSwitchTypes {
    value: id
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": "value",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DropdownSwitchTypesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SwitchType",
        "kind": "LinkedField",
        "name": "getSwitchTypes",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DropdownSwitchTypesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SwitchType",
        "kind": "LinkedField",
        "name": "getSwitchTypes",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
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
    "name": "DropdownSwitchTypesQuery",
    "operationKind": "query",
    "text": "query DropdownSwitchTypesQuery {\n  getSwitchTypes {\n    value: id\n    name\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '797e00753e5cf3bb5183cdb2a55cb214';

module.exports = node;
