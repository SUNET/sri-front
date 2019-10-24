/**
 * @flow
 * @relayHash 86fa8b5749827fac85eeee1e199ce684
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
  roles(orderBy: name_ASC) {
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
    "storageKey": "roles(orderBy:\"name_ASC\")",
    "args": [
      {
        "kind": "Literal",
        "name": "orderBy",
        "value": "name_ASC"
      }
    ],
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
    "text": "query DropdownRolesQuery {\n  roles(orderBy: name_ASC) {\n    edges {\n      node {\n        handle_id\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '800e8490f2fe0fc4299da688f6050334';
module.exports = node;
