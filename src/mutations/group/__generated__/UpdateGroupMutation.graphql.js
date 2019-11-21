/**
 * @flow
 * @relayHash c6e3b14e2da74bf73340a5f81cc84d04
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
  handle_id: number,
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
  email_handle_id?: ?number,
  email?: ?string,
  email_type?: ?any,
  phone_handle_id?: ?number,
  phone?: ?string,
  phone_type?: ?any,
  role_handle_id?: ?number,
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
  email_handle_id?: ?number,
  email?: ?string,
  email_type?: ?any,
  phone_handle_id?: ?number,
  phone?: ?string,
  phone_type?: ?any,
  role_handle_id?: ?number,
  handle_id: number,
  clientMutationId?: ?string,
|};
export type DeleteContactInput = {|
  handle_id: number,
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
        +handle_id: string,
        +name: string,
        +description: ?string,
        +contacts: ?$ReadOnlyArray<?{|
          +handle_id: string,
          +first_name: string,
          +last_name: string,
          +contact_type: ?any,
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
            +role_data: ?{|
              +handle_id: string,
              +name: string,
            |},
            +end: ?{|
              +handle_id: string,
              +name: string,
            |},
          |}>,
          +outgoing: ?$ReadOnlyArray<?{|
            +name: string,
            +relation: {|
              +relation_id: number,
              +type: string,
              +end: {|
                +handle_id: string,
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
        +handle_id: string,
        +first_name: string,
        +last_name: string,
        +contact_type: ?any,
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
        +handle_id: string,
        +first_name: string,
        +last_name: string,
        +contact_type: ?any,
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
        handle_id
        name
        description
        contacts {
          handle_id
          first_name
          last_name
          contact_type
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
            role_data {
              handle_id
              name
            }
            end {
              handle_id
              name
              id
            }
          }
          outgoing {
            name
            relation {
              relation_id
              type
              end {
                handle_id
                node_name
                id
              }
              id
            }
          }
          id
        }
        id
      }
    }
    subcreated {
      errors {
        field
        messages
      }
      contact {
        handle_id
        first_name
        last_name
        contact_type
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
        member_of_groups {
          name
          id
        }
        id
      }
    }
    subupdated {
      errors {
        field
        messages
      }
      contact {
        handle_id
        first_name
        last_name
        contact_type
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
        member_of_groups {
          name
          id
        }
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
  "name": "handle_id",
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
  "name": "role_data",
  "storageKey": null,
  "args": null,
  "concreteType": "Role",
  "plural": false,
  "selections": (v13/*: any*/)
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "relation_id",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "node_name",
  "args": null,
  "storageKey": null
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
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v19 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v9/*: any*/),
  (v18/*: any*/)
],
v20 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "emails",
  "storageKey": null,
  "args": null,
  "concreteType": "Email",
  "plural": true,
  "selections": (v19/*: any*/)
},
v21 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "phones",
  "storageKey": null,
  "args": null,
  "concreteType": "Phone",
  "plural": true,
  "selections": (v19/*: any*/)
},
v22 = [
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
      (v20/*: any*/),
      (v21/*: any*/),
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
          (v18/*: any*/)
        ]
      },
      (v18/*: any*/)
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
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "roles",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RoleRelation",
                        "plural": true,
                        "selections": [
                          (v14/*: any*/),
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
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "end",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "NINodeHandlerType",
                                "plural": false,
                                "selections": [
                                  (v3/*: any*/),
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
                      (v20/*: any*/),
                      (v21/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "roles",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RoleRelation",
                        "plural": true,
                        "selections": [
                          (v14/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "end",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Organization",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v4/*: any*/),
                              (v18/*: any*/)
                            ]
                          }
                        ]
                      },
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
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "end",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "NINodeHandlerType",
                                "plural": false,
                                "selections": [
                                  (v3/*: any*/),
                                  (v16/*: any*/),
                                  (v18/*: any*/)
                                ]
                              },
                              (v18/*: any*/)
                            ]
                          }
                        ]
                      },
                      (v18/*: any*/)
                    ]
                  },
                  (v18/*: any*/)
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
            "selections": (v22/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subupdated",
            "storageKey": null,
            "args": null,
            "concreteType": "UpdateContactPayload",
            "plural": true,
            "selections": (v22/*: any*/)
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateGroupMutation",
    "id": null,
    "text": "mutation UpdateGroupMutation(\n  $input: CompositeGroupMutationInput!\n) {\n  composite_group(input: $input) {\n    updated {\n      errors {\n        field\n        messages\n      }\n      group {\n        handle_id\n        name\n        description\n        contacts {\n          handle_id\n          first_name\n          last_name\n          contact_type\n          emails {\n            handle_id\n            name\n            type\n            id\n          }\n          phones {\n            handle_id\n            name\n            type\n            id\n          }\n          roles {\n            role_data {\n              handle_id\n              name\n            }\n            end {\n              handle_id\n              name\n              id\n            }\n          }\n          outgoing {\n            name\n            relation {\n              relation_id\n              type\n              end {\n                handle_id\n                node_name\n                id\n              }\n              id\n            }\n          }\n          id\n        }\n        id\n      }\n    }\n    subcreated {\n      errors {\n        field\n        messages\n      }\n      contact {\n        handle_id\n        first_name\n        last_name\n        contact_type\n        emails {\n          handle_id\n          name\n          type\n          id\n        }\n        phones {\n          handle_id\n          name\n          type\n          id\n        }\n        member_of_groups {\n          name\n          id\n        }\n        id\n      }\n    }\n    subupdated {\n      errors {\n        field\n        messages\n      }\n      contact {\n        handle_id\n        first_name\n        last_name\n        contact_type\n        emails {\n          handle_id\n          name\n          type\n          id\n        }\n        phones {\n          handle_id\n          name\n          type\n          id\n        }\n        member_of_groups {\n          name\n          id\n        }\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '57acfe8d99591477c22498eb85f1e8eb';
module.exports = node;
