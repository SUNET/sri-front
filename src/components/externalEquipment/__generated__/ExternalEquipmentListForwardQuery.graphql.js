/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ExternalEquipmentList_externalEquipments$ref = any;
export type ExternalEquipmentOrderBy = "created_ASC" | "created_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "rack_position_ASC" | "rack_position_DESC" | "rack_units_ASC" | "rack_units_DESC" | "%future added value";
export type ExternalEquipmentListForwardQueryVariables = {|
  count: number,
  cursor?: ?string,
  orderBy?: ?ExternalEquipmentOrderBy,
|};
export type ExternalEquipmentListForwardQueryResponse = {|
  +$fragmentRefs: ExternalEquipmentList_externalEquipments$ref
|};
export type ExternalEquipmentListForwardQuery = {|
  variables: ExternalEquipmentListForwardQueryVariables,
  response: ExternalEquipmentListForwardQueryResponse,
|};
*/


/*
query ExternalEquipmentListForwardQuery(
  $count: Int!
  $cursor: String
  $orderBy: ExternalEquipmentOrderBy
) {
  ...ExternalEquipmentList_externalEquipments_32czeo
}

fragment ExternalEquipmentList_externalEquipments_32czeo on Query {
  externalEquipments(first: $count, after: $cursor, orderBy: $orderBy) {
    edges {
      node {
        id
        ...ExternalEquipmentRow_externalEquipment
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

fragment ExternalEquipmentRow_externalEquipment on ExternalEquipment {
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
    "type": "ExternalEquipmentOrderBy"
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
    "name": "ExternalEquipmentListForwardQuery",
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
        "name": "ExternalEquipmentList_externalEquipments"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ExternalEquipmentListForwardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "externalEquipmentConnection",
        "kind": "LinkedField",
        "name": "externalEquipments",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "externalEquipmentEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ExternalEquipment",
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
        "key": "ExternalEquipmentList_externalEquipments",
        "kind": "LinkedHandle",
        "name": "externalEquipments"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ExternalEquipmentListForwardQuery",
    "operationKind": "query",
    "text": "query ExternalEquipmentListForwardQuery(\n  $count: Int!\n  $cursor: String\n  $orderBy: ExternalEquipmentOrderBy\n) {\n  ...ExternalEquipmentList_externalEquipments_32czeo\n}\n\nfragment ExternalEquipmentList_externalEquipments_32czeo on Query {\n  externalEquipments(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...ExternalEquipmentRow_externalEquipment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment ExternalEquipmentRow_externalEquipment on ExternalEquipment {\n  id\n  name\n  description\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0ce75274d069b63144d6389f859a69a0';

module.exports = node;
