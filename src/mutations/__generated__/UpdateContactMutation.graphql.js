/**
 * @flow
 * @relayHash dec8e08d8366df56aef8d6276b29a4e3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateNIContactMutationInput = {|
  first_name: string,
  last_name: string,
  contact_type: string,
  mobile?: ?string,
  phone?: ?string,
  salutation?: ?string,
  email?: ?string,
  other_email?: ?string,
  name?: ?string,
  title?: ?string,
  PGP_fingerprint?: ?string,
  relationship_works_for?: ?string,
  relationship_member_of?: ?string,
  role_name?: ?string,
  handle_id: number,
  clientMutationId?: ?string,
|};
export type UpdateContactMutationVariables = {|
  input: UpdateNIContactMutationInput
|};
export type UpdateContactMutationResponse = {|
  +update_contact: ?{|
    +contact: ?{|
      +handle_id: string
    |}
  |}
|};
export type UpdateContactMutation = {|
  variables: UpdateContactMutationVariables,
  response: UpdateContactMutationResponse,
|};
*/


/*
mutation UpdateContactMutation(
  $input: UpdateNIContactMutationInput!
) {
  update_contact(input: $input) {
    contact {
      handle_id
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
    "type": "UpdateNIContactMutationInput!",
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
};
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
        "name": "update_contact",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateNIContactMutationPayload",
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
              (v2/*: any*/)
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
        "name": "update_contact",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateNIContactMutationPayload",
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
    "name": "UpdateContactMutation",
    "id": null,
    "text": "mutation UpdateContactMutation(\n  $input: UpdateNIContactMutationInput!\n) {\n  update_contact(input: $input) {\n    contact {\n      handle_id\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ec3ad8a232dfbeec41c6ed6d0df07b68';
module.exports = node;
