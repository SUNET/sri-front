/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DropdownNetworkOrgTypesQueryVariables = {||};
export type DropdownNetworkOrgTypesQueryResponse = {|
  +getNetworkOrgTypes: ?$ReadOnlyArray<?{|
    +name: string,
    +value: string,
    +getDetailsMethodName: string,
    +all_name: string,
  |}>
|};
export type DropdownNetworkOrgTypesQuery = {|
  variables: DropdownNetworkOrgTypesQueryVariables,
  response: DropdownNetworkOrgTypesQueryResponse,
|};
*/


/*
query DropdownNetworkOrgTypesQuery {
  getNetworkOrgTypes {
    name: type_name
    value: connection_name
    getDetailsMethodName: byid_name
    all_name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TypeInfo",
    "kind": "LinkedField",
    "name": "getNetworkOrgTypes",
    "plural": true,
    "selections": [
      {
        "alias": "name",
        "args": null,
        "kind": "ScalarField",
        "name": "type_name",
        "storageKey": null
      },
      {
        "alias": "value",
        "args": null,
        "kind": "ScalarField",
        "name": "connection_name",
        "storageKey": null
      },
      {
        "alias": "getDetailsMethodName",
        "args": null,
        "kind": "ScalarField",
        "name": "byid_name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "all_name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DropdownNetworkOrgTypesQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DropdownNetworkOrgTypesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DropdownNetworkOrgTypesQuery",
    "operationKind": "query",
    "text": "query DropdownNetworkOrgTypesQuery {\n  getNetworkOrgTypes {\n    name: type_name\n    value: connection_name\n    getDetailsMethodName: byid_name\n    all_name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fccd54e4edf00f11a6c11de27bb1f6f1';

module.exports = node;
