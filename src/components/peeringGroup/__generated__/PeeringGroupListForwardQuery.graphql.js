/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PeeringGroupList_peeringGroups$ref = any;
export type PeeringGroupOrderBy = "created_ASC" | "created_DESC" | "handle_id_ASC" | "handle_id_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "%future added value";
export type PeeringGroupListForwardQueryVariables = {|
  count: number,
  cursor?: ?string,
  orderBy?: ?PeeringGroupOrderBy,
|};
export type PeeringGroupListForwardQueryResponse = {|
  +$fragmentRefs: PeeringGroupList_peeringGroups$ref
|};
export type PeeringGroupListForwardQuery = {|
  variables: PeeringGroupListForwardQueryVariables,
  response: PeeringGroupListForwardQueryResponse,
|};
*/


/*
query PeeringGroupListForwardQuery(
  $count: Int!
  $cursor: String
  $orderBy: PeeringGroupOrderBy
) {
  ...PeeringGroupList_peeringGroups_32czeo
}

fragment PeeringGroupList_peeringGroups_32czeo on Query {
  peeringGroups(first: $count, after: $cursor, orderBy: $orderBy) {
    edges {
      node {
        id
        ...PeeringGroupRow_peeringGroup
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment PeeringGroupRow_peeringGroup on PeeringGroup {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "PeeringGroupOrderBy"
  }
],
v1 = {
  "kind": "Variable",
  "name": "orderBy",
  "variableName": "orderBy"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v1/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PeeringGroupListForwardQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "PeeringGroupList_peeringGroups"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PeeringGroupListForwardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "peeringGroupConnection",
        "kind": "LinkedField",
        "name": "peeringGroups",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "peeringGroupEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PeeringGroup",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": [],
        "handle": "connection",
        "key": "PeeringGroupList_peeringGroups",
        "kind": "LinkedHandle",
        "name": "peeringGroups"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "PeeringGroupListForwardQuery",
    "operationKind": "query",
    "text": "query PeeringGroupListForwardQuery(\n  $count: Int!\n  $cursor: String\n  $orderBy: PeeringGroupOrderBy\n) {\n  ...PeeringGroupList_peeringGroups_32czeo\n}\n\nfragment PeeringGroupList_peeringGroups_32czeo on Query {\n  peeringGroups(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...PeeringGroupRow_peeringGroup\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment PeeringGroupRow_peeringGroup on PeeringGroup {\n  id\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '09d214f0a96fffb82e5e4e471e8fc2be';

module.exports = node;
