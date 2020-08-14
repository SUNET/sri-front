/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PeeringPartnerList_peeringPartners$ref = any;
export type PeeringPartnerOrderBy = "as_number_ASC" | "as_number_DESC" | "created_ASC" | "created_DESC" | "handle_id_ASC" | "handle_id_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "peering_link_ASC" | "peering_link_DESC" | "%future added value";
export type PeeringPartnerListForwardQueryVariables = {|
  count: number,
  cursor?: ?string,
  orderBy?: ?PeeringPartnerOrderBy,
|};
export type PeeringPartnerListForwardQueryResponse = {|
  +$fragmentRefs: PeeringPartnerList_peeringPartners$ref
|};
export type PeeringPartnerListForwardQuery = {|
  variables: PeeringPartnerListForwardQueryVariables,
  response: PeeringPartnerListForwardQueryResponse,
|};
*/


/*
query PeeringPartnerListForwardQuery(
  $count: Int!
  $cursor: String
  $orderBy: PeeringPartnerOrderBy
) {
  ...PeeringPartnerList_peeringPartners_32czeo
}

fragment PeeringPartnerList_peeringPartners_32czeo on Query {
  peeringPartners(first: $count, after: $cursor, orderBy: $orderBy) {
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
    "name": "cursor",
    "type": "String"
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
    "name": "PeeringPartnerListForwardQuery",
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
        "name": "PeeringPartnerList_peeringPartners"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PeeringPartnerListForwardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
        "args": (v2/*: any*/),
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
    "name": "PeeringPartnerListForwardQuery",
    "operationKind": "query",
    "text": "query PeeringPartnerListForwardQuery(\n  $count: Int!\n  $cursor: String\n  $orderBy: PeeringPartnerOrderBy\n) {\n  ...PeeringPartnerList_peeringPartners_32czeo\n}\n\nfragment PeeringPartnerList_peeringPartners_32czeo on Query {\n  peeringPartners(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...PeeringPartnerRow_peeringPartner\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment PeeringPartnerRow_peeringPartner on PeeringPartner {\n  id\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7e8541375daaa0ddc77859641f15fcb6';

module.exports = node;
