/**
 * @flow
 * @relayHash ec50dc258d871534b204ccb8b7f43419
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
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteEmailInput = {|
  id: string,
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
  id: string,
  clientMutationId?: ?string,
|};
export type DeletePhoneInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type RoleRelationMutationInput = {|
  role_id?: ?string,
  organization_id: string,
  relation_id?: ?number,
  clientMutationId?: ?string,
|};
export type CreateContactMutationVariables = {|
  input: CompositeContactMutationInput
|};
export type CreateContactMutationResponse = {|
  +composite_contact: ?{|
    +created: ?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +contact: ?{|
        +id: string,
        +title: ?string,
        +notes: ?string,
        +contact_type: ?{|
          +name: string,
          +value: string,
        |},
        +first_name: string,
        +last_name: string,
        +pgp_fingerprint: ?string,
        +emails: ?$ReadOnlyArray<?{|
          +id: string,
          +name: string,
          +type: ?{|
            +name: string,
            +value: string,
          |},
        |}>,
        +phones: ?$ReadOnlyArray<?{|
          +id: string,
          +name: string,
          +type: ?{|
            +name: string,
            +value: string,
          |},
        |}>,
        +roles: ?$ReadOnlyArray<?{|
          +relation_id: number,
          +role_data: ?{|
            +id: string,
            +name: string,
          |},
          +end: ?{|
            +id: string,
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
        +id: string,
        +name: string,
        +type: ?{|
          +name: string,
          +value: string,
        |},
      |},
    |}>,
    +phones_created: ?$ReadOnlyArray<?{|
      +errors: ?$ReadOnlyArray<?{|
        +field: string,
        +messages: $ReadOnlyArray<string>,
      |}>,
      +phone: ?{|
        +id: string,
        +name: string,
        +type: ?{|
          +name: string,
          +value: string,
        |},
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
          +id: string,
          +first_name: string,
          +last_name: string,
        |},
        +end: ?{|
          +id: string,
          +name: string,
        |},
      |},
    |}>,
  |}
|};
export type CreateContactMutation = {|
  variables: CreateContactMutationVariables,
  response: CreateContactMutationResponse,
|};
*/


