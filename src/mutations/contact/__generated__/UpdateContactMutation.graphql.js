/**
 * @flow
 * @relayHash 0a9c64bb65cf33c28b554b25734d6e0c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CompositeContactMutationInput = {|
  create_input?: ?CreateContactInput,
  update_input?: ?UpdateContactInput,
  create_subinputs?: ?$ReadOnlyArray<?CreateEmailInput>,
  update_subinputs?: ?$ReadOnlyArray<?UpdateEmailInput>,
  delete_subinputs?: ?$ReadOnlyArray<?DeleteEmailInput>,
  unlink_subinputs?: ?$ReadOnlyArray<?DeleteRelationshipInput>,
  create_phones?: ?$ReadOnlyArray<?CreatePhoneInput>,
  update_phones?: ?$ReadOnlyArray<?UpdatePhoneInput>,
  delete_phones?: ?$ReadOnlyArray<?DeletePhoneInput>,
  link_rolerelations?: ?$ReadOnlyArray<?RoleRelationMutationInput>,
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
export type CreateEmailInput = {|
  contact?: ?any,
  name: string,
  type: any,
  clientMutationId?: ?string,
|};
export type UpdateEmailInput = {|
  contact?: ?any,
  name: string,
  type: any,
  handle_id: number,
  clientMutationId?: ?string,
|};
export type DeleteEmailInput = {|
  handle_id: number,
  clientMutationId?: ?string,
|};
export type DeleteRelationshipInput = {|
  relation_id: number,
  clientMutationId?: ?string,
|};
export type CreatePhoneInput = {|
  contact?: ?any,
  name: string,
  type: any,
  clientMutationId?: ?string,
|};
export type UpdatePhoneInput = {|
  contact?: ?any,
  name: string,
  type: any,
  handle_id: number,
  clientMutationId?: ?string,
|};
export type DeletePhoneInput = {|
  handle_id: number,
  clientMutationId?: ?string,
|};
export type RoleRelationMutationInput = {|
  role_handle_id: number,
  organization_handle_id: number,
  clientMutationId?: ?string,
|};
export type UpdateContactMutationVariables = {|
  input: CompositeContactMutationInput
|};
export type UpdateContactMutationResponse = {|
  +composite_contact: ?{|
    +updated: ?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +contact: ?{|
        +handle_id: string,
        +title: ?string,
        +notes: ?string,
        +contact_type: ?any,
        +first_name: string,
        +last_name: string,
        +pgp_fingerprint: ?string,
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
          +relation_id: number,
          +role_data: ?{|
            +handle_id: string,
            +name: string,
          |},
          +end: ?{|
            +handle_id: string,
            +name: string,
            +organization_id: ?string,
          |},
        |}>,
        +comments: ?$ReadOnlyArray<?{|
          +user: ?{|
            +first_name: string,
            +last_name: string,
          |},
          +comment: string,
          +submit_date: any,
        |}>,
        +member_of_groups: ?$ReadOnlyArray<?{|
          +name: string
        |}>,
      |},
    |},
    +subcreated: ?$ReadOnlyArray<?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +email: ?{|
        +handle_id: string,
        +name: string,
        +type: any,
      |},
    |}>,
    +subupdated: ?$ReadOnlyArray<?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +email: ?{|
        +handle_id: string,
        +name: string,
        +type: any,
      |},
    |}>,
    +phones_created: ?$ReadOnlyArray<?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +phone: ?{|
        +handle_id: string,
        +name: string,
        +type: any,
      |},
    |}>,
    +phones_updated: ?$ReadOnlyArray<?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +phone: ?{|
        +handle_id: string,
        +name: string,
        +type: any,
      |},
    |}>,
    +rolerelations: ?$ReadOnlyArray<?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +rolerelation: ?{|
        +relation_id: number,
        +type: string,
        +start: ?{|
          +handle_id: string,
          +first_name: string,
          +last_name: string,
        |},
        +end: ?{|
          +handle_id: string,
          +name: string,
        |},
      |},
    |}>,
  |}
|};
export type UpdateContactMutation = {|
  variables: UpdateContactMutationVariables,
  response: UpdateContactMutationResponse,
|};
*/


