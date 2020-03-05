/**
 * @flow
 * @relayHash 43689217803c1bdd881cd626d1d7d434
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OrganizationFilter = {|
  AND?: ?$ReadOnlyArray<OrganizationNestedFilter>,
  OR?: ?$ReadOnlyArray<OrganizationNestedFilter>,
|};
export type OrganizationNestedFilter = {|
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
  organization_number?: ?string,
  organization_number_not?: ?string,
  organization_number_lt?: ?string,
  organization_number_lte?: ?string,
  organization_number_gt?: ?string,
  organization_number_gte?: ?string,
  organization_number_contains?: ?string,
  organization_number_not_contains?: ?string,
  organization_number_starts_with?: ?string,
  organization_number_not_starts_with?: ?string,
  organization_number_ends_with?: ?string,
  organization_number_not_ends_with?: ?string,
  organization_number_in?: ?$ReadOnlyArray<string>,
  organization_number_not_in?: ?$ReadOnlyArray<string>,
  organization_id?: ?string,
  organization_id_not?: ?string,
  organization_id_lt?: ?string,
  organization_id_lte?: ?string,
  organization_id_gt?: ?string,
  organization_id_gte?: ?string,
  organization_id_contains?: ?string,
  organization_id_not_contains?: ?string,
  organization_id_starts_with?: ?string,
  organization_id_not_starts_with?: ?string,
  organization_id_ends_with?: ?string,
  organization_id_not_ends_with?: ?string,
  organization_id_in?: ?$ReadOnlyArray<string>,
  organization_id_not_in?: ?$ReadOnlyArray<string>,
  incident_management_info?: ?string,
  incident_management_info_not?: ?string,
  incident_management_info_lt?: ?string,
  incident_management_info_lte?: ?string,
  incident_management_info_gt?: ?string,
  incident_management_info_gte?: ?string,
  incident_management_info_contains?: ?string,
  incident_management_info_not_contains?: ?string,
  incident_management_info_starts_with?: ?string,
  incident_management_info_not_starts_with?: ?string,
  incident_management_info_ends_with?: ?string,
  incident_management_info_not_ends_with?: ?string,
  incident_management_info_in?: ?$ReadOnlyArray<string>,
  incident_management_info_not_in?: ?$ReadOnlyArray<string>,
  type?: ?any,
  type_not?: ?any,
  type_lt?: ?any,
  type_lte?: ?any,
  type_gt?: ?any,
  type_gte?: ?any,
  type_contains?: ?any,
  type_not_contains?: ?any,
  type_starts_with?: ?any,
  type_not_starts_with?: ?any,
  type_ends_with?: ?any,
  type_not_ends_with?: ?any,
  type_in?: ?$ReadOnlyArray<any>,
  type_not_in?: ?$ReadOnlyArray<any>,
  website?: ?string,
  website_not?: ?string,
  website_lt?: ?string,
  website_lte?: ?string,
  website_gt?: ?string,
  website_gte?: ?string,
  website_contains?: ?string,
  website_not_contains?: ?string,
  website_starts_with?: ?string,
  website_not_starts_with?: ?string,
  website_ends_with?: ?string,
  website_not_ends_with?: ?string,
  website_in?: ?$ReadOnlyArray<string>,
  website_not_in?: ?$ReadOnlyArray<string>,
  addresses?: ?AddressInputField,
  addresses_not?: ?AddressInputField,
  addresses_lt?: ?AddressInputField,
  addresses_lte?: ?AddressInputField,
  addresses_gt?: ?AddressInputField,
  addresses_gte?: ?AddressInputField,
  addresses_contains?: ?AddressInputField,
  addresses_not_contains?: ?AddressInputField,
  addresses_starts_with?: ?AddressInputField,
  addresses_not_starts_with?: ?AddressInputField,
  addresses_ends_with?: ?AddressInputField,
  addresses_not_ends_with?: ?AddressInputField,
  addresses_in?: ?$ReadOnlyArray<AddressInputField>,
  addresses_not_in?: ?$ReadOnlyArray<AddressInputField>,
  affiliation_customer?: ?boolean,
  affiliation_customer_not?: ?boolean,
  affiliation_customer_lt?: ?boolean,
  affiliation_customer_lte?: ?boolean,
  affiliation_customer_gt?: ?boolean,
  affiliation_customer_gte?: ?boolean,
  affiliation_customer_in?: ?$ReadOnlyArray<boolean>,
  affiliation_customer_not_in?: ?$ReadOnlyArray<boolean>,
  affiliation_end_customer?: ?boolean,
  affiliation_end_customer_not?: ?boolean,
  affiliation_end_customer_lt?: ?boolean,
  affiliation_end_customer_lte?: ?boolean,
  affiliation_end_customer_gt?: ?boolean,
  affiliation_end_customer_gte?: ?boolean,
  affiliation_end_customer_in?: ?$ReadOnlyArray<boolean>,
  affiliation_end_customer_not_in?: ?$ReadOnlyArray<boolean>,
  affiliation_provider?: ?boolean,
  affiliation_provider_not?: ?boolean,
  affiliation_provider_lt?: ?boolean,
  affiliation_provider_lte?: ?boolean,
  affiliation_provider_gt?: ?boolean,
  affiliation_provider_gte?: ?boolean,
  affiliation_provider_in?: ?$ReadOnlyArray<boolean>,
  affiliation_provider_not_in?: ?$ReadOnlyArray<boolean>,
  affiliation_partner?: ?boolean,
  affiliation_partner_not?: ?boolean,
  affiliation_partner_lt?: ?boolean,
  affiliation_partner_lte?: ?boolean,
  affiliation_partner_gt?: ?boolean,
  affiliation_partner_gte?: ?boolean,
  affiliation_partner_in?: ?$ReadOnlyArray<boolean>,
  affiliation_partner_not_in?: ?$ReadOnlyArray<boolean>,
  affiliation_host_user?: ?boolean,
  affiliation_host_user_not?: ?boolean,
  affiliation_host_user_lt?: ?boolean,
  affiliation_host_user_lte?: ?boolean,
  affiliation_host_user_gt?: ?boolean,
  affiliation_host_user_gte?: ?boolean,
  affiliation_host_user_in?: ?$ReadOnlyArray<boolean>,
  affiliation_host_user_not_in?: ?$ReadOnlyArray<boolean>,
  affiliation_site_owner?: ?boolean,
  affiliation_site_owner_not?: ?boolean,
  affiliation_site_owner_lt?: ?boolean,
  affiliation_site_owner_lte?: ?boolean,
  affiliation_site_owner_gt?: ?boolean,
  affiliation_site_owner_gte?: ?boolean,
  affiliation_site_owner_in?: ?$ReadOnlyArray<boolean>,
  affiliation_site_owner_not_in?: ?$ReadOnlyArray<boolean>,
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
export type AddressInputField = {|
  name?: ?string,
  phone?: ?string,
  street?: ?string,
  postal_code?: ?string,
  postal_area?: ?string,
  id?: ?string,
  created?: ?any,
  modified?: ?any,
  creator?: ?UserInputType,
  modifier?: ?UserInputType,
|};
export type UserInputType = {|
  username: string
|};
export type OrganizationIdQueryVariables = {|
  filter?: ?OrganizationFilter
|};
export type OrganizationIdQueryResponse = {|
  +organizations: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string
      |}
    |}>
  |}
|};
export type OrganizationIdQuery = {|
  variables: OrganizationIdQueryVariables,
  response: OrganizationIdQueryResponse,
|};
*/


/*
query OrganizationIdQuery(
  $filter: OrganizationFilter
) {
  organizations(filter: $filter) {
    edges {
      node {
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "OrganizationFilter",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "organizations",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter"
      }
    ],
    "concreteType": "OrganizationConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "OrganizationEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Organization",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OrganizationIdQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "OrganizationIdQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "OrganizationIdQuery",
    "id": null,
    "text": "query OrganizationIdQuery(\n  $filter: OrganizationFilter\n) {\n  organizations(filter: $filter) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6bda57414fa1ddebb3c799b16b7af79b';
module.exports = node;
