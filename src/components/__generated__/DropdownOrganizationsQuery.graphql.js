/**
 * @flow
 * @relayHash 8e2ef1d072a1e829b2c544c14c230f86
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DropdownOrganizationsQueryVariables = {||};
export type DropdownOrganizationsQueryResponse = {|
  +organizations: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +handle_id: string,
        +name: string,
      |}
    |}>
  |}
|};
export type DropdownOrganizationsQuery = {|
  variables: DropdownOrganizationsQueryVariables,
  response: DropdownOrganizationsQueryResponse,
|};
*/


/*
query DropdownOrganizationsQuery {
  organizations(orderBy: handle_id_ASC) {
    edges {
      node {
        handle_id
        name
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "handle_id_ASC"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "handle_id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DropdownOrganizationsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "organizations",
        "storageKey": "organizations(orderBy:\"handle_id_ASC\")",
        "args": (v0/*: any*/),
        "concreteType": "OrganizationConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "OrganizationEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Organization",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DropdownOrganizationsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "organizations",
        "storageKey": "organizations(orderBy:\"handle_id_ASC\")",
        "args": (v0/*: any*/),
        "concreteType": "OrganizationConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "OrganizationEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Organization",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DropdownOrganizationsQuery",
    "id": null,
    "text": "query DropdownOrganizationsQuery {\n  organizations(orderBy: handle_id_ASC) {\n    edges {\n      node {\n        handle_id\n        name\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8fca9a920bbeddf789fef8a5bd90f6eb';
module.exports = node;
