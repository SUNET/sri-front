/**
 * @flow
 * @relayHash 6732b075af652d30bf1202b4bb26f1cf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ContactList_contacts$ref = any;
export type ContactOrderBy = "PGP_fingerprint_ASC" | "PGP_fingerprint_DESC" | "contact_type_ASC" | "contact_type_DESC" | "email_ASC" | "email_DESC" | "first_name_ASC" | "first_name_DESC" | "handle_id_ASC" | "handle_id_DESC" | "last_name_ASC" | "last_name_DESC" | "mobile_ASC" | "mobile_DESC" | "name_ASC" | "name_DESC" | "other_email_ASC" | "other_email_DESC" | "phone_ASC" | "phone_DESC" | "salutation_ASC" | "salutation_DESC" | "title_ASC" | "title_DESC" | "%future added value";
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
  contact_type?: ?string,
  contact_type_not?: ?string,
  contact_type_lt?: ?string,
  contact_type_lte?: ?string,
  contact_type_gt?: ?string,
  contact_type_gte?: ?string,
  contact_type_contains?: ?string,
  contact_type_not_contains?: ?string,
  contact_type_starts_with?: ?string,
  contact_type_not_starts_with?: ?string,
  contact_type_ends_with?: ?string,
  contact_type_not_ends_with?: ?string,
  contact_type_in?: ?$ReadOnlyArray<string>,
  contact_type_not_in?: ?$ReadOnlyArray<string>,
  phone?: ?string,
  phone_not?: ?string,
  phone_lt?: ?string,
  phone_lte?: ?string,
  phone_gt?: ?string,
  phone_gte?: ?string,
  phone_contains?: ?string,
  phone_not_contains?: ?string,
  phone_starts_with?: ?string,
  phone_not_starts_with?: ?string,
  phone_ends_with?: ?string,
  phone_not_ends_with?: ?string,
  phone_in?: ?$ReadOnlyArray<string>,
  phone_not_in?: ?$ReadOnlyArray<string>,
  mobile?: ?string,
  mobile_not?: ?string,
  mobile_lt?: ?string,
  mobile_lte?: ?string,
  mobile_gt?: ?string,
  mobile_gte?: ?string,
  mobile_contains?: ?string,
  mobile_not_contains?: ?string,
  mobile_starts_with?: ?string,
  mobile_not_starts_with?: ?string,
  mobile_ends_with?: ?string,
  mobile_not_ends_with?: ?string,
  mobile_in?: ?$ReadOnlyArray<string>,
  mobile_not_in?: ?$ReadOnlyArray<string>,
  email?: ?string,
  email_not?: ?string,
  email_lt?: ?string,
  email_lte?: ?string,
  email_gt?: ?string,
  email_gte?: ?string,
  email_contains?: ?string,
  email_not_contains?: ?string,
  email_starts_with?: ?string,
  email_not_starts_with?: ?string,
  email_ends_with?: ?string,
  email_not_ends_with?: ?string,
  email_in?: ?$ReadOnlyArray<string>,
  email_not_in?: ?$ReadOnlyArray<string>,
  other_email?: ?string,
  other_email_not?: ?string,
  other_email_lt?: ?string,
  other_email_lte?: ?string,
  other_email_gt?: ?string,
  other_email_gte?: ?string,
  other_email_contains?: ?string,
  other_email_not_contains?: ?string,
  other_email_starts_with?: ?string,
  other_email_not_starts_with?: ?string,
  other_email_ends_with?: ?string,
  other_email_not_ends_with?: ?string,
  other_email_in?: ?$ReadOnlyArray<string>,
  other_email_not_in?: ?$ReadOnlyArray<string>,
  PGP_fingerprint?: ?string,
  PGP_fingerprint_not?: ?string,
  PGP_fingerprint_lt?: ?string,
  PGP_fingerprint_lte?: ?string,
  PGP_fingerprint_gt?: ?string,
  PGP_fingerprint_gte?: ?string,
  PGP_fingerprint_contains?: ?string,
  PGP_fingerprint_not_contains?: ?string,
  PGP_fingerprint_starts_with?: ?string,
  PGP_fingerprint_not_starts_with?: ?string,
  PGP_fingerprint_ends_with?: ?string,
  PGP_fingerprint_not_ends_with?: ?string,
  PGP_fingerprint_in?: ?$ReadOnlyArray<string>,
  PGP_fingerprint_not_in?: ?$ReadOnlyArray<string>,
  member_of_groups?: ?GroupInputField,
  member_of_groups_not?: ?GroupInputField,
  member_of_groups_lt?: ?GroupInputField,
  member_of_groups_lte?: ?GroupInputField,
  member_of_groups_gt?: ?GroupInputField,
  member_of_groups_gte?: ?GroupInputField,
  member_of_groups_in?: ?$ReadOnlyArray<GroupInputField>,
  member_of_groups_not_in?: ?$ReadOnlyArray<GroupInputField>,
  roles?: ?RoleInputField,
  roles_not?: ?RoleInputField,
  roles_lt?: ?RoleInputField,
  roles_lte?: ?RoleInputField,
  roles_gt?: ?RoleInputField,
  roles_gte?: ?RoleInputField,
  roles_in?: ?$ReadOnlyArray<RoleInputField>,
  roles_not_in?: ?$ReadOnlyArray<RoleInputField>,
  handle_id?: ?number,
  handle_id_not?: ?number,
  handle_id_lt?: ?number,
  handle_id_lte?: ?number,
  handle_id_gt?: ?number,
  handle_id_gte?: ?number,
  handle_id_in?: ?$ReadOnlyArray<number>,
  handle_id_not_in?: ?$ReadOnlyArray<number>,
|};
export type GroupInputField = {|
  name?: ?string,
  handle_id?: ?number,
|};
export type RoleInputField = {|
  relation_id?: ?number,
  name?: ?string,
|};
export type SearchAllContactsQueryVariables = {|
  count: number,
  filter?: ?ContactFilter,
  orderBy?: ?ContactOrderBy,
|};
export type SearchAllContactsQueryResponse = {|
  +$fragmentRefs: ContactList_contacts$ref
|};
export type SearchAllContactsQuery = {|
  variables: SearchAllContactsQueryVariables,
  response: SearchAllContactsQueryResponse,
|};
*/


