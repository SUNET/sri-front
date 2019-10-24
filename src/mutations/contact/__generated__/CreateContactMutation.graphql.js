/**
 * @flow
 * @relayHash 59be22013d6909a38345d22d993a5750
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
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
  clientMutationId?: ?string,
|};
export type CreateContactMutationVariables = {|
  input: CreateContactInput
|};
export type CreateContactMutationResponse = {|
  +create_contact: ?{|
    +errors: ?$ReadOnlyArray<?{|
      +field: string,
      +messages: $ReadOnlyArray<string>,
    |}>,
    +contact: ?{|
      +handle_id: string,
      +title: ?string,
      +first_name: string,
      +last_name: string,
      +notes: ?string,
      +contact_type: ?string,
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
          +customer_id: ?string,
        |},
      |}>,
      +member_of_groups: ?$ReadOnlyArray<?{|
        +name: string
      |}>,
    |},
  |}
|};
export type CreateContactMutation = {|
  variables: CreateContactMutationVariables,
  response: CreateContactMutationResponse,
|};
*/


/*
mutation CreateContactMutation(
  $input: CreateContactInput!
) {
  create_contact(input: $input) {
    errors {
      field
      messages
    }
    contact {
      handle_id
      title
      first_name
      last_name
      notes
      contact_type
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
          customer_id
          id
        }
      }
      member_of_groups {
        name
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
    "name": "input",
    "type": "CreateContactInput!",
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
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "notes",
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
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "role_data",
  "storageKey": null,
  "args": null,
  "concreteType": "Role",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v10/*: any*/)
  ]
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "customer_id",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v17 = [
  (v3/*: any*/),
  (v10/*: any*/),
  (v11/*: any*/),
  (v16/*: any*/)
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
        "name": "create_contact",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                      (v10/*: any*/),
                      (v15/*: any*/)
                    ]
                  }
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
        "name": "create_contact",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                "selections": (v17/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "phones",
                "storageKey": null,
                "args": null,
                "concreteType": "Phone",
                "plural": true,
                "selections": (v17/*: any*/)
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
                      (v10/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/)
                    ]
                  }
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
                  (v16/*: any*/)
                ]
              },
              (v16/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateContactMutation",
    "id": null,
    "text": "mutation CreateContactMutation(\n  $input: CreateContactInput!\n) {\n  create_contact(input: $input) {\n    errors {\n      field\n      messages\n    }\n    contact {\n      handle_id\n      title\n      first_name\n      last_name\n      notes\n      contact_type\n      pgp_fingerprint\n      emails {\n        handle_id\n        name\n        type\n        id\n      }\n      phones {\n        handle_id\n        name\n        type\n        id\n      }\n      roles {\n        relation_id\n        role_data {\n          handle_id\n          name\n        }\n        end {\n          handle_id\n          name\n          customer_id\n          id\n        }\n      }\n      member_of_groups {\n        name\n        id\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e20ff1e9eef38bd1df4f29b0c6cdd5b4';
module.exports = node;
