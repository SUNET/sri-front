/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PeeringGroupList_peeringGroups$ref = any;
export type PeeringGroupOrderBy = "created_ASC" | "created_DESC" | "handle_id_ASC" | "handle_id_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "%future added value";
export type PeeringGroupFilter = {|
  AND?: ?$ReadOnlyArray<PeeringGroupNestedFilter>,
  OR?: ?$ReadOnlyArray<PeeringGroupNestedFilter>,
|};
export type PeeringGroupNestedFilter = {|
  name?: ?string,
  name_not?: ?string,
  name_lt?: ?string,
  name_lte?: ?string,
  name_gt?: ?string,
  name_gte?: ?string,
  name_contains?: ?string,
  name_not_contains?: ?string,
  name_starts_with?: ?string,
  name_not_starts_with?: ?string,
  name_ends_with?: ?string,
  name_not_ends_with?: ?string,
  name_in?: ?$ReadOnlyArray<string>,
  name_not_in?: ?$ReadOnlyArray<string>,
  id?: ?string,
  id_not?: ?string,
  id_lt?: ?string,
  id_lte?: ?string,
  id_gt?: ?string,
  id_gte?: ?string,
  id_in?: ?$ReadOnlyArray<string>,
  id_not_in?: ?$ReadOnlyArray<string>,
  created?: ?any,
  created_not?: ?any,
  created_lt?: ?any,
  created_lte?: ?any,
  created_gt?: ?any,
  created_gte?: ?any,
  created_in?: ?$ReadOnlyArray<any>,
  created_not_in?: ?$ReadOnlyArray<any>,
  modified?: ?any,
  modified_not?: ?any,
  modified_lt?: ?any,
  modified_lte?: ?any,
  modified_gt?: ?any,
  modified_gte?: ?any,
  modified_in?: ?$ReadOnlyArray<any>,
  modified_not_in?: ?$ReadOnlyArray<any>,
  creator?: ?UserInputType,
  creator_not?: ?UserInputType,
  creator_lt?: ?UserInputType,
  creator_lte?: ?UserInputType,
  creator_gt?: ?UserInputType,
  creator_gte?: ?UserInputType,
  creator_contains?: ?UserInputType,
  creator_not_contains?: ?UserInputType,
  creator_starts_with?: ?UserInputType,
  creator_not_starts_with?: ?UserInputType,
  creator_ends_with?: ?UserInputType,
  creator_not_ends_with?: ?UserInputType,
  creator_in?: ?$ReadOnlyArray<UserInputType>,
  creator_not_in?: ?$ReadOnlyArray<UserInputType>,
  modifier?: ?UserInputType,
  modifier_not?: ?UserInputType,
  modifier_lt?: ?UserInputType,
  modifier_lte?: ?UserInputType,
  modifier_gt?: ?UserInputType,
  modifier_gte?: ?UserInputType,
  modifier_contains?: ?UserInputType,
  modifier_not_contains?: ?UserInputType,
  modifier_starts_with?: ?UserInputType,
  modifier_not_starts_with?: ?UserInputType,
  modifier_ends_with?: ?UserInputType,
  modifier_not_ends_with?: ?UserInputType,
  modifier_in?: ?$ReadOnlyArray<UserInputType>,
  modifier_not_in?: ?$ReadOnlyArray<UserInputType>,
|};
export type UserInputType = {|
  username: string
|};
export type SearchPeeringGroupAllQueryVariables = {|
  count: number,
  filter?: ?PeeringGroupFilter,
  orderBy?: ?PeeringGroupOrderBy,
|};
export type SearchPeeringGroupAllQueryResponse = {|
  +$fragmentRefs: PeeringGroupList_peeringGroups$ref
|};
export type SearchPeeringGroupAllQuery = {|
  variables: SearchPeeringGroupAllQueryVariables,
  response: SearchPeeringGroupAllQueryResponse,
|};
*/


/*
query SearchPeeringGroupAllQuery(
  $count: Int!
  $filter: PeeringGroupFilter
  $orderBy: PeeringGroupOrderBy
) {
  ...PeeringGroupList_peeringGroups_1tT5Hu
}

fragment PeeringGroupList_peeringGroups_1tT5Hu on Query {
  peeringGroups(first: $count, filter: $filter, orderBy: $orderBy) {
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
    "name": "filter",
    "type": "PeeringGroupFilter"
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
  "name": "filter",
  "variableName": "filter"
},
v2 = {
  "kind": "Variable",
  "name": "orderBy",
  "variableName": "orderBy"
},
v3 = [
  (v1/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchPeeringGroupAllQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          (v1/*: any*/),
          (v2/*: any*/)
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
    "name": "SearchPeeringGroupAllQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
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
        "args": (v3/*: any*/),
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
    "name": "SearchPeeringGroupAllQuery",
    "operationKind": "query",
    "text": "query SearchPeeringGroupAllQuery(\n  $count: Int!\n  $filter: PeeringGroupFilter\n  $orderBy: PeeringGroupOrderBy\n) {\n  ...PeeringGroupList_peeringGroups_1tT5Hu\n}\n\nfragment PeeringGroupList_peeringGroups_1tT5Hu on Query {\n  peeringGroups(first: $count, filter: $filter, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...PeeringGroupRow_peeringGroup\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment PeeringGroupRow_peeringGroup on PeeringGroup {\n  id\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fa41bad6daaf3c783401709d6952af78';

module.exports = node;
