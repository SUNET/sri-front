/**
 * @flow
 * @relayHash 9f0011ff3d5ccc28286d3db37658709c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DropdownRolesQueryVariables = {||};
export type DropdownRolesQueryResponse = {|
  +roles: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +handle_id: string,
        +name: string,
      |}
    |}>
  |}
|};
export type DropdownRolesQuery = {|
  variables: DropdownRolesQueryVariables,
  response: DropdownRolesQueryResponse,
|};
*/


/*
query DropdownRolesQuery {
  roles {
    edges {
      node {
        handle_id
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "roles",
    "storageKey": null,
    "args": null,
    "concreteType": "RoleConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "RoleEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Role",
            "plural": false,
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
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DropdownRolesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DropdownRolesQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "DropdownRolesQuery",
    "id": null,
    "text": "query DropdownRolesQuery {\n  roles {\n    edges {\n      node {\n        handle_id\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a1b6c6ecff5a630b369d4985acb532f1';
module.exports = node;