/*
mutation CreateContactMutation(
  $input: CompositeContactMutationInput!
) {
  composite_contact(input: $input) {
    created {
      errors {
        field
        messages
      }
      contact {
        id
        title
        notes
        contact_type {
          name
          value
          id
        }
        first_name
        last_name
        pgp_fingerprint
        emails {
          id
          name
          type {
            name
            value
            id
          }
        }
        phones {
          id
          name
          type {
            name
            value
            id
          }
        }
        roles {
          relation_id
          role_data {
            id
            name
          }
          end {
            id
            name
            organization_id
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
      }
    }
    subcreated {
      errors {
        field
        messages
      }
      email {
        id
        name
        type {
          name
          value
          id
        }
      }
    }
    phones_created {
      errors {
        field
        messages
      }
      phone {
        id
        name
        type {
          name
          value
          id
        }
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
          id
          first_name
          last_name
        }
        end {
          id
          name
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
  "name": "id",
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v8 = [
  (v6/*: any*/),
  (v7/*: any*/)
],
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
  "name": "pgp_fingerprint",
  "args": null,
  "storageKey": null
},
v12 = [
  (v3/*: any*/),
  (v6/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "type",
    "storageKey": null,
    "args": null,
    "concreteType": "Choice",
    "plural": false,
    "selections": (v8/*: any*/)
  }
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
  (v6/*: any*/)
],
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "roles",
  "storageKey": null,
  "args": null,
  "concreteType": "RoleRelation",
  "plural": true,
  "selections": [
    (v13/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "role_data",
      "storageKey": null,
      "args": null,
      "concreteType": "Role",
      "plural": false,
      "selections": (v14/*: any*/)
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
        (v6/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "organization_id",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "comment",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "submit_date",
  "args": null,
  "storageKey": null
},
v18 = {
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "type",
          "args": null,
          "storageKey": null
        },
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
            (v9/*: any*/),
            (v10/*: any*/)
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
},
v19 = [
  (v6/*: any*/),
  (v7/*: any*/),
  (v3/*: any*/)
],
v20 = [
  (v3/*: any*/),
  (v6/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "type",
    "storageKey": null,
    "args": null,
    "concreteType": "Choice",
    "plural": false,
    "selections": (v19/*: any*/)
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateContactMutation",
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
            "name": "created",
            "storageKey": null,
            "args": null,
            "concreteType": "CreateContactPayload",
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
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "contact_type",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Choice",
                    "plural": false,
                    "selections": (v8/*: any*/)
                  },
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
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
                  (v15/*: any*/),
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
                          (v9/*: any*/),
                          (v10/*: any*/)
                        ]
                      },
                      (v16/*: any*/),
                      (v17/*: any*/)
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
                      (v6/*: any*/)
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
            "selections": [
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
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "phones_created",
            "storageKey": null,
            "args": null,
            "concreteType": "CreatePhonePayload",
            "plural": true,
            "selections": [
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
            ]
          },
          (v18/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateContactMutation",
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
            "name": "created",
            "storageKey": null,
            "args": null,
            "concreteType": "CreateContactPayload",
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
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "contact_type",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Choice",
                    "plural": false,
                    "selections": (v19/*: any*/)
                  },
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "emails",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Email",
                    "plural": true,
                    "selections": (v20/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "phones",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Phone",
                    "plural": true,
                    "selections": (v20/*: any*/)
                  },
                  (v15/*: any*/),
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
                          (v9/*: any*/),
                          (v10/*: any*/),
                          (v3/*: any*/)
                        ]
                      },
                      (v16/*: any*/),
                      (v17/*: any*/),
                      (v3/*: any*/)
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
                      (v6/*: any*/),
                      (v3/*: any*/)
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
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "email",
                "storageKey": null,
                "args": null,
                "concreteType": "Email",
                "plural": false,
                "selections": (v20/*: any*/)
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "phones_created",
            "storageKey": null,
            "args": null,
            "concreteType": "CreatePhonePayload",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "phone",
                "storageKey": null,
                "args": null,
                "concreteType": "Phone",
                "plural": false,
                "selections": (v20/*: any*/)
              }
            ]
          },
          (v18/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateContactMutation",
    "id": null,
    "text": "mutation CreateContactMutation(\n  $input: CompositeContactMutationInput!\n) {\n  composite_contact(input: $input) {\n    created {\n      errors {\n        field\n        messages\n      }\n      contact {\n        id\n        title\n        notes\n        contact_type {\n          name\n          value\n          id\n        }\n        first_name\n        last_name\n        pgp_fingerprint\n        emails {\n          id\n          name\n          type {\n            name\n            value\n            id\n          }\n        }\n        phones {\n          id\n          name\n          type {\n            name\n            value\n            id\n          }\n        }\n        roles {\n          relation_id\n          role_data {\n            id\n            name\n          }\n          end {\n            id\n            name\n            organization_id\n          }\n        }\n        comments {\n          user {\n            first_name\n            last_name\n            id\n          }\n          comment\n          submit_date\n          id\n        }\n        member_of_groups {\n          name\n          id\n        }\n      }\n    }\n    subcreated {\n      errors {\n        field\n        messages\n      }\n      email {\n        id\n        name\n        type {\n          name\n          value\n          id\n        }\n      }\n    }\n    phones_created {\n      errors {\n        field\n        messages\n      }\n      phone {\n        id\n        name\n        type {\n          name\n          value\n          id\n        }\n      }\n    }\n    rolerelations {\n      errors {\n        field\n        messages\n      }\n      rolerelation {\n        relation_id\n        type\n        start {\n          id\n          first_name\n          last_name\n        }\n        end {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '09e1073f50e4e33eaccb806b7151527d';

module.exports = node;
