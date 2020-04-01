/**
 * @flow
 * @relayHash 4cd8c54c9518f4e05dc72778f122c722
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ContactList_contacts$ref = any;
type ContactList_organization_types$ref = any;
type ContactList_roles_default$ref = any;
export type ContactOrderBy = "contact_type_ASC" | "contact_type_DESC" | "created_ASC" | "created_DESC" | "emails_ASC" | "emails_DESC" | "first_name_ASC" | "first_name_DESC" | "handle_id_ASC" | "handle_id_DESC" | "last_name_ASC" | "last_name_DESC" | "member_of_groups_ASC" | "member_of_groups_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "notes_ASC" | "notes_DESC" | "organizations_ASC" | "organizations_DESC" | "pgp_fingerprint_ASC" | "pgp_fingerprint_DESC" | "phones_ASC" | "phones_DESC" | "roles_ASC" | "roles_DESC" | "salutation_ASC" | "salutation_DESC" | "title_ASC" | "title_DESC" | "%future added value";
export type ContactFilter = {|
  AND?: ?$ReadOnlyArray<ContactNestedFilter>,
  OR?: ?$ReadOnlyArray<ContactNestedFilter>,
|};
export type ContactNestedFilter = {|
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
  first_name?: ?string,
  first_name_not?: ?string,
  first_name_lt?: ?string,
  first_name_lte?: ?string,
  first_name_gt?: ?string,
  first_name_gte?: ?string,
  first_name_contains?: ?string,
  first_name_not_contains?: ?string,
  first_name_starts_with?: ?string,
  first_name_not_starts_with?: ?string,
  first_name_ends_with?: ?string,
  first_name_not_ends_with?: ?string,
  first_name_in?: ?$ReadOnlyArray<string>,
  first_name_not_in?: ?$ReadOnlyArray<string>,
  last_name?: ?string,
  last_name_not?: ?string,
  last_name_lt?: ?string,
  last_name_lte?: ?string,
  last_name_gt?: ?string,
  last_name_gte?: ?string,
  last_name_contains?: ?string,
  last_name_not_contains?: ?string,
  last_name_starts_with?: ?string,
  last_name_not_starts_with?: ?string,
  last_name_ends_with?: ?string,
  last_name_not_ends_with?: ?string,
  last_name_in?: ?$ReadOnlyArray<string>,
  last_name_not_in?: ?$ReadOnlyArray<string>,
  title?: ?string,
  title_not?: ?string,
  title_lt?: ?string,
  title_lte?: ?string,
  title_gt?: ?string,
  title_gte?: ?string,
  title_contains?: ?string,
  title_not_contains?: ?string,
  title_starts_with?: ?string,
  title_not_starts_with?: ?string,
  title_ends_with?: ?string,
  title_not_ends_with?: ?string,
  title_in?: ?$ReadOnlyArray<string>,
  title_not_in?: ?$ReadOnlyArray<string>,
  salutation?: ?string,
  salutation_not?: ?string,
  salutation_lt?: ?string,
  salutation_lte?: ?string,
  salutation_gt?: ?string,
  salutation_gte?: ?string,
  salutation_contains?: ?string,
  salutation_not_contains?: ?string,
  salutation_starts_with?: ?string,
  salutation_not_starts_with?: ?string,
  salutation_ends_with?: ?string,
  salutation_not_ends_with?: ?string,
  salutation_in?: ?$ReadOnlyArray<string>,
  salutation_not_in?: ?$ReadOnlyArray<string>,
  contact_type?: ?any,
  contact_type_not?: ?any,
  contact_type_lt?: ?any,
  contact_type_lte?: ?any,
  contact_type_gt?: ?any,
  contact_type_gte?: ?any,
  contact_type_contains?: ?any,
  contact_type_not_contains?: ?any,
  contact_type_starts_with?: ?any,
  contact_type_not_starts_with?: ?any,
  contact_type_ends_with?: ?any,
  contact_type_not_ends_with?: ?any,
  contact_type_in?: ?$ReadOnlyArray<any>,
  contact_type_not_in?: ?$ReadOnlyArray<any>,
  phones?: ?PhoneInputField,
  phones_not?: ?PhoneInputField,
  phones_lt?: ?PhoneInputField,
  phones_lte?: ?PhoneInputField,
  phones_gt?: ?PhoneInputField,
  phones_gte?: ?PhoneInputField,
  phones_contains?: ?PhoneInputField,
  phones_not_contains?: ?PhoneInputField,
  phones_starts_with?: ?PhoneInputField,
  phones_not_starts_with?: ?PhoneInputField,
  phones_ends_with?: ?PhoneInputField,
  phones_not_ends_with?: ?PhoneInputField,
  phones_in?: ?$ReadOnlyArray<PhoneInputField>,
  phones_not_in?: ?$ReadOnlyArray<PhoneInputField>,
  emails?: ?EmailInputField,
  emails_not?: ?EmailInputField,
  emails_lt?: ?EmailInputField,
  emails_lte?: ?EmailInputField,
  emails_gt?: ?EmailInputField,
  emails_gte?: ?EmailInputField,
  emails_contains?: ?EmailInputField,
  emails_not_contains?: ?EmailInputField,
  emails_starts_with?: ?EmailInputField,
  emails_not_starts_with?: ?EmailInputField,
  emails_ends_with?: ?EmailInputField,
  emails_not_ends_with?: ?EmailInputField,
  emails_in?: ?$ReadOnlyArray<EmailInputField>,
  emails_not_in?: ?$ReadOnlyArray<EmailInputField>,
  pgp_fingerprint?: ?string,
  pgp_fingerprint_not?: ?string,
  pgp_fingerprint_lt?: ?string,
  pgp_fingerprint_lte?: ?string,
  pgp_fingerprint_gt?: ?string,
  pgp_fingerprint_gte?: ?string,
  pgp_fingerprint_contains?: ?string,
  pgp_fingerprint_not_contains?: ?string,
  pgp_fingerprint_starts_with?: ?string,
  pgp_fingerprint_not_starts_with?: ?string,
  pgp_fingerprint_ends_with?: ?string,
  pgp_fingerprint_not_ends_with?: ?string,
  pgp_fingerprint_in?: ?$ReadOnlyArray<string>,
  pgp_fingerprint_not_in?: ?$ReadOnlyArray<string>,
  member_of_groups?: ?GroupInputField,
  member_of_groups_not?: ?GroupInputField,
  member_of_groups_lt?: ?GroupInputField,
  member_of_groups_lte?: ?GroupInputField,
  member_of_groups_gt?: ?GroupInputField,
  member_of_groups_gte?: ?GroupInputField,
  member_of_groups_contains?: ?GroupInputField,
  member_of_groups_not_contains?: ?GroupInputField,
  member_of_groups_starts_with?: ?GroupInputField,
  member_of_groups_not_starts_with?: ?GroupInputField,
  member_of_groups_ends_with?: ?GroupInputField,
  member_of_groups_not_ends_with?: ?GroupInputField,
  member_of_groups_in?: ?$ReadOnlyArray<GroupInputField>,
  member_of_groups_not_in?: ?$ReadOnlyArray<GroupInputField>,
  roles?: ?RoleRelationInputField,
  roles_not?: ?RoleRelationInputField,
  roles_lt?: ?RoleRelationInputField,
  roles_lte?: ?RoleRelationInputField,
  roles_gt?: ?RoleRelationInputField,
  roles_gte?: ?RoleRelationInputField,
  roles_contains?: ?RoleRelationInputField,
  roles_not_contains?: ?RoleRelationInputField,
  roles_starts_with?: ?RoleRelationInputField,
  roles_not_starts_with?: ?RoleRelationInputField,
  roles_ends_with?: ?RoleRelationInputField,
  roles_not_ends_with?: ?RoleRelationInputField,
  roles_in?: ?$ReadOnlyArray<RoleRelationInputField>,
  roles_not_in?: ?$ReadOnlyArray<RoleRelationInputField>,
  organizations?: ?OrganizationInputField,
  organizations_not?: ?OrganizationInputField,
  organizations_lt?: ?OrganizationInputField,
  organizations_lte?: ?OrganizationInputField,
  organizations_gt?: ?OrganizationInputField,
  organizations_gte?: ?OrganizationInputField,
  organizations_contains?: ?OrganizationInputField,
  organizations_not_contains?: ?OrganizationInputField,
  organizations_starts_with?: ?OrganizationInputField,
  organizations_not_starts_with?: ?OrganizationInputField,
  organizations_ends_with?: ?OrganizationInputField,
  organizations_not_ends_with?: ?OrganizationInputField,
  organizations_in?: ?$ReadOnlyArray<OrganizationInputField>,
  organizations_not_in?: ?$ReadOnlyArray<OrganizationInputField>,
  notes?: ?string,
  notes_not?: ?string,
  notes_lt?: ?string,
  notes_lte?: ?string,
  notes_gt?: ?string,
  notes_gte?: ?string,
  notes_contains?: ?string,
  notes_not_contains?: ?string,
  notes_starts_with?: ?string,
  notes_not_starts_with?: ?string,
  notes_ends_with?: ?string,
  notes_not_ends_with?: ?string,
  notes_in?: ?$ReadOnlyArray<string>,
  notes_not_in?: ?$ReadOnlyArray<string>,
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
export type PhoneInputField = {|
  name?: ?string,
  type?: ?any,
  id?: ?string,
  created?: ?any,
  modified?: ?any,
  creator?: ?UserInputType,
  modifier?: ?UserInputType,
|};
export type UserInputType = {|
  username: string
|};
export type EmailInputField = {|
  name?: ?string,
  type?: ?any,
  id?: ?string,
  created?: ?any,
  modified?: ?any,
  creator?: ?UserInputType,
  modifier?: ?UserInputType,
|};
export type GroupInputField = {|
  name?: ?string,
  description?: ?string,
  id?: ?string,
  created?: ?any,
  modified?: ?any,
  creator?: ?UserInputType,
  modifier?: ?UserInputType,
|};
export type RoleRelationInputField = {|
  relation_id?: ?number,
  name?: ?string,
|};
export type OrganizationInputField = {|
  name?: ?string,
  description?: ?string,
  organization_number?: ?string,
  organization_id?: ?string,
  incident_management_info?: ?string,
  type?: ?any,
  website?: ?string,
  addresses?: ?AddressInputField,
  affiliation_customer?: ?boolean,
  affiliation_end_customer?: ?boolean,
  affiliation_provider?: ?boolean,
  affiliation_partner?: ?boolean,
  affiliation_host_user?: ?boolean,
  affiliation_site_owner?: ?boolean,
  id?: ?string,
  created?: ?any,
  modified?: ?any,
  creator?: ?UserInputType,
  modifier?: ?UserInputType,
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
export type SearchContactsAllQueryVariables = {|
  count: number,
  filter?: ?ContactFilter,
  orderBy?: ?ContactOrderBy,
|};
export type SearchContactsAllQueryResponse = {|
  +$fragmentRefs: ContactList_contacts$ref & ContactList_organization_types$ref & ContactList_roles_default$ref
|};
export type SearchContactsAllQuery = {|
  variables: SearchContactsAllQueryVariables,
  response: SearchContactsAllQueryResponse,
|};
*/