/*
query SearchAllContactsQuery(
  $count: Int!
  $filter: ContactFilter
  $orderBy: ContactOrderBy
) {
  ...ContactList_contacts_1tT5Hu
}

fragment ContactList_contacts_1tT5Hu on Query {
  contacts(first: $count, filter: $filter, orderBy: $orderBy) {
    edges {
      node {
        handle_id
        ...ContactRow_contact
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

fragment ContactRow_contact on Contact {
  handle_id
  name
  first_name
  last_name
  contact_type
  modified
  roles {
    name
  }
  member_of_groups {
    name
    id
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
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
    "name": "SearchAllContactsQuery",
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
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchAllContactsQuery",
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
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "handle_id",
                    "args": null,
                    "storageKey": null
                  },
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "contact_type",
                    "args": null,
                    "storageKey": null
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
                    "concreteType": "Role",
                    "plural": true,
                    "selections": [
                      (v4/*: any*/)
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "member_of_groups",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Group",
                    "plural": true,
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/)
                    ]
                  },
                  (v5/*: any*/),
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
        "name": "contacts",
        "args": (v3/*: any*/),
        "handle": "connection",
        "key": "ContactList_contacts",
        "filters": []
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SearchAllContactsQuery",
    "id": null,
    "text": "query SearchAllContactsQuery(\n  $count: Int!\n  $filter: ContactFilter\n  $orderBy: ContactOrderBy\n) {\n  ...ContactList_contacts_1tT5Hu\n}\n\nfragment ContactList_contacts_1tT5Hu on Query {\n  contacts(first: $count, filter: $filter, orderBy: $orderBy) {\n    edges {\n      node {\n        handle_id\n        ...ContactRow_contact\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment ContactRow_contact on Contact {\n  handle_id\n  name\n  first_name\n  last_name\n  contact_type\n  modified\n  roles {\n    name\n  }\n  member_of_groups {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '56e66a7e925df863a047dd655ae36bd6';
module.exports = node;
