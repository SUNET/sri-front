/**
 * @flow
 * @relayHash dbebc549451e1beed195d47b0d800870
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
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
  handle_id: number,
  clientMutationId?: ?string,
|};
export type AddMemberGroupMutationVariables = {|
  input: UpdateContactInput
|};
export type AddMemberGroupMutationResponse = {|
  +update_contact: ?{|
    +contact: ?{|
      +handle_id: string
    |}
  |}
|};
export type AddMemberGroupMutation = {|
  variables: AddMemberGroupMutationVariables,
  response: AddMemberGroupMutationResponse,
|};
*/


/*
mutation AddMemberGroupMutation(
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
    "name": "AddMemberGroupMutation",
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
    "name": "AddMemberGroupMutation",
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
    "name": "AddMemberGroupMutation",
    "id": null,
    "text": "mutation AddMemberGroupMutation(\n  $input: UpdateContactInput!\n) {\n  update_contact(input: $input) {\n    contact {\n      handle_id\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e6a6839a0838f131bcae61515dce8ebb';
module.exports = node;
