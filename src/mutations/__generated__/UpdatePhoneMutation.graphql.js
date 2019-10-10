/**
 * @flow
 * @relayHash 7f0cf1406a86be52b36a3d7c8594d9c0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdatePhoneInput = {|
  contact?: ?any,
  name: string,
  type: any,
  handle_id: number,
  clientMutationId?: ?string,
|};
export type UpdatePhoneMutationVariables = {|
  input: UpdatePhoneInput
|};
export type UpdatePhoneMutationResponse = {|
  +update_phone: ?{|
    +errors: ?$ReadOnlyArray<?{|
      +field: string,
      +messages: $ReadOnlyArray<string>,
    |}>,
    +phone: ?{|
      +handle_id: string,
      +name: string,
      +type: any,
    |},
  |}
|};
export type UpdatePhoneMutation = {|
  variables: UpdatePhoneMutationVariables,
  response: UpdatePhoneMutationResponse,
|};
*/


/*
mutation UpdatePhoneMutation(
  $input: UpdatePhoneInput!
) {
  update_phone(input: $input) {
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
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdatePhoneInput!",
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdatePhoneMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "update_phone",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdatePhonePayload",
        "plural": false,
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
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdatePhoneMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "update_phone",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdatePhonePayload",
        "plural": false,
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
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
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
    "name": "UpdatePhoneMutation",
    "id": null,
    "text": "mutation UpdatePhoneMutation(\n  $input: UpdatePhoneInput!\n) {\n  update_phone(input: $input) {\n    errors {\n      field\n      messages\n    }\n    phone {\n      handle_id\n      name\n      type\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd3a25657af973029992a6e1f440fe35f';
module.exports = node;
