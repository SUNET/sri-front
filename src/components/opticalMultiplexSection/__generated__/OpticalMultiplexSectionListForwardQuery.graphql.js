/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OpticalMultiplexSectionList_opticalMultiplexSections$ref = any;
export type OpticalMultiplexSectionOrderBy = "created_ASC" | "created_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "operational_state_ASC" | "operational_state_DESC" | "%future added value";
export type OpticalMultiplexSectionListForwardQueryVariables = {|
  count: number,
  cursor?: ?string,
  orderBy?: ?OpticalMultiplexSectionOrderBy,
|};
export type OpticalMultiplexSectionListForwardQueryResponse = {|
  +$fragmentRefs: OpticalMultiplexSectionList_opticalMultiplexSections$ref
|};
export type OpticalMultiplexSectionListForwardQuery = {|
  variables: OpticalMultiplexSectionListForwardQueryVariables,
  response: OpticalMultiplexSectionListForwardQueryResponse,
|};
*/


/*
query OpticalMultiplexSectionListForwardQuery(
  $count: Int!
  $cursor: String
  $orderBy: OpticalMultiplexSectionOrderBy
) {
  ...OpticalMultiplexSectionList_opticalMultiplexSections_32czeo
}

fragment OpticalMultiplexSectionList_opticalMultiplexSections_32czeo on Query {
  opticalMultiplexSections(first: $count, after: $cursor, orderBy: $orderBy) {
    edges {
      node {
        id
        ...OpticalMultiplexSectionRow_opticalMultiplexSection
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

fragment OpticalMultiplexSectionRow_opticalMultiplexSection on OpticalMultiplexSection {
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
    "type": "OpticalMultiplexSectionOrderBy"
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
    "name": "OpticalMultiplexSectionListForwardQuery",
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
        "name": "OpticalMultiplexSectionList_opticalMultiplexSections"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OpticalMultiplexSectionListForwardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "opticalMultiplexSectionConnection",
        "kind": "LinkedField",
        "name": "opticalMultiplexSections",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "opticalMultiplexSectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "OpticalMultiplexSection",
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
        "key": "OpticalMultiplexSectionList_opticalMultiplexSections",
        "kind": "LinkedHandle",
        "name": "opticalMultiplexSections"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OpticalMultiplexSectionListForwardQuery",
    "operationKind": "query",
    "text": "query OpticalMultiplexSectionListForwardQuery(\n  $count: Int!\n  $cursor: String\n  $orderBy: OpticalMultiplexSectionOrderBy\n) {\n  ...OpticalMultiplexSectionList_opticalMultiplexSections_32czeo\n}\n\nfragment OpticalMultiplexSectionList_opticalMultiplexSections_32czeo on Query {\n  opticalMultiplexSections(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...OpticalMultiplexSectionRow_opticalMultiplexSection\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment OpticalMultiplexSectionRow_opticalMultiplexSection on OpticalMultiplexSection {\n  id\n  name\n  description\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'af6ecb3376a8f2ecb4f22ca5527977b8';

module.exports = node;
