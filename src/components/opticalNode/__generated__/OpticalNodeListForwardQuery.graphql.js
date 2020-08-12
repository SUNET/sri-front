/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OpticalNodeList_opticalNodes$ref = any;
export type OpticalNodeOrderBy = "created_ASC" | "created_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "operational_state_ASC" | "operational_state_DESC" | "rack_position_ASC" | "rack_position_DESC" | "rack_units_ASC" | "rack_units_DESC" | "type_ASC" | "type_DESC" | "%future added value";
export type OpticalNodeListForwardQueryVariables = {|
  count: number,
  cursor?: ?string,
  orderBy?: ?OpticalNodeOrderBy,
|};
export type OpticalNodeListForwardQueryResponse = {|
  +$fragmentRefs: OpticalNodeList_opticalNodes$ref
|};
export type OpticalNodeListForwardQuery = {|
  variables: OpticalNodeListForwardQueryVariables,
  response: OpticalNodeListForwardQueryResponse,
|};
*/


/*
query OpticalNodeListForwardQuery(
  $count: Int!
  $cursor: String
  $orderBy: OpticalNodeOrderBy
) {
  ...OpticalNodeList_opticalNodes_32czeo
}

fragment OpticalNodeList_opticalNodes_32czeo on Query {
  opticalNodes(first: $count, after: $cursor, orderBy: $orderBy) {
    edges {
      node {
        id
        ...OpticalNodeRow_opticalNode
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

fragment OpticalNodeRow_opticalNode on OpticalNode {
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
    "type": "OpticalNodeOrderBy"
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
    "name": "OpticalNodeListForwardQuery",
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
        "name": "OpticalNodeList_opticalNodes"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OpticalNodeListForwardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "opticalNodeConnection",
        "kind": "LinkedField",
        "name": "opticalNodes",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "opticalNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "OpticalNode",
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
        "key": "OpticalNodeList_opticalNodes",
        "kind": "LinkedHandle",
        "name": "opticalNodes"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OpticalNodeListForwardQuery",
    "operationKind": "query",
    "text": "query OpticalNodeListForwardQuery(\n  $count: Int!\n  $cursor: String\n  $orderBy: OpticalNodeOrderBy\n) {\n  ...OpticalNodeList_opticalNodes_32czeo\n}\n\nfragment OpticalNodeList_opticalNodes_32czeo on Query {\n  opticalNodes(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...OpticalNodeRow_opticalNode\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment OpticalNodeRow_opticalNode on OpticalNode {\n  id\n  name\n  description\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cf2276f905c0a7d72835c482650ab6b0';

module.exports = node;
