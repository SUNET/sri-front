/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HostList_hosts$ref = any;
export type HostOrderBy = "backup_ASC" | "backup_DESC" | "contract_number_ASC" | "contract_number_DESC" | "created_ASC" | "created_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "host_services_ASC" | "host_services_DESC" | "host_type_ASC" | "host_type_DESC" | "managed_by_ASC" | "managed_by_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "operational_state_ASC" | "operational_state_DESC" | "os_ASC" | "os_DESC" | "os_version_ASC" | "os_version_DESC" | "rack_position_ASC" | "rack_position_DESC" | "rack_units_ASC" | "rack_units_DESC" | "%future added value";
export type HostFilter = {|
  AND?: ?$ReadOnlyArray<HostNestedFilter>,
  OR?: ?$ReadOnlyArray<HostNestedFilter>,
|};
export type HostNestedFilter = {|
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
  host_type?: ?string,
  host_type_not?: ?string,
  host_type_lt?: ?string,
  host_type_lte?: ?string,
  host_type_gt?: ?string,
  host_type_gte?: ?string,
  host_type_contains?: ?string,
  host_type_not_contains?: ?string,
  host_type_starts_with?: ?string,
  host_type_not_starts_with?: ?string,
  host_type_ends_with?: ?string,
  host_type_not_ends_with?: ?string,
  host_type_in?: ?$ReadOnlyArray<string>,
  host_type_not_in?: ?$ReadOnlyArray<string>,
  operational_state?: ?string,
  operational_state_not?: ?string,
  operational_state_lt?: ?string,
  operational_state_lte?: ?string,
  operational_state_gt?: ?string,
  operational_state_gte?: ?string,
  operational_state_contains?: ?string,
  operational_state_not_contains?: ?string,
  operational_state_starts_with?: ?string,
  operational_state_not_starts_with?: ?string,
  operational_state_ends_with?: ?string,
  operational_state_not_ends_with?: ?string,
  operational_state_in?: ?$ReadOnlyArray<string>,
  operational_state_not_in?: ?$ReadOnlyArray<string>,
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
  host_services?: ?string,
  host_services_not?: ?string,
  host_services_lt?: ?string,
  host_services_lte?: ?string,
  host_services_gt?: ?string,
  host_services_gte?: ?string,
  host_services_contains?: ?string,
  host_services_not_contains?: ?string,
  host_services_starts_with?: ?string,
  host_services_not_starts_with?: ?string,
  host_services_ends_with?: ?string,
  host_services_not_ends_with?: ?string,
  host_services_in?: ?$ReadOnlyArray<string>,
  host_services_not_in?: ?$ReadOnlyArray<string>,
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
export type SearchHostAllQueryVariables = {|
  count: number,
  filter?: ?HostFilter,
  orderBy?: ?HostOrderBy,
|};
export type SearchHostAllQueryResponse = {|
  +$fragmentRefs: HostList_hosts$ref
|};
export type SearchHostAllQuery = {|
  variables: SearchHostAllQueryVariables,
  response: SearchHostAllQueryResponse,
|};
*/


/*
query SearchHostAllQuery(
  $count: Int!
  $filter: HostFilter
  $orderBy: HostOrderBy
) {
  ...HostList_hosts_1tT5Hu
}

fragment HostList_hosts_1tT5Hu on Query {
  hosts(first: $count, filter: $filter, orderBy: $orderBy) {
    edges {
      node {
        id
        ...HostRow_host
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

fragment HostRow_host on Host {
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
    "type": "HostFilter"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "HostOrderBy"
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
    "name": "SearchHostAllQuery",
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
        "name": "HostList_hosts"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchHostAllQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "hostConnection",
        "kind": "LinkedField",
        "name": "hosts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "hostEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Host",
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
        "key": "HostList_hosts",
        "kind": "LinkedHandle",
        "name": "hosts"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SearchHostAllQuery",
    "operationKind": "query",
    "text": "query SearchHostAllQuery(\n  $count: Int!\n  $filter: HostFilter\n  $orderBy: HostOrderBy\n) {\n  ...HostList_hosts_1tT5Hu\n}\n\nfragment HostList_hosts_1tT5Hu on Query {\n  hosts(first: $count, filter: $filter, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...HostRow_host\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment HostRow_host on Host {\n  id\n  name\n  description\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6b8d925479e0651eedaa0f77ea35b119';

module.exports = node;
