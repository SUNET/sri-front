/**
 * @flow
 * @relayHash 35828d55004ccaf6219eb495b6b60c73
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
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
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "roles",
  "storageKey": null,
  "args": null,
  "concreteType": "RoleRelation",
  "plural": true,
  "selections": [
    (v6/*: any*/),
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
        (v6/*: any*/)
      ]
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateContactInlineMutation",
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "contact_type",
                "storageKey": null,
                "args": null,
                "concreteType": "Choice",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/)
                ]
              },
              (v8/*: any*/),
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
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateContactInlineMutation",
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "contact_type",
                "storageKey": null,
                "args": null,
                "concreteType": "Choice",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v3/*: any*/)
                ]
              },
              (v8/*: any*/),
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
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateContactInlineMutation",
    "id": null,
    "text": "mutation CreateContactInlineMutation(\n  $input: CreateContactInput!\n) {\n  create_contact(input: $input) {\n    errors {\n      field\n      messages\n    }\n    contact {\n      id\n      first_name\n      last_name\n      contact_type {\n        name\n        value\n        id\n      }\n      roles {\n        name\n        end {\n          id\n          name\n        }\n      }\n      member_of_groups {\n        name\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '58986ec98f483cdd5c712af3b303b4ff';
module.exports = node;
