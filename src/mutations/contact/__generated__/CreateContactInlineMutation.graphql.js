/**
 * @flow
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
  email_id?: ?string,
  email?: ?string,
  email_type?: ?any,
  phone_id?: ?string,
  phone?: ?string,
  phone_type?: ?any,
  role_id?: ?string,
  clientMutationId?: ?string,
|};
export type CreateContactInlineMutationVariables = {|
  input: CreateContactInput
|};
export type CreateContactInlineMutationResponse = {|
  +create_contact: ?{|
    +errors: ?$ReadOnlyArray<?{|
      +field: string,
      +messages: $ReadOnlyArray<string>,
    |}>,
    +contact: ?{|
      +id: string,
      +first_name: string,
      +last_name: string,
      +contact_type: ?{|
        +name: string,
        +value: string,
      |},
      +roles: ?$ReadOnlyArray<?{|
        +name: ?string,
        +end: ?{|
          +id: string,
          +name: string,
        |},
      |}>,
      +member_of_groups: ?$ReadOnlyArray<?{|
        +name: string
      |}>,
    |},
  |}
|};
export type CreateContactInlineMutation = {|
  variables: CreateContactInlineMutationVariables,
  response: CreateContactInlineMutationResponse,
|};
*/


/*
mutation CreateContactInlineMutation(
  $input: CreateContactInput!
) {
  create_contact(input: $input) {
    errors {
      field
      messages
    }
    contact {
      id
      first_name
      last_name
      contact_type {
        name
        value
        id
      }
      roles {
        name
        end {
          id
          name
        }
      }
      member_of_groups {
        name
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateContactInput!"
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
  "alias": null,
  "args": null,
  "concreteType": "ErrorType",
  "kind": "LinkedField",
  "name": "errors",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "field",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "messages",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "RoleRelation",
  "kind": "LinkedField",
  "name": "roles",
  "plural": true,
  "selections": [
    (v6/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Organization",
      "kind": "LinkedField",
      "name": "end",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        (v6/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateContactInlineMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateContactPayload",
        "kind": "LinkedField",
        "name": "create_contact",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Contact",
            "kind": "LinkedField",
            "name": "contact",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "contact_type",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Group",
                "kind": "LinkedField",
                "name": "member_of_groups",
                "plural": true,
                "selections": [
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateContactInlineMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateContactPayload",
        "kind": "LinkedField",
        "name": "create_contact",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Contact",
            "kind": "LinkedField",
            "name": "contact",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "contact_type",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Group",
                "kind": "LinkedField",
                "name": "member_of_groups",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateContactInlineMutation",
    "operationKind": "mutation",
    "text": "mutation CreateContactInlineMutation(\n  $input: CreateContactInput!\n) {\n  create_contact(input: $input) {\n    errors {\n      field\n      messages\n    }\n    contact {\n      id\n      first_name\n      last_name\n      contact_type {\n        name\n        value\n        id\n      }\n      roles {\n        name\n        end {\n          id\n          name\n        }\n      }\n      member_of_groups {\n        name\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '58986ec98f483cdd5c712af3b303b4ff';

module.exports = node;
