/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DropdownPhysicalTypesQueryVariables = {||};
export type DropdownPhysicalTypesQueryResponse = {|
  +getTypesForMetatype: ?$ReadOnlyArray<?{|
    +name: string,
    +value: string,
    +getDetailsMethodName: string,
    +all_name: string,
  |}>
|};
export type DropdownPhysicalTypesQuery = {|
  variables: DropdownPhysicalTypesQueryVariables,
  response: DropdownPhysicalTypesQueryResponse,
|};
*/


/*
query DropdownPhysicalTypesQuery {
  getTypesForMetatype(metatype: Physical) {
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
    "args": [
      {
        "kind": "Literal",
        "name": "metatype",
        "value": "Physical"
      }
    ],
    "concreteType": "TypeInfo",
    "kind": "LinkedField",
    "name": "getTypesForMetatype",
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
    "storageKey": "getTypesForMetatype(metatype:\"Physical\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DropdownPhysicalTypesQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DropdownPhysicalTypesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DropdownPhysicalTypesQuery",
    "operationKind": "query",
    "text": "query DropdownPhysicalTypesQuery {\n  getTypesForMetatype(metatype: Physical) {\n    name: type_name\n    value: connection_name\n    getDetailsMethodName: byid_name\n    all_name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ef14f380c94108fa0ce8edcd3f0fc888';

module.exports = node;