/*
query SearchContactsAllQuery(
  $count: Int!
  $filter: ContactFilter
  $orderBy: ContactOrderBy
) {
  ...ContactList_contacts_1tT5Hu
  ...ContactList_organization_types
  ...ContactList_roles_default
}

fragment ContactList_contacts_1tT5Hu on Query {
  contacts(first: $count, filter: $filter, orderBy: $orderBy) {
    edges {
      node {
        id
        ...ContactRow_contact
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}

fragment ContactList_organization_types on Query {
  getChoicesForDropdown(name: "organization_types") {
    name
    value
    id
  }
}

fragment ContactList_roles_default on Query {
  getRolesFromRoleGroup {
    id
    name
  }
}

fragment ContactRow_contact on Contact {
  id
  first_name
  last_name
  contact_type {
    name
    value
    id
  }
  modified
  roles {
    name
    end {
      name
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
    "type": "ContactFilter",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "ContactOrderBy",
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
  "name": "id",
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
v6 = [
  (v5/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "value",
    "args": null,
    "storageKey": null
  },
  (v4/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SearchContactsAllQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ContactList_contacts",
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      },
      {
        "kind": "FragmentSpread",
        "name": "ContactList_organization_types",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "ContactList_roles_default",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchContactsAllQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "contacts",
        "storageKey": null,
        "args": (v3/*: any*/),
        "concreteType": "ContactConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ContactEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Contact",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "first_name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "last_name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "contact_type",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Choice",
                    "plural": false,
                    "selections": (v6/*: any*/)
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "modified",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "roles",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RoleRelation",
                    "plural": true,
                    "selections": [
                      (v5/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "end",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Organization",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          (v4/*: any*/)
                        ]
                      }
                    ]
                  },
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
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
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
                "name": "hasPreviousPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "startCursor",
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
        "name": "contacts",
        "args": (v3/*: any*/),
        "handle": "connection",
        "key": "ContactList_contacts",
        "filters": []
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getChoicesForDropdown",
        "storageKey": "getChoicesForDropdown(name:\"organization_types\")",
        "args": [
          {
            "kind": "Literal",
            "name": "name",
            "value": "organization_types"
          }
        ],
        "concreteType": "Choice",
        "plural": true,
        "selections": (v6/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getRolesFromRoleGroup",
        "storageKey": null,
        "args": null,
        "concreteType": "Role",
        "plural": true,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SearchContactsAllQuery",
    "id": null,
    "text": "query SearchContactsAllQuery(\n  $count: Int!\n  $filter: ContactFilter\n  $orderBy: ContactOrderBy\n) {\n  ...ContactList_contacts_1tT5Hu\n  ...ContactList_organization_types\n  ...ContactList_roles_default\n}\n\nfragment ContactList_contacts_1tT5Hu on Query {\n  contacts(first: $count, filter: $filter, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...ContactRow_contact\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment ContactList_organization_types on Query {\n  getChoicesForDropdown(name: \"organization_types\") {\n    name\n    value\n    id\n  }\n}\n\nfragment ContactList_roles_default on Query {\n  getRolesFromRoleGroup {\n    id\n    name\n  }\n}\n\nfragment ContactRow_contact on Contact {\n  id\n  first_name\n  last_name\n  contact_type {\n    name\n    value\n    id\n  }\n  modified\n  roles {\n    name\n    end {\n      name\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '85d8fcaecea519279f89db3e7be27823';
module.exports = node;
