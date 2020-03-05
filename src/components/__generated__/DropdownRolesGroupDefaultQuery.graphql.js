/**
 * @flow
 * @relayHash 9e3d998b05c3a0c11fbc0d7abd185d86
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DropdownRolesGroupDefaultQueryVariables = {||};
export type DropdownRolesGroupDefaultQueryResponse = {|
  +getRolesFromRoleGroup: ?$ReadOnlyArray<?{|
    +id: string,
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
    id
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
        "name": "id",
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
    "text": "query DropdownRolesGroupDefaultQuery {\n  getRolesFromRoleGroup {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '043a40cac57805ab994f5489662ee97f';
module.exports = node;
