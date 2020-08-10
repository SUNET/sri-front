/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FirewallFilter = {|
  AND?: ?$ReadOnlyArray<FirewallNestedFilter>,
  OR?: ?$ReadOnlyArray<FirewallNestedFilter>,
|};
export type FirewallNestedFilter = {|
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
  security_class?: ?any,
  security_class_not?: ?any,
  security_class_lt?: ?any,
  security_class_lte?: ?any,
  security_class_gt?: ?any,
  security_class_gte?: ?any,
  security_class_contains?: ?any,
  security_class_not_contains?: ?any,
  security_class_starts_with?: ?any,
  security_class_not_starts_with?: ?any,
  security_class_ends_with?: ?any,
  security_class_not_ends_with?: ?any,
  security_class_in?: ?$ReadOnlyArray<any>,
  security_class_not_in?: ?$ReadOnlyArray<any>,
  security_comment?: ?string,
  security_comment_not?: ?string,
  security_comment_lt?: ?string,
  security_comment_lte?: ?string,
  security_comment_gt?: ?string,
  security_comment_gte?: ?string,
  security_comment_contains?: ?string,
  security_comment_not_contains?: ?string,
  security_comment_starts_with?: ?string,
  security_comment_not_starts_with?: ?string,
  security_comment_ends_with?: ?string,
  security_comment_not_ends_with?: ?string,
  security_comment_in?: ?$ReadOnlyArray<string>,
  security_comment_not_in?: ?$ReadOnlyArray<string>,
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
  model?: ?string,
  model_not?: ?string,
  model_lt?: ?string,
  model_lte?: ?string,
  model_gt?: ?string,
  model_gte?: ?string,
  model_contains?: ?string,
  model_not_contains?: ?string,
  model_starts_with?: ?string,
  model_not_starts_with?: ?string,
  model_ends_with?: ?string,
  model_not_ends_with?: ?string,
  model_in?: ?$ReadOnlyArray<string>,
  model_not_in?: ?$ReadOnlyArray<string>,
  vendor?: ?string,
  vendor_not?: ?string,
  vendor_lt?: ?string,
  vendor_lte?: ?string,
  vendor_gt?: ?string,
  vendor_gte?: ?string,
  vendor_contains?: ?string,
  vendor_not_contains?: ?string,
  vendor_starts_with?: ?string,
  vendor_not_starts_with?: ?string,
  vendor_ends_with?: ?string,
  vendor_not_ends_with?: ?string,
  vendor_in?: ?$ReadOnlyArray<string>,
  vendor_not_in?: ?$ReadOnlyArray<string>,
  service_tag?: ?string,
  service_tag_not?: ?string,
  service_tag_lt?: ?string,
  service_tag_lte?: ?string,
  service_tag_gt?: ?string,
  service_tag_gte?: ?string,
  service_tag_contains?: ?string,
  service_tag_not_contains?: ?string,
  service_tag_starts_with?: ?string,
  service_tag_not_starts_with?: ?string,
  service_tag_ends_with?: ?string,
  service_tag_not_ends_with?: ?string,
  service_tag_in?: ?$ReadOnlyArray<string>,
  service_tag_not_in?: ?$ReadOnlyArray<string>,
  end_support?: ?string,
  end_support_not?: ?string,
  end_support_lt?: ?string,
  end_support_lte?: ?string,
  end_support_gt?: ?string,
  end_support_gte?: ?string,
  end_support_contains?: ?string,
  end_support_not_contains?: ?string,
  end_support_starts_with?: ?string,
  end_support_not_starts_with?: ?string,
  end_support_ends_with?: ?string,
  end_support_not_ends_with?: ?string,
  end_support_in?: ?$ReadOnlyArray<string>,
  end_support_not_in?: ?$ReadOnlyArray<string>,
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
export type DropdownSearchAllFirewallsQueryVariables = {|
  filter?: ?FirewallFilter
|};
export type DropdownSearchAllFirewallsQueryResponse = {|
  +firewalls: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
      |}
    |}>
  |}
|};
export type DropdownSearchAllFirewallsQuery = {|
  variables: DropdownSearchAllFirewallsQueryVariables,
  response: DropdownSearchAllFirewallsQueryResponse,
|};
*/


/*
query DropdownSearchAllFirewallsQuery(
  $filter: FirewallFilter
) {
  firewalls(filter: $filter) {
    edges {
      node {
        id
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter",
    "type": "FirewallFilter"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter"
      }
    ],
    "concreteType": "firewallConnection",
    "kind": "LinkedField",
    "name": "firewalls",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "firewallEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Firewall",
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DropdownSearchAllFirewallsQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DropdownSearchAllFirewallsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DropdownSearchAllFirewallsQuery",
    "operationKind": "query",
    "text": "query DropdownSearchAllFirewallsQuery(\n  $filter: FirewallFilter\n) {\n  firewalls(filter: $filter) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '87b87f50dc5a39148c133f13b68c8f1a';

module.exports = node;
