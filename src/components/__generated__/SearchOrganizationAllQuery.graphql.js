/**
 * @flow
 * @relayHash a1730a715148d225def644630c6f5619
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OrganizationList_organizations$ref = any;
export type OrganizationOrderBy = "affiliation_customer_ASC" | "affiliation_customer_DESC" | "affiliation_end_customer_ASC" | "affiliation_end_customer_DESC" | "affiliation_host_user_ASC" | "affiliation_host_user_DESC" | "affiliation_partner_ASC" | "affiliation_partner_DESC" | "affiliation_provider_ASC" | "affiliation_provider_DESC" | "affiliation_site_owner_ASC" | "affiliation_site_owner_DESC" | "created_ASC" | "created_DESC" | "creator_ASC" | "creator_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "incident_management_info_ASC" | "incident_management_info_DESC" | "modified_ASC" | "modified_DESC" | "modifier_ASC" | "modifier_DESC" | "name_ASC" | "name_DESC" | "organization_id_ASC" | "organization_id_DESC" | "organization_number_ASC" | "organization_number_DESC" | "type_ASC" | "type_DESC" | "website_ASC" | "website_DESC" | "%future added value";
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
  handle_id?: ?number,
  handle_id_not?: ?number,
  handle_id_lt?: ?number,
  handle_id_lte?: ?number,
  handle_id_gt?: ?number,
  handle_id_gte?: ?number,
  handle_id_in?: ?$ReadOnlyArray<number>,
  handle_id_not_in?: ?$ReadOnlyArray<number>,
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
  handle_id?: ?number,
  created?: ?any,
  modified?: ?any,
  creator?: ?UserInputType,
  modifier?: ?UserInputType,
|};
export type UserInputType = {|
  username: string
|};
export type SearchOrganizationAllQueryVariables = {|
  count: number,
  filter?: ?OrganizationFilter,
  orderBy?: ?OrganizationOrderBy,
|};
export type SearchOrganizationAllQueryResponse = {|
  +$fragmentRefs: OrganizationList_organizations$ref
|};
export type SearchOrganizationAllQuery = {|
  variables: SearchOrganizationAllQueryVariables,
  response: SearchOrganizationAllQueryResponse,
|};
*/


/*
query SearchOrganizationAllQuery(
  $count: Int!
  $filter: OrganizationFilter
  $orderBy: OrganizationOrderBy
) {
  ...OrganizationList_organizations_1tT5Hu
}

fragment OrganizationList_organizations_1tT5Hu on Query {
  organizations(first: $count, filter: $filter, orderBy: $orderBy) {
    edges {
      node {
        handle_id
        ...OrganizationRow_organization
        id
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

fragment OrganizationRow_organization on Organization {
  handle_id
  name
  type
  organization_id
  affiliation_customer
  affiliation_end_customer
  affiliation_host_user
  affiliation_partner
  affiliation_provider
  affiliation_site_owner
  incoming {
    name
    relation {
      type
      start {
        handle_id
        node_name
        id
      }
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "OrganizationFilter",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "OrganizationOrderBy",
    "defaultValue": null
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
  "kind": "ScalarField",
  "alias": null,
  "name": "handle_id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SearchOrganizationAllQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "OrganizationList_organizations",
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchOrganizationAllQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "organizations",
        "storageKey": null,
        "args": (v3/*: any*/),
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
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "organization_id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "affiliation_customer",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "affiliation_end_customer",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "affiliation_host_user",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "affiliation_partner",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "affiliation_provider",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "affiliation_site_owner",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "incoming",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "DictRelationType",
                    "plural": true,
                    "selections": [
                      (v5/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "relation",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NIRelationType",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "start",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "NINodeHandlerType",
                            "plural": false,
                            "selections": [
                              (v4/*: any*/),
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "node_name",
                                "args": null,
                                "storageKey": null
                              },
                              (v7/*: any*/)
                            ]
                          },
                          (v7/*: any*/)
                        ]
                      }
                    ]
                  },
                  (v7/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "organizations",
        "args": (v3/*: any*/),
        "handle": "connection",
        "key": "OrganizationList_organizations",
        "filters": []
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SearchOrganizationAllQuery",
    "id": null,
    "text": "query SearchOrganizationAllQuery(\n  $count: Int!\n  $filter: OrganizationFilter\n  $orderBy: OrganizationOrderBy\n) {\n  ...OrganizationList_organizations_1tT5Hu\n}\n\nfragment OrganizationList_organizations_1tT5Hu on Query {\n  organizations(first: $count, filter: $filter, orderBy: $orderBy) {\n    edges {\n      node {\n        handle_id\n        ...OrganizationRow_organization\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment OrganizationRow_organization on Organization {\n  handle_id\n  name\n  type\n  organization_id\n  affiliation_customer\n  affiliation_end_customer\n  affiliation_host_user\n  affiliation_partner\n  affiliation_provider\n  affiliation_site_owner\n  incoming {\n    name\n    relation {\n      type\n      start {\n        handle_id\n        node_name\n        id\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2300e2c0432b06514d93bbdae5f9ec98';
module.exports = node;
