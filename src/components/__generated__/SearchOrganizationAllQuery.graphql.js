/**
 * @flow
 * @relayHash 2559234d0b92ef1a44e7d1f54d8f229b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OrganizationList_organizations$ref = any;
export type OrganizationOrderBy = "created_ASC" | "created_DESC" | "creator_ASC" | "creator_DESC" | "customer_id_ASC" | "customer_id_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "incident_management_info_ASC" | "incident_management_info_DESC" | "modified_ASC" | "modified_DESC" | "modifier_ASC" | "modifier_DESC" | "name_ASC" | "name_DESC" | "type_ASC" | "type_DESC" | "website_ASC" | "website_DESC" | "%future added value";
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
  customer_id?: ?string,
  customer_id_not?: ?string,
  customer_id_lt?: ?string,
  customer_id_lte?: ?string,
  customer_id_gt?: ?string,
  customer_id_gte?: ?string,
  customer_id_contains?: ?string,
  customer_id_not_contains?: ?string,
  customer_id_starts_with?: ?string,
  customer_id_not_starts_with?: ?string,
  customer_id_ends_with?: ?string,
  customer_id_not_ends_with?: ?string,
  customer_id_in?: ?$ReadOnlyArray<string>,
  customer_id_not_in?: ?$ReadOnlyArray<string>,
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
  addresses_in?: ?$ReadOnlyArray<AddressInputField>,
  addresses_not_in?: ?$ReadOnlyArray<AddressInputField>,
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
  creator_in?: ?$ReadOnlyArray<UserInputType>,
  creator_not_in?: ?$ReadOnlyArray<UserInputType>,
  modifier?: ?UserInputType,
  modifier_not?: ?UserInputType,
  modifier_lt?: ?UserInputType,
  modifier_lte?: ?UserInputType,
  modifier_gt?: ?UserInputType,
  modifier_gte?: ?UserInputType,
  modifier_in?: ?$ReadOnlyArray<UserInputType>,
  modifier_not_in?: ?$ReadOnlyArray<UserInputType>,
|};
export type AddressInputField = {|
  name?: ?string,
  website?: ?string,
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
  customer_id
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
                    "name": "customer_id",
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
    "text": "query SearchOrganizationAllQuery(\n  $count: Int!\n  $filter: OrganizationFilter\n  $orderBy: OrganizationOrderBy\n) {\n  ...OrganizationList_organizations_1tT5Hu\n}\n\nfragment OrganizationList_organizations_1tT5Hu on Query {\n  organizations(first: $count, filter: $filter, orderBy: $orderBy) {\n    edges {\n      node {\n        handle_id\n        ...OrganizationRow_organization\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment OrganizationRow_organization on Organization {\n  handle_id\n  name\n  type\n  customer_id\n  affiliation_customer\n  affiliation_end_customer\n  affiliation_host_user\n  affiliation_partner\n  affiliation_provider\n  affiliation_site_owner\n  incoming {\n    name\n    relation {\n      type\n      start {\n        handle_id\n        node_name\n        id\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2300e2c0432b06514d93bbdae5f9ec98';
module.exports = node;
