/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DropdownOwnersQueryVariables = {||};
export type DropdownOwnersQueryResponse = {|
  +getHostOwnerTypes: ?$ReadOnlyArray<?{|
    +name: string,
    +value: string,
    +getDetailsMethodName: string,
    +all_name: string,
  |}>
|};
export type DropdownOwnersQuery = {|
  variables: DropdownOwnersQueryVariables,
  response: DropdownOwnersQueryResponse,
|};
*/


/*
query DropdownOwnersQuery {
  getHostOwnerTypes {
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
    "name": "getHostOwnerTypes",
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
    "name": "DropdownOwnersQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DropdownOwnersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DropdownOwnersQuery",
    "operationKind": "query",
    "text": "query DropdownOwnersQuery {\n  getHostOwnerTypes {\n    name: type_name\n    value: connection_name\n    getDetailsMethodName: byid_name\n    all_name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '44cf37c1f343e36b2bff7259ec8e9dbd';

module.exports = node;
