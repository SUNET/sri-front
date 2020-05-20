/**
 * @flow
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
    "alias": null,
    "args": null,
    "concreteType": "Role",
    "kind": "LinkedField",
    "name": "getRolesFromRoleGroup",
    "plural": true,
    "selections": [
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
    "name": "DropdownRolesGroupDefaultQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DropdownRolesGroupDefaultQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DropdownRolesGroupDefaultQuery",
    "operationKind": "query",
    "text": "query DropdownRolesGroupDefaultQuery {\n  getRolesFromRoleGroup {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '043a40cac57805ab994f5489662ee97f';

module.exports = node;
