/**
 * @flow
 * @relayHash ffc413b0cf7ccf31b2d718874e3a73a4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DropdownRolesGroupDefaultQueryVariables = {||};
export type DropdownRolesGroupDefaultQueryResponse = {|
  +getRolesFromRoleGroup: ?$ReadOnlyArray<?{|
    +handle_id: string,
    +name: string,
  |}>
|};
export type DropdownRolesGroupDefaultQuery = {|
  variables: DropdownRolesGroupDefaultQueryVariables,
  response: DropdownRolesGroupDefaultQueryResponse,
|};
*/


/*
query DropdownRolesGroupDefaultQuery {
  getRolesFromRoleGroup {
    handle_id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "getRolesFromRoleGroup",
    "storageKey": null,
    "args": null,
    "concreteType": "Role",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "handle_id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DropdownRolesGroupDefaultQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DropdownRolesGroupDefaultQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "DropdownRolesGroupDefaultQuery",
    "id": null,
    "text": "query DropdownRolesGroupDefaultQuery {\n  getRolesFromRoleGroup {\n    handle_id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f9f8e9179ae1f1892dcad6539690d18c';
module.exports = node;
