/**
 * @flow
 * @relayHash d664537c609443e238777d25790bfda8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateContactInput = {|
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
  relationship_works_for?: ?any,
  relationship_member_of?: ?any,
  role?: ?any,
  handle_id: number,
  clientMutationId?: ?string,
|};
export type UpdateContactMutationVariables = {|
  input: UpdateContactInput
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
  $input: UpdateContactInput!
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
    "type": "UpdateContactInput!",
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
        "concreteType": "UpdateContactPayload",
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
        "concreteType": "UpdateContactPayload",
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
    "text": "mutation UpdateContactMutation(\n  $input: UpdateContactInput!\n) {\n  update_contact(input: $input) {\n    contact {\n      handle_id\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a267f343aa6ab9205b01a1c3ddb8862c';
module.exports = node;
