/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OpticalLinkList_opticalLinks$ref = any;
export type OpticalLinkOrderBy = "created_ASC" | "created_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "interface_type_ASC" | "interface_type_DESC" | "link_type_ASC" | "link_type_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "operational_state_ASC" | "operational_state_DESC" | "%future added value";
export type OpticalLinkListForwardQueryVariables = {|
  count: number,
  cursor?: ?string,
  orderBy?: ?OpticalLinkOrderBy,
|};
export type OpticalLinkListForwardQueryResponse = {|
  +$fragmentRefs: OpticalLinkList_opticalLinks$ref
|};
export type OpticalLinkListForwardQuery = {|
  variables: OpticalLinkListForwardQueryVariables,
  response: OpticalLinkListForwardQueryResponse,
|};
*/


/*
query OpticalLinkListForwardQuery(
  $count: Int!
  $cursor: String
  $orderBy: OpticalLinkOrderBy
) {
  ...OpticalLinkList_opticalLinks_32czeo
}

fragment OpticalLinkList_opticalLinks_32czeo on Query {
  opticalLinks(first: $count, after: $cursor, orderBy: $orderBy) {
    edges {
      node {
        id
        ...OpticalLinkRow_opticalLink
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

fragment OpticalLinkRow_opticalLink on OpticalLink {
  id
  name
  description
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
    "type": "OpticalLinkOrderBy"
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
    "name": "OpticalLinkListForwardQuery",
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
        "name": "OpticalLinkList_opticalLinks"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OpticalLinkListForwardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "opticalLinkConnection",
        "kind": "LinkedField",
        "name": "opticalLinks",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "opticalLinkEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "OpticalLink",
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
        "key": "OpticalLinkList_opticalLinks",
        "kind": "LinkedHandle",
        "name": "opticalLinks"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OpticalLinkListForwardQuery",
    "operationKind": "query",
    "text": "query OpticalLinkListForwardQuery(\n  $count: Int!\n  $cursor: String\n  $orderBy: OpticalLinkOrderBy\n) {\n  ...OpticalLinkList_opticalLinks_32czeo\n}\n\nfragment OpticalLinkList_opticalLinks_32czeo on Query {\n  opticalLinks(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...OpticalLinkRow_opticalLink\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment OpticalLinkRow_opticalLink on OpticalLink {\n  id\n  name\n  description\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9fd1789e4dc891e029c07f9e2eb8cec1';

module.exports = node;