/*
mutation UpdateContactMutation(
  $input: CompositeContactMutationInput!
) {
  composite_contact(input: $input) {
    updated {
      errors {
        field
        messages
      }
      contact {
        handle_id
        title
        notes
        contact_type
        first_name
        last_name
        pgp_fingerprint
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
          relation_id
          role_data {
            handle_id
            name
          }
          end {
            handle_id
            name
            organization_id
            id
          }
        }
        comments {
          user {
            first_name
            last_name
            id
          }
          comment
          submit_date
          id
        }
        member_of_groups {
          name
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
      email {
        handle_id
        name
        type
        id
      }
    }
    subupdated {
      errors {
        field
        messages
      }
      email {
        handle_id
        name
        type
        id
      }
    }
    phones_created {
      errors {
        field
        messages
      }
      phone {
        handle_id
        name
        type
        id
      }
    }
    phones_updated {
      errors {
        field
        messages
      }
      phone {
        handle_id
        name
        type
        id
      }
    }
    rolerelations {
      errors {
        field
        messages
      }
      rolerelation {
        relation_id
        type
        start {
          handle_id
          first_name
          last_name
          id
        }
        end {
          handle_id
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
    "type": "CompositeContactMutationInput!",
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
  "name": "title",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "notes",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "contact_type",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pgp_fingerprint",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
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
  (v3/*: any*/),
  (v10/*: any*/),
  (v11/*: any*/)
],
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "relation_id",
  "args": null,
  "storageKey": null
},
v14 = [
  (v3/*: any*/),
  (v10/*: any*/)
],
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "role_data",
  "storageKey": null,
  "args": null,
  "concreteType": "Role",
  "plural": false,
  "selections": (v14/*: any*/)
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "organization_id",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "comment",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "submit_date",
  "args": null,
  "storageKey": null
},
v19 = [
  (v2/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "email",
    "storageKey": null,
    "args": null,
    "concreteType": "Email",
    "plural": false,
    "selections": (v12/*: any*/)
  }
],
v20 = [
  (v2/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "phone",
    "storageKey": null,
    "args": null,
    "concreteType": "Phone",
    "plural": false,
    "selections": (v12/*: any*/)
  }
],
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v22 = [
  (v3/*: any*/),
  (v10/*: any*/),
  (v11/*: any*/),
  (v21/*: any*/)
],
v23 = [
  (v2/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "email",
    "storageKey": null,
    "args": null,
    "concreteType": "Email",
    "plural": false,
    "selections": (v22/*: any*/)
  }
],
v24 = [
  (v2/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "phone",
    "storageKey": null,
    "args": null,
    "concreteType": "Phone",
    "plural": false,
    "selections": (v22/*: any*/)
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateContactMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "composite_contact",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeContactMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "updated",
            "storageKey": null,
            "args": null,
            "concreteType": "UpdateContactPayload",
            "plural": false,
            "selections": [
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
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
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
                      (v13/*: any*/),
                      (v15/*: any*/),
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
                          (v10/*: any*/),
                          (v16/*: any*/)
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "comments",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CommentType",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "user",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          (v7/*: any*/),
                          (v8/*: any*/)
                        ]
                      },
                      (v17/*: any*/),
                      (v18/*: any*/)
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
                      (v10/*: any*/)
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
            "concreteType": "CreateEmailPayload",
            "plural": true,
            "selections": (v19/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subupdated",
            "storageKey": null,
            "args": null,
            "concreteType": "UpdateEmailPayload",
            "plural": true,
            "selections": (v19/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "phones_created",
            "storageKey": null,
            "args": null,
            "concreteType": "CreatePhonePayload",
            "plural": true,
            "selections": (v20/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "phones_updated",
            "storageKey": null,
            "args": null,
            "concreteType": "UpdatePhonePayload",
            "plural": true,
            "selections": (v20/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "rolerelations",
            "storageKey": null,
            "args": null,
            "concreteType": "RoleRelationMutationPayload",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "rolerelation",
                "storageKey": null,
                "args": null,
                "concreteType": "RoleRelation",
                "plural": false,
                "selections": [
                  (v13/*: any*/),
                  (v11/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "start",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Contact",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/)
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "end",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Organization",
                    "plural": false,
                    "selections": (v14/*: any*/)
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
    "name": "UpdateContactMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "composite_contact",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CompositeContactMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "updated",
            "storageKey": null,
            "args": null,
            "concreteType": "UpdateContactPayload",
            "plural": false,
            "selections": [
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
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "emails",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Email",
                    "plural": true,
                    "selections": (v22/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "phones",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Phone",
                    "plural": true,
                    "selections": (v22/*: any*/)
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
                      (v13/*: any*/),
                      (v15/*: any*/),
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
                          (v10/*: any*/),
                          (v16/*: any*/),
                          (v21/*: any*/)
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "comments",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CommentType",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "user",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          (v7/*: any*/),
                          (v8/*: any*/),
                          (v21/*: any*/)
                        ]
                      },
                      (v17/*: any*/),
                      (v18/*: any*/),
                      (v21/*: any*/)
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
                      (v10/*: any*/),
                      (v21/*: any*/)
                    ]
                  },
                  (v21/*: any*/)
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
            "concreteType": "CreateEmailPayload",
            "plural": true,
            "selections": (v23/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subupdated",
            "storageKey": null,
            "args": null,
            "concreteType": "UpdateEmailPayload",
            "plural": true,
            "selections": (v23/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "phones_created",
            "storageKey": null,
            "args": null,
            "concreteType": "CreatePhonePayload",
            "plural": true,
            "selections": (v24/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "phones_updated",
            "storageKey": null,
            "args": null,
            "concreteType": "UpdatePhonePayload",
            "plural": true,
            "selections": (v24/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "rolerelations",
            "storageKey": null,
            "args": null,
            "concreteType": "RoleRelationMutationPayload",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "rolerelation",
                "storageKey": null,
                "args": null,
                "concreteType": "RoleRelation",
                "plural": false,
                "selections": [
                  (v13/*: any*/),
                  (v11/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "start",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Contact",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v21/*: any*/)
                    ]
                  },
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
                      (v10/*: any*/),
                      (v21/*: any*/)
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
  "params": {
    "operationKind": "mutation",
    "name": "UpdateContactMutation",
    "id": null,
    "text": "mutation UpdateContactMutation(\n  $input: CompositeContactMutationInput!\n) {\n  composite_contact(input: $input) {\n    updated {\n      errors {\n        field\n        messages\n      }\n      contact {\n        handle_id\n        title\n        notes\n        contact_type\n        first_name\n        last_name\n        pgp_fingerprint\n        emails {\n          handle_id\n          name\n          type\n          id\n        }\n        phones {\n          handle_id\n          name\n          type\n          id\n        }\n        roles {\n          relation_id\n          role_data {\n            handle_id\n            name\n          }\n          end {\n            handle_id\n            name\n            organization_id\n            id\n          }\n        }\n        comments {\n          user {\n            first_name\n            last_name\n            id\n          }\n          comment\n          submit_date\n          id\n        }\n        member_of_groups {\n          name\n          id\n        }\n        id\n      }\n    }\n    subcreated {\n      errors {\n        field\n        messages\n      }\n      email {\n        handle_id\n        name\n        type\n        id\n      }\n    }\n    subupdated {\n      errors {\n        field\n        messages\n      }\n      email {\n        handle_id\n        name\n        type\n        id\n      }\n    }\n    phones_created {\n      errors {\n        field\n        messages\n      }\n      phone {\n        handle_id\n        name\n        type\n        id\n      }\n    }\n    phones_updated {\n      errors {\n        field\n        messages\n      }\n      phone {\n        handle_id\n        name\n        type\n        id\n      }\n    }\n    rolerelations {\n      errors {\n        field\n        messages\n      }\n      rolerelation {\n        relation_id\n        type\n        start {\n          handle_id\n          first_name\n          last_name\n          id\n        }\n        end {\n          handle_id\n          name\n          id\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c4735053f2cc3a19ce9be6abf1f61a8d';
module.exports = node;
