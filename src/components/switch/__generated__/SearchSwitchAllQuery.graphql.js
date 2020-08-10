/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SwitchList_switchs$ref = any;
export type SwitchOrderBy = "backup_ASC" | "backup_DESC" | "contract_number_ASC" | "contract_number_DESC" | "created_ASC" | "created_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "managed_by_ASC" | "managed_by_DESC" | "max_number_of_ports_ASC" | "max_number_of_ports_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "operational_state_ASC" | "operational_state_DESC" | "os_ASC" | "os_DESC" | "os_version_ASC" | "os_version_DESC" | "rack_position_ASC" | "rack_position_DESC" | "rack_units_ASC" | "rack_units_DESC" | "%future added value";
export type SwitchFilter = {|
  AND?: ?$ReadOnlyArray<SwitchNestedFilter>,
  OR?: ?$ReadOnlyArray<SwitchNestedFilter>,
|};
export type SwitchNestedFilter = {|
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
  operational_state?: ?any,
  operational_state_not?: ?any,
  operational_state_lt?: ?any,
  operational_state_lte?: ?any,
  operational_state_gt?: ?any,
  operational_state_gte?: ?any,
  operational_state_contains?: ?any,
  operational_state_not_contains?: ?any,
  operational_state_starts_with?: ?any,
  operational_state_not_starts_with?: ?any,
  operational_state_ends_with?: ?any,
  operational_state_not_ends_with?: ?any,
  operational_state_in?: ?$ReadOnlyArray<any>,
  operational_state_not_in?: ?$ReadOnlyArray<any>,
  managed_by?: ?any,
  managed_by_not?: ?any,
  managed_by_lt?: ?any,
  managed_by_lte?: ?any,
  managed_by_gt?: ?any,
  managed_by_gte?: ?any,
  managed_by_contains?: ?any,
  managed_by_not_contains?: ?any,
  managed_by_starts_with?: ?any,
  managed_by_not_starts_with?: ?any,
  managed_by_ends_with?: ?any,
  managed_by_not_ends_with?: ?any,
  managed_by_in?: ?$ReadOnlyArray<any>,
  managed_by_not_in?: ?$ReadOnlyArray<any>,
  backup?: ?string,
  backup_not?: ?string,
  backup_lt?: ?string,
  backup_lte?: ?string,
  backup_gt?: ?string,
  backup_gte?: ?string,
  backup_contains?: ?string,
  backup_not_contains?: ?string,
  backup_starts_with?: ?string,
  backup_not_starts_with?: ?string,
  backup_ends_with?: ?string,
  backup_not_ends_with?: ?string,
  backup_in?: ?$ReadOnlyArray<string>,
  backup_not_in?: ?$ReadOnlyArray<string>,
  os?: ?string,
  os_not?: ?string,
  os_lt?: ?string,
  os_lte?: ?string,
  os_gt?: ?string,
  os_gte?: ?string,
  os_contains?: ?string,
  os_not_contains?: ?string,
  os_starts_with?: ?string,
  os_not_starts_with?: ?string,
  os_ends_with?: ?string,
  os_not_ends_with?: ?string,
  os_in?: ?$ReadOnlyArray<string>,
  os_not_in?: ?$ReadOnlyArray<string>,
  os_version?: ?string,
  os_version_not?: ?string,
  os_version_lt?: ?string,
  os_version_lte?: ?string,
  os_version_gt?: ?string,
  os_version_gte?: ?string,
  os_version_contains?: ?string,
  os_version_not_contains?: ?string,
  os_version_starts_with?: ?string,
  os_version_not_starts_with?: ?string,
  os_version_ends_with?: ?string,
  os_version_not_ends_with?: ?string,
  os_version_in?: ?$ReadOnlyArray<string>,
  os_version_not_in?: ?$ReadOnlyArray<string>,
  contract_number?: ?string,
  contract_number_not?: ?string,
  contract_number_lt?: ?string,
  contract_number_lte?: ?string,
  contract_number_gt?: ?string,
  contract_number_gte?: ?string,
  contract_number_contains?: ?string,
  contract_number_not_contains?: ?string,
  contract_number_starts_with?: ?string,
  contract_number_not_starts_with?: ?string,
  contract_number_ends_with?: ?string,
  contract_number_not_ends_with?: ?string,
  contract_number_in?: ?$ReadOnlyArray<string>,
  contract_number_not_in?: ?$ReadOnlyArray<string>,
  rack_units?: ?number,
  rack_units_not?: ?number,
  rack_units_lt?: ?number,
  rack_units_lte?: ?number,
  rack_units_gt?: ?number,
  rack_units_gte?: ?number,
  rack_units_in?: ?$ReadOnlyArray<number>,
  rack_units_not_in?: ?$ReadOnlyArray<number>,
  rack_position?: ?number,
  rack_position_not?: ?number,
  rack_position_lt?: ?number,
  rack_position_lte?: ?number,
  rack_position_gt?: ?number,
  rack_position_gte?: ?number,
  rack_position_in?: ?$ReadOnlyArray<number>,
  rack_position_not_in?: ?$ReadOnlyArray<number>,
  max_number_of_ports?: ?number,
  max_number_of_ports_not?: ?number,
  max_number_of_ports_lt?: ?number,
  max_number_of_ports_lte?: ?number,
  max_number_of_ports_gt?: ?number,
  max_number_of_ports_gte?: ?number,
  max_number_of_ports_in?: ?$ReadOnlyArray<number>,
  max_number_of_ports_not_in?: ?$ReadOnlyArray<number>,
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
export type SearchSwitchAllQueryVariables = {|
  count: number,
  filter?: ?SwitchFilter,
  orderBy?: ?SwitchOrderBy,
|};
export type SearchSwitchAllQueryResponse = {|
  +$fragmentRefs: SwitchList_switchs$ref
|};
export type SearchSwitchAllQuery = {|
  variables: SearchSwitchAllQueryVariables,
  response: SearchSwitchAllQueryResponse,
|};
*/


/*
query SearchSwitchAllQuery(
  $count: Int!
  $filter: SwitchFilter
  $orderBy: SwitchOrderBy
) {
  ...SwitchList_switchs_1tT5Hu
}

fragment SwitchList_switchs_1tT5Hu on Query {
  switchs(first: $count, filter: $filter, orderBy: $orderBy) {
    edges {
      node {
        id
        ...SwitchRow_switch
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

fragment SwitchRow_switch on Switch {
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
    "name": "filter",
    "type": "SwitchFilter"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "SwitchOrderBy"
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
    "name": "SearchSwitchAllQuery",
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
        "name": "SwitchList_switchs"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchSwitchAllQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "switchConnection",
        "kind": "LinkedField",
        "name": "switchs",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "switchEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Switch",
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
        "args": (v3/*: any*/),
        "filters": [],
        "handle": "connection",
        "key": "SwitchList_switchs",
        "kind": "LinkedHandle",
        "name": "switchs"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SearchSwitchAllQuery",
    "operationKind": "query",
    "text": "query SearchSwitchAllQuery(\n  $count: Int!\n  $filter: SwitchFilter\n  $orderBy: SwitchOrderBy\n) {\n  ...SwitchList_switchs_1tT5Hu\n}\n\nfragment SwitchList_switchs_1tT5Hu on Query {\n  switchs(first: $count, filter: $filter, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...SwitchRow_switch\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment SwitchRow_switch on Switch {\n  id\n  name\n  description\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2ebd1b4876be0538466fa590f390730e';

module.exports = node;
