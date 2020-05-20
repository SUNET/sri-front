/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SiteOwnerList_siteOwners$ref = any;
export type SiteOwnerOrderBy = "created_ASC" | "created_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "url_ASC" | "url_DESC" | "%future added value";
export type SiteOwnerListForwardQueryVariables = {|
  count: number,
  cursor?: ?string,
  orderBy?: ?SiteOwnerOrderBy,
|};
export type SiteOwnerListForwardQueryResponse = {|
  +$fragmentRefs: SiteOwnerList_siteOwners$ref
|};
export type SiteOwnerListForwardQuery = {|
  variables: SiteOwnerListForwardQueryVariables,
  response: SiteOwnerListForwardQueryResponse,
|};
*/


/*
query SiteOwnerListForwardQuery(
  $count: Int!
  $cursor: String
  $orderBy: SiteOwnerOrderBy
) {
  ...SiteOwnerList_siteOwners_32czeo
}

fragment SiteOwnerList_siteOwners_32czeo on Query {
  siteOwners(first: $count, after: $cursor, orderBy: $orderBy) {
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
    "type": "SiteOwnerOrderBy"
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
    "name": "SiteOwnerListForwardQuery",
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
        "name": "SiteOwnerList_siteOwners"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SiteOwnerListForwardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "siteOwnerConnection",
        "kind": "LinkedField",
        "name": "siteOwners",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "siteOwnerEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SiteOwner",
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
                    "name": "description",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "url",
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
        "key": "SiteOwnerList_siteOwners",
        "kind": "LinkedHandle",
        "name": "siteOwners"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SiteOwnerListForwardQuery",
    "operationKind": "query",
    "text": "query SiteOwnerListForwardQuery(\n  $count: Int!\n  $cursor: String\n  $orderBy: SiteOwnerOrderBy\n) {\n  ...SiteOwnerList_siteOwners_32czeo\n}\n\nfragment SiteOwnerList_siteOwners_32czeo on Query {\n  siteOwners(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...SiteOwnerRow_siteOwner\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment SiteOwnerRow_siteOwner on SiteOwner {\n  id\n  name\n  description\n  url\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9e189444ce65a11ae16f6b7d4e679c4f';

module.exports = node;
