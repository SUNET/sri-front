/**
 * @flow
 * @relayHash df346f9d4e7c5d8f2f654fbfc8b083d4
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
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
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
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SiteOwnerListForwardQuery",
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
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SiteOwnerListForwardQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "siteOwners",
        "storageKey": null,
        "args": (v2/*: any*/),
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
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "SiteOwnerList_siteOwners",
        "filters": []
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SiteOwnerListForwardQuery",
    "id": null,
    "text": "query SiteOwnerListForwardQuery(\n  $count: Int!\n  $cursor: String\n  $orderBy: SiteOwnerOrderBy\n) {\n  ...SiteOwnerList_siteOwners_32czeo\n}\n\nfragment SiteOwnerList_siteOwners_32czeo on Query {\n  siteOwners(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...SiteOwnerRow_siteOwner\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment SiteOwnerRow_siteOwner on SiteOwner {\n  id\n  name\n  description\n  url\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9e189444ce65a11ae16f6b7d4e679c4f';
module.exports = node;
