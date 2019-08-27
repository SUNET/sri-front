/**
 * @flow
 * @relayHash 48915dc25b75e60b97faa293590b33cb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateContactInput = {|
  first_name: string,
  last_name: string,
  contact_type: any,
  mobile?: ?string,
  phone?: ?string,
  email?: ?string,
  other_email?: ?string,
  name?: ?string,
  title?: ?string,
  PGP_fingerprint?: ?string,
  clientMutationId?: ?string,
|};
export type CreateContactMutationVariables = {|
  input: CreateContactInput
|};
export type CreateContactMutationResponse = {|
  +create_contact: ?{|
    +contact: ?{|
      +handle_id: string,
      +first_name: string,
      +last_name: string,
      +email: ?string,
      +phone: ?string,
      +contact_type: ?string,
    |}
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
    contact {
      handle_id
      first_name
      last_name
      email
      phone
      contact_type
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
  "kind": "ScalarField",
  "alias": null,
  "name": "handle_id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "phone",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "contact_type",
  "args": null,
  "storageKey": null
};
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "contact",
            "storageKey": null,
            "args": null,
            "concreteType": "Contact",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/)
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "contact",
            "storageKey": null,
            "args": null,
            "concreteType": "Contact",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
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
    "text": "mutation CreateContactMutation(\n  $input: CreateContactInput!\n) {\n  create_contact(input: $input) {\n    contact {\n      handle_id\n      first_name\n      last_name\n      email\n      phone\n      contact_type\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a900277ab1ab98e59692c75ba00d1b07';
module.exports = node;
