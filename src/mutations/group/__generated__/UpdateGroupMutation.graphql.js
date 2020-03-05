/**
 * @flow
 * @relayHash 1018315f85d5fa706c6e37020778b1c1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CompositeGroupMutationInput = {|
  create_input?: ?CreateGroupInput,
  update_input?: ?UpdateGroupInput,
  create_subinputs?: ?$ReadOnlyArray<?CreateContactInput>,
  update_subinputs?: ?$ReadOnlyArray<?UpdateContactInput>,
  delete_subinputs?: ?$ReadOnlyArray<?DeleteContactInput>,
  unlink_subinputs?: ?$ReadOnlyArray<?DeleteRelationshipInput>,
  clientMutationId?: ?string,
|};
export type CreateGroupInput = {|
  name: string,
  description?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateGroupInput = {|
  name: string,
  description?: ?string,
  relationship_member_of?: ?any,
  id: string,
  clientMutationId?: ?string,
|};
export type CreateContactInput = {|
  first_name: string,
  last_name: string,
  contact_type: any,
  name?: ?string,
  title?: ?string,
  pgp_fingerprint?: ?string,
  notes?: ?string,
  relationship_works_for?: ?any,
  relationship_member_of?: ?any,
  role?: ?any,
  email_id?: ?string,
  email?: ?string,
  email_type?: ?any,
  phone_id?: ?string,
  phone?: ?string,
  phone_type?: ?any,
  role_id?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateContactInput = {|
  first_name: string,
  last_name: string,
  contact_type: any,
  name?: ?string,
  title?: ?string,
  pgp_fingerprint?: ?string,
  notes?: ?string,
  relationship_works_for?: ?any,
  relationship_member_of?: ?any,
  role?: ?any,
  email_id?: ?string,
  email?: ?string,
  email_type?: ?any,
  phone_id?: ?string,
  phone?: ?string,
  phone_type?: ?any,
  role_id?: ?string,
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteContactInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteRelationshipInput = {|
  relation_id: number,
  clientMutationId?: ?string,
|};
export type UpdateGroupMutationVariables = {|
  input: CompositeGroupMutationInput
|};
export type UpdateGroupMutationResponse = {|
  +composite_group: ?{|
    +updated: ?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +group: ?{|
        +id: string,
        +name: string,
        +description: ?string,
        +contacts: ?$ReadOnlyArray<?{|
          +id: string,
          +first_name: string,
          +last_name: string,
          +contact_type: ?any,
          +emails: ?$ReadOnlyArray<?{|
            +id: string,
            +name: string,
            +type: any,
          |}>,
          +phones: ?$ReadOnlyArray<?{|
            +id: string,
            +name: string,
            +type: any,
          |}>,
          +roles: ?$ReadOnlyArray<?{|
            +role_data: ?{|
              +id: string,
              +name: string,
            |},
            +end: ?{|
              +id: string,
              +name: string,
            |},
          |}>,
          +outgoing: ?$ReadOnlyArray<?{|
            +name: string,
            +relation: {|
              +relation_id: number,
              +type: string,
              +end: {|
                +id: string,
                +node_name: string,
              |},
            |},
          |}>,
        |}>,
      |},
    |},
    +subcreated: ?$ReadOnlyArray<?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +contact: ?{|
        +id: string,
        +first_name: string,
        +last_name: string,
        +contact_type: ?any,
        +emails: ?$ReadOnlyArray<?{|
          +id: string,
          +name: string,
          +type: any,
        |}>,
        +phones: ?$ReadOnlyArray<?{|
          +id: string,
          +name: string,
          +type: any,
        |}>,
        +member_of_groups: ?$ReadOnlyArray<?{|
          +name: string
        |}>,
      |},
    |}>,
    +subupdated: ?$ReadOnlyArray<?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +contact: ?{|
        +id: string,
        +first_name: string,
        +last_name: string,
        +contact_type: ?any,
        +emails: ?$ReadOnlyArray<?{|
          +id: string,
          +name: string,
          +type: any,
        |}>,
        +phones: ?$ReadOnlyArray<?{|
          +id: string,
          +name: string,
          +type: any,
        |}>,
        +member_of_groups: ?$ReadOnlyArray<?{|
          +name: string
        |}>,
      |},
    |}>,
  |}
|};
export type UpdateGroupMutation = {|
  variables: UpdateGroupMutationVariables,
  response: UpdateGroupMutationResponse,
|};
*/


