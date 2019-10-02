/**
 * @flow
 * @relayHash f073261dea26a4ca15af239deb0d7fc3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Group_group$ref = any;
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
  phones?: ?PhoneInputField,
  phones_not?: ?PhoneInputField,
  phones_lt?: ?PhoneInputField,
  phones_lte?: ?PhoneInputField,
  phones_gt?: ?PhoneInputField,
  phones_gte?: ?PhoneInputField,
  phones_in?: ?$ReadOnlyArray<PhoneInputField>,
  phones_not_in?: ?$ReadOnlyArray<PhoneInputField>,
  emails?: ?EmailInputField,
  emails_not?: ?EmailInputField,
  emails_lt?: ?EmailInputField,
  emails_lte?: ?EmailInputField,
  emails_gt?: ?EmailInputField,
  emails_gte?: ?EmailInputField,
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
  member_of_groups_in?: ?$ReadOnlyArray<GroupInputField>,
  member_of_groups_not_in?: ?$ReadOnlyArray<GroupInputField>,
  roles?: ?RoleRelationInputField,
  roles_not?: ?RoleRelationInputField,
  roles_lt?: ?RoleRelationInputField,
  roles_lte?: ?RoleRelationInputField,
  roles_gt?: ?RoleRelationInputField,
  roles_gte?: ?RoleRelationInputField,
  roles_in?: ?$ReadOnlyArray<RoleRelationInputField>,
  roles_not_in?: ?$ReadOnlyArray<RoleRelationInputField>,
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
export type PhoneInputField = {|
  name?: ?string,
  type?: ?any,
  handle_id?: ?number,
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
  handle_id?: ?number,
  created?: ?any,
  modified?: ?any,
  creator?: ?UserInputType,
  modifier?: ?UserInputType,
|};
export type GroupInputField = {|
  name?: ?string,
  description?: ?string,
  handle_id?: ?number,
  created?: ?any,
  modified?: ?any,
  creator?: ?UserInputType,
  modifier?: ?UserInputType,
|};
export type RoleRelationInputField = {|
  relation_id?: ?number,
  name?: ?string,
|};
export type GroupDetailsQueryVariables = {|
  groupId: number,
  filter?: ?ContactFilter,
|};
export type GroupDetailsQueryResponse = {|
  +getGroupById: ?{|
    +name: string,
    +created: any,
    +creator: {|
      +email: string
    |},
    +modified: any,
    +modifier: {|
      +email: string
    |},
    +$fragmentRefs: Group_group$ref,
  |},
  +contacts: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +handle_id: string,
        +first_name: string,
        +last_name: string,
        +emails: ?$ReadOnlyArray<?{|
          +handle_id: string,
          +name: string,
          +type: any,
        |}>,
        +phones: ?$ReadOnlyArray<?{|
          +handle_id: string,
          +name: string,
          +type: any,
        |}>,
        +roles: ?$ReadOnlyArray<?{|
          +name: ?string,
          +end: ?{|
            +handle_id: string,
            +name: string,
          |},
        |}>,
      |}
    |}>
  |},
|};
export type GroupDetailsQuery = {|
  variables: GroupDetailsQueryVariables,
  response: GroupDetailsQueryResponse,
|};
*/


/*
query GroupDetailsQuery(
  $groupId: Int!
  $filter: ContactFilter
) {
  getGroupById(handle_id: $groupId) {
    ...Group_group
    name
    created
    creator {
      email
      id
    }
    modified
    modifier {
      email
      id
    }
    id
  }
  contacts(filter: $filter) {
    edges {
      node {
        handle_id
        first_name
        last_name
        emails {
          handle_id
          name
          type
          id
        }
        phones {
          handle_id
          name
          type
          id
        }
        roles {
          name
          end {
            handle_id
            name
            id
          }
        }
        id
      }
    }
  }
}

fragment Group_group on Group {
  handle_id
  name
  description
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "groupId",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "ContactFilter",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "handle_id",
    "variableName": "groupId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v5 = [
  (v4/*: any*/)
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "modified",
  "args": null,
  "storageKey": null
},
v7 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter"
  }
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "handle_id",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v12 = [
  (v8/*: any*/),
  (v2/*: any*/),
  (v11/*: any*/)
],
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v14 = [
  (v4/*: any*/),
  (v13/*: any*/)
],
v15 = [
  (v8/*: any*/),
  (v2/*: any*/),
  (v11/*: any*/),
  (v13/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "GroupDetailsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getGroupById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Group",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v5/*: any*/)
          },
          (v6/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v5/*: any*/)
          },
          {
            "kind": "FragmentSpread",
            "name": "Group_group",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "contacts",
        "storageKey": null,
        "args": (v7/*: any*/),
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
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "emails",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Email",
                    "plural": true,
                    "selections": (v12/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "phones",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Phone",
                    "plural": true,
                    "selections": (v12/*: any*/)
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
                      (v2/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "end",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Organization",
                        "plural": false,
                        "selections": [
                          (v8/*: any*/),
                          (v2/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "GroupDetailsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getGroupById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Group",
        "plural": false,
        "selections": [
          (v8/*: any*/),
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v14/*: any*/)
          },
          (v6/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v14/*: any*/)
          },
          (v13/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "contacts",
        "storageKey": null,
        "args": (v7/*: any*/),
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
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "emails",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Email",
                    "plural": true,
                    "selections": (v15/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "phones",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Phone",
                    "plural": true,
                    "selections": (v15/*: any*/)
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
                      (v2/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "end",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Organization",
                        "plural": false,
                        "selections": [
                          (v8/*: any*/),
                          (v2/*: any*/),
                          (v13/*: any*/)
                        ]
                      }
                    ]
                  },
                  (v13/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "GroupDetailsQuery",
    "id": null,
    "text": "query GroupDetailsQuery(\n  $groupId: Int!\n  $filter: ContactFilter\n) {\n  getGroupById(handle_id: $groupId) {\n    ...Group_group\n    name\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n    id\n  }\n  contacts(filter: $filter) {\n    edges {\n      node {\n        handle_id\n        first_name\n        last_name\n        emails {\n          handle_id\n          name\n          type\n          id\n        }\n        phones {\n          handle_id\n          name\n          type\n          id\n        }\n        roles {\n          name\n          end {\n            handle_id\n            name\n            id\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment Group_group on Group {\n  handle_id\n  name\n  description\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '95c01d88b197917486b1407a6bab3bf5';
module.exports = node;
