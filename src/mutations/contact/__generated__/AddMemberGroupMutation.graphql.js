/**
 * @flow
 * @relayHash 88d8bc7379867fa1803a2063716ec711
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
export type AddMemberGroupMutationVariables = {|
  input: UpdateContactInput
|};
export type AddMemberGroupMutationResponse = {|
  +update_contact: ?{|
    +contact: ?{|
      +id: string,
      +first_name: string,
      +last_name: string,
      +contact_type: ?{|
        +name: string,
        +value: string,
      |},
      +member_of_groups: ?$ReadOnlyArray<?{|
        +id: string,
        +name: string,
      |}>,
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
      id
      first_name
      last_name
      contact_type {
        name
        value
        id
      }
      member_of_groups {
        id
        name
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
  "name": "id",
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "member_of_groups",
  "storageKey": null,
  "args": null,
  "concreteType": "Group",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    (v5/*: any*/)
  ]
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "contact_type",
                "storageKey": null,
                "args": null,
                "concreteType": "Choice",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/)
                ]
              },
              (v7/*: any*/)
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
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "contact_type",
                "storageKey": null,
                "args": null,
                "concreteType": "Choice",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v2/*: any*/)
                ]
              },
              (v7/*: any*/)
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
    "text": "mutation AddMemberGroupMutation(\n  $input: UpdateContactInput!\n) {\n  update_contact(input: $input) {\n    contact {\n      id\n      first_name\n      last_name\n      contact_type {\n        name\n        value\n        id\n      }\n      member_of_groups {\n        id\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '696e56d42558b9a552fce489f419469a';
module.exports = node;