/*
mutation UpdateGroupMutation(
  $input: CompositeGroupMutationInput!
) {
  composite_group(input: $input) {
    updated {
      errors {
        field
        messages
      }
      group {
        id
        name
        description
        contacts {
          id
          first_name
          last_name
          contact_type
          emails {
            id
            name
            type
          }
          phones {
            id
            name
            type
          }
          roles {
            role_data {
              id
              name
            }
            end {
              id
              name
            }
          }
          outgoing {
            name
            relation {
              relation_id
              type
              end {
                id
                node_name
              }
              id
            }
          }
        }
      }
    }
    subcreated {
      errors {
        field
        messages
      }
      contact {
        id
        first_name
        last_name
        contact_type
        emails {
          id
          name
          type
        }
        phones {
          id
          name
          type
        }
        member_of_groups {
          name
          id
        }
      }
    }
    subupdated {
      errors {
        field
        messages
      }
      contact {
        id
        first_name
        last_name
        contact_type
        emails {
          id
          name
          type
        }
        phones {
          id
          name
          type
        }
        member_of_groups {
          name
          id
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CompositeGroupMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "errors",
  "storageKey": null,
  "args": null,
  "concreteType": "ErrorType",
  "plural": true,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "field",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "messages",
      "args": null,
      "storageKey": null
    }
  ]
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
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
  "name": "description",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "contact_type",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v10 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v9/*: any*/)
],
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "emails",
  "storageKey": null,
  "args": null,
  "concreteType": "Email",
  "plural": true,
  "selections": (v10/*: any*/)
},
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "phones",
  "storageKey": null,
  "args": null,
  "concreteType": "Phone",
  "plural": true,
  "selections": (v10/*: any*/)
},
v13 = [
  (v3/*: any*/),
  (v4/*: any*/)
],
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "roles",
  "storageKey": null,
  "args": null,
  "concreteType": "RoleRelation",
  "plural": true,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "role_data",
      "storageKey": null,
      "args": null,
      "concreteType": "Role",
      "plural": false,
      "selections": (v13/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "end",
      "storageKey": null,
      "args": null,
      "concreteType": "Organization",
      "plural": false,
      "selections": (v13/*: any*/)
    }
  ]
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "relation_id",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "end",
  "storageKey": null,
  "args": null,
  "concreteType": "NINodeHandlerType",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "node_name",
      "args": null,
      "storageKey": null
    }
  ]
},
v17 = [
  (v2/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "contact",
    "storageKey": null,
    "args": null,
    "concreteType": "Contact",
    "plural": false,
    "selections": [
      (v3/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v11/*: any*/),
      (v12/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "member_of_groups",
        "storageKey": null,
        "args": null,
        "concreteType": "Group",
        "plural": true,
        "selections": [
          (v4/*: any*/)
        ]
      }
    ]
  }
],
v18 = [
  (v2/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "contact",
    "storageKey": null,
    "args": null,
    "concreteType": "Contact",
    "plural": false,
    "selections": [
      (v3/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v11/*: any*/),
      (v12/*: any*/),
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
          (v3/*: any*/)
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateGroupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "composite_group",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeGroupMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "updated",
            "storageKey": null,
            "args": null,
            "concreteType": "UpdateGroupPayload",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "group",
                "storageKey": null,
                "args": null,
                "concreteType": "Group",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "contacts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Contact",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v14/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "outgoing",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "DictRelationType",
                        "plural": true,
                        "selections": [
                          (v4/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "relation",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "NIRelationType",
                            "plural": false,
                            "selections": [
                              (v15/*: any*/),
                              (v9/*: any*/),
                              (v16/*: any*/)
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subcreated",
            "storageKey": null,
            "args": null,
            "concreteType": "CreateContactPayload",
            "plural": true,
            "selections": (v17/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subupdated",
            "storageKey": null,
            "args": null,
            "concreteType": "UpdateContactPayload",
            "plural": true,
            "selections": (v17/*: any*/)
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateGroupMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "composite_group",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeGroupMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "updated",
            "storageKey": null,
            "args": null,
            "concreteType": "UpdateGroupPayload",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "group",
                "storageKey": null,
                "args": null,
                "concreteType": "Group",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "contacts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Contact",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v14/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "outgoing",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "DictRelationType",
                        "plural": true,
                        "selections": [
                          (v4/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "relation",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "NIRelationType",
                            "plural": false,
                            "selections": [
                              (v15/*: any*/),
                              (v9/*: any*/),
                              (v16/*: any*/),
                              (v3/*: any*/)
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subcreated",
            "storageKey": null,
            "args": null,
            "concreteType": "CreateContactPayload",
            "plural": true,
            "selections": (v18/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subupdated",
            "storageKey": null,
            "args": null,
            "concreteType": "UpdateContactPayload",
            "plural": true,
            "selections": (v18/*: any*/)
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateGroupMutation",
    "id": null,
    "text": "mutation UpdateGroupMutation(\n  $input: CompositeGroupMutationInput!\n) {\n  composite_group(input: $input) {\n    updated {\n      errors {\n        field\n        messages\n      }\n      group {\n        id\n        name\n        description\n        contacts {\n          id\n          first_name\n          last_name\n          contact_type\n          emails {\n            id\n            name\n            type\n          }\n          phones {\n            id\n            name\n            type\n          }\n          roles {\n            role_data {\n              id\n              name\n            }\n            end {\n              id\n              name\n            }\n          }\n          outgoing {\n            name\n            relation {\n              relation_id\n              type\n              end {\n                id\n                node_name\n              }\n              id\n            }\n          }\n        }\n      }\n    }\n    subcreated {\n      errors {\n        field\n        messages\n      }\n      contact {\n        id\n        first_name\n        last_name\n        contact_type\n        emails {\n          id\n          name\n          type\n        }\n        phones {\n          id\n          name\n          type\n        }\n        member_of_groups {\n          name\n          id\n        }\n      }\n    }\n    subupdated {\n      errors {\n        field\n        messages\n      }\n      contact {\n        id\n        first_name\n        last_name\n        contact_type\n        emails {\n          id\n          name\n          type\n        }\n        phones {\n          id\n          name\n          type\n        }\n        member_of_groups {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '43f3bd0404b8409f915f9d82bbe5b19b';
module.exports = node;
