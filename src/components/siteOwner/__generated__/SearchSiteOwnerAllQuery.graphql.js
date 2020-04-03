/**
 * @flow
 * @relayHash 03f59f722cb7dfa954bcd85961874b4b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SiteOwnerList_siteOwners$ref = any;
export type SiteOwnerOrderBy = "created_ASC" | "created_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "url_ASC" | "url_DESC" | "%future added value";
export type SiteOwnerFilter = {|
  AND?: ?$ReadOnlyArray<SiteOwnerNestedFilter>,
  OR?: ?$ReadOnlyArray<SiteOwnerNestedFilter>,
|};
export type SiteOwnerNestedFilter = {|
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
  url?: ?string,
  url_not?: ?string,
  url_lt?: ?string,
  url_lte?: ?string,
  url_gt?: ?string,
  url_gte?: ?string,
  url_contains?: ?string,
  url_not_contains?: ?string,
  url_starts_with?: ?string,
  url_not_starts_with?: ?string,
  url_ends_with?: ?string,
  url_not_ends_with?: ?string,
  url_in?: ?$ReadOnlyArray<string>,
  url_not_in?: ?$ReadOnlyArray<string>,
  description?: ?string,
  description_not?: ?string,
  description_lt?: ?string,
  description_lte?: ?string,
  description_gt?: ?string,
  description_gte?: ?string,
  description_contains?: ?string,
  description_not_contains?: ?string,
  description_starts_with?: ?string,
  description_not_starts_with?: ?string,
  description_ends_with?: ?string,
  description_not_ends_with?: ?string,
  description_in?: ?$ReadOnlyArray<string>,
  description_not_in?: ?$ReadOnlyArray<string>,
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
export type SearchSiteOwnerAllQueryVariables = {|
  count: number,
  filter?: ?SiteOwnerFilter,
  orderBy?: ?SiteOwnerOrderBy,
|};
export type SearchSiteOwnerAllQueryResponse = {|
  +$fragmentRefs: SiteOwnerList_siteOwners$ref
|};
export type SearchSiteOwnerAllQuery = {|
  variables: SearchSiteOwnerAllQueryVariables,
  response: SearchSiteOwnerAllQueryResponse,
|};
*/


/*
query SearchSiteOwnerAllQuery(
  $count: Int!
  $filter: SiteOwnerFilter
  $orderBy: SiteOwnerOrderBy
) {
  ...SiteOwnerList_siteOwners_1tT5Hu
}

fragment SiteOwnerList_siteOwners_1tT5Hu on Query {
  siteOwners(first: $count, filter: $filter, orderBy: $orderBy) {
    edges {
      node {
        id
        ...SiteOwnerRow_siteOwner
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

fragment SiteOwnerRow_siteOwner on SiteOwner {
  id
  name
  description
  url
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "SiteOwnerFilter",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "SiteOwnerOrderBy",
    "defaultValue": null
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
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SearchSiteOwnerAllQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "SiteOwnerList_siteOwners",
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchSiteOwnerAllQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "siteOwners",
        "storageKey": null,
        "args": (v3/*: any*/),
        "concreteType": "siteOwnerConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "siteOwnerEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "SiteOwner",
                "plural": false,
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "description",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "url",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "siteOwners",
        "args": (v3/*: any*/),
        "handle": "connection",
        "key": "SiteOwnerList_siteOwners",
        "filters": []
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SearchSiteOwnerAllQuery",
    "id": null,
    "text": "query SearchSiteOwnerAllQuery(\n  $count: Int!\n  $filter: SiteOwnerFilter\n  $orderBy: SiteOwnerOrderBy\n) {\n  ...SiteOwnerList_siteOwners_1tT5Hu\n}\n\nfragment SiteOwnerList_siteOwners_1tT5Hu on Query {\n  siteOwners(first: $count, filter: $filter, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...SiteOwnerRow_siteOwner\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment SiteOwnerRow_siteOwner on SiteOwner {\n  id\n  name\n  description\n  url\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '835c2105d402d4b02049c6a7b5d9326c';
module.exports = node;
