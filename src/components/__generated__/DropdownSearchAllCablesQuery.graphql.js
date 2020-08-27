/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
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
export type DropdownSearchAllCablesQueryVariables = {|
  filter?: ?CableFilter
|};
export type DropdownSearchAllCablesQueryResponse = {|
  +cables: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
      |}
    |}>
  |}
|};
export type DropdownSearchAllCablesQuery = {|
  variables: DropdownSearchAllCablesQueryVariables,
  response: DropdownSearchAllCablesQueryResponse,
|};
*/


/*
query DropdownSearchAllCablesQuery(
  $filter: CableFilter
) {
  cables(filter: $filter) {
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
    "type": "CableFilter"
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
    "name": "DropdownSearchAllCablesQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DropdownSearchAllCablesQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DropdownSearchAllCablesQuery",
    "operationKind": "query",
    "text": "query DropdownSearchAllCablesQuery(\n  $filter: CableFilter\n) {\n  cables(filter: $filter) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ba43dd096aa1f46e926639eb14b7eb26';

module.exports = node;
