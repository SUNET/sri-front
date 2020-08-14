/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PeeringPartnerList_peeringPartners$ref = any;
export type PeeringPartnerOrderBy = "as_number_ASC" | "as_number_DESC" | "created_ASC" | "created_DESC" | "handle_id_ASC" | "handle_id_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "peering_link_ASC" | "peering_link_DESC" | "%future added value";
export type PeeringPartnerFilter = {|
  AND?: ?$ReadOnlyArray<PeeringPartnerNestedFilter>,
  OR?: ?$ReadOnlyArray<PeeringPartnerNestedFilter>,
|};
export type PeeringPartnerNestedFilter = {|
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
  as_number?: ?string,
  as_number_not?: ?string,
  as_number_lt?: ?string,
  as_number_lte?: ?string,
  as_number_gt?: ?string,
  as_number_gte?: ?string,
  as_number_contains?: ?string,
  as_number_not_contains?: ?string,
  as_number_starts_with?: ?string,
  as_number_not_starts_with?: ?string,
  as_number_ends_with?: ?string,
  as_number_not_ends_with?: ?string,
  as_number_in?: ?$ReadOnlyArray<string>,
  as_number_not_in?: ?$ReadOnlyArray<string>,
  peering_link?: ?string,
  peering_link_not?: ?string,
  peering_link_lt?: ?string,
  peering_link_lte?: ?string,
  peering_link_gt?: ?string,
  peering_link_gte?: ?string,
  peering_link_contains?: ?string,
  peering_link_not_contains?: ?string,
  peering_link_starts_with?: ?string,
  peering_link_not_starts_with?: ?string,
  peering_link_ends_with?: ?string,
  peering_link_not_ends_with?: ?string,
  peering_link_in?: ?$ReadOnlyArray<string>,
  peering_link_not_in?: ?$ReadOnlyArray<string>,
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
export type SearchPeeringPartnerAllQueryVariables = {|
  count: number,
  filter?: ?PeeringPartnerFilter,
  orderBy?: ?PeeringPartnerOrderBy,
|};
export type SearchPeeringPartnerAllQueryResponse = {|
  +$fragmentRefs: PeeringPartnerList_peeringPartners$ref
|};
export type SearchPeeringPartnerAllQuery = {|
  variables: SearchPeeringPartnerAllQueryVariables,
  response: SearchPeeringPartnerAllQueryResponse,
|};
*/


/*
query SearchPeeringPartnerAllQuery(
  $count: Int!
  $filter: PeeringPartnerFilter
  $orderBy: PeeringPartnerOrderBy
) {
  ...PeeringPartnerList_peeringPartners_1tT5Hu
}

fragment PeeringPartnerList_peeringPartners_1tT5Hu on Query {
  peeringPartners(first: $count, filter: $filter, orderBy: $orderBy) {
    edges {
      node {
        id
        ...PeeringPartnerRow_peeringPartner
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

fragment PeeringPartnerRow_peeringPartner on PeeringPartner {
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
    "type": "PeeringPartnerFilter"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "PeeringPartnerOrderBy"
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
    "name": "SearchPeeringPartnerAllQuery",
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
        "name": "PeeringPartnerList_peeringPartners"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchPeeringPartnerAllQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "peeringPartnerConnection",
        "kind": "LinkedField",
        "name": "peeringPartners",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "peeringPartnerEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PeeringPartner",
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
        "key": "PeeringPartnerList_peeringPartners",
        "kind": "LinkedHandle",
        "name": "peeringPartners"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SearchPeeringPartnerAllQuery",
    "operationKind": "query",
    "text": "query SearchPeeringPartnerAllQuery(\n  $count: Int!\n  $filter: PeeringPartnerFilter\n  $orderBy: PeeringPartnerOrderBy\n) {\n  ...PeeringPartnerList_peeringPartners_1tT5Hu\n}\n\nfragment PeeringPartnerList_peeringPartners_1tT5Hu on Query {\n  peeringPartners(first: $count, filter: $filter, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...PeeringPartnerRow_peeringPartner\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment PeeringPartnerRow_peeringPartner on PeeringPartner {\n  id\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3d7fd91740ac10bc0bded59884d3a3b2';

module.exports = node;
