/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CableList_cables$ref = any;
export type CableOrderBy = "cable_type_ASC" | "cable_type_DESC" | "created_ASC" | "created_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "tele2_alternative_circuit_id_ASC" | "tele2_alternative_circuit_id_DESC" | "tele2_cable_contract_ASC" | "tele2_cable_contract_DESC" | "%future added value";
export type CableFilter = {|
  AND?: ?$ReadOnlyArray<CableNestedFilter>,
  OR?: ?$ReadOnlyArray<CableNestedFilter>,
|};
export type CableNestedFilter = {|
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
  cable_type?: ?any,
  cable_type_not?: ?any,
  cable_type_lt?: ?any,
  cable_type_lte?: ?any,
  cable_type_gt?: ?any,
  cable_type_gte?: ?any,
  cable_type_contains?: ?any,
  cable_type_not_contains?: ?any,
  cable_type_starts_with?: ?any,
  cable_type_not_starts_with?: ?any,
  cable_type_ends_with?: ?any,
  cable_type_not_ends_with?: ?any,
  cable_type_in?: ?$ReadOnlyArray<any>,
  cable_type_not_in?: ?$ReadOnlyArray<any>,
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
  tele2_cable_contract?: ?any,
  tele2_cable_contract_not?: ?any,
  tele2_cable_contract_lt?: ?any,
  tele2_cable_contract_lte?: ?any,
  tele2_cable_contract_gt?: ?any,
  tele2_cable_contract_gte?: ?any,
  tele2_cable_contract_contains?: ?any,
  tele2_cable_contract_not_contains?: ?any,
  tele2_cable_contract_starts_with?: ?any,
  tele2_cable_contract_not_starts_with?: ?any,
  tele2_cable_contract_ends_with?: ?any,
  tele2_cable_contract_not_ends_with?: ?any,
  tele2_cable_contract_in?: ?$ReadOnlyArray<any>,
  tele2_cable_contract_not_in?: ?$ReadOnlyArray<any>,
  tele2_alternative_circuit_id?: ?string,
  tele2_alternative_circuit_id_not?: ?string,
  tele2_alternative_circuit_id_lt?: ?string,
  tele2_alternative_circuit_id_lte?: ?string,
  tele2_alternative_circuit_id_gt?: ?string,
  tele2_alternative_circuit_id_gte?: ?string,
  tele2_alternative_circuit_id_contains?: ?string,
  tele2_alternative_circuit_id_not_contains?: ?string,
  tele2_alternative_circuit_id_starts_with?: ?string,
  tele2_alternative_circuit_id_not_starts_with?: ?string,
  tele2_alternative_circuit_id_ends_with?: ?string,
  tele2_alternative_circuit_id_not_ends_with?: ?string,
  tele2_alternative_circuit_id_in?: ?$ReadOnlyArray<string>,
  tele2_alternative_circuit_id_not_in?: ?$ReadOnlyArray<string>,
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
export type SearchCableAllQueryVariables = {|
  count: number,
  filter?: ?CableFilter,
  orderBy?: ?CableOrderBy,
|};
export type SearchCableAllQueryResponse = {|
  +$fragmentRefs: CableList_cables$ref
|};
export type SearchCableAllQuery = {|
  variables: SearchCableAllQueryVariables,
  response: SearchCableAllQueryResponse,
|};
*/


/*
query SearchCableAllQuery(
  $count: Int!
  $filter: CableFilter
  $orderBy: CableOrderBy
) {
  ...CableList_cables_1tT5Hu
}

fragment CableList_cables_1tT5Hu on Query {
  cables(first: $count, filter: $filter, orderBy: $orderBy) {
    edges {
      node {
        id
        ...CableRow_cable
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

fragment CableRow_cable on Cable {
  id
  name
  description
  cable_type {
    name
    value
    id
  }
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
    "type": "CableFilter"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "CableOrderBy"
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
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchCableAllQuery",
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
        "name": "CableList_cables"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchCableAllQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "cableConnection",
        "kind": "LinkedField",
        "name": "cables",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "cableEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Cable",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
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
                    "concreteType": "Choice",
                    "kind": "LinkedField",
                    "name": "cable_type",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "value",
                        "storageKey": null
                      },
                      (v4/*: any*/)
                    ],
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
        "key": "CableList_cables",
        "kind": "LinkedHandle",
        "name": "cables"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SearchCableAllQuery",
    "operationKind": "query",
    "text": "query SearchCableAllQuery(\n  $count: Int!\n  $filter: CableFilter\n  $orderBy: CableOrderBy\n) {\n  ...CableList_cables_1tT5Hu\n}\n\nfragment CableList_cables_1tT5Hu on Query {\n  cables(first: $count, filter: $filter, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...CableRow_cable\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment CableRow_cable on Cable {\n  id\n  name\n  description\n  cable_type {\n    name\n    value\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '09ab144d2780f7aaef3a06cf191761e0';

module.exports = node;
