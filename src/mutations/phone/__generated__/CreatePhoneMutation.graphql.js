/**
 * @flow
 * @relayHash b09a909dfd61a445ed77d0e67c8a13d0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePhoneInput = {|
  contact?: ?any,
  name: string,
  type: any,
  clientMutationId?: ?string,
|};
export type CreatePhoneMutationVariables = {|
  input: CreatePhoneInput
|};
export type CreatePhoneMutationResponse = {|
  +create_phone: ?{|
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
export type CreatePhoneMutation = {|
  variables: CreatePhoneMutationVariables,
  response: CreatePhoneMutationResponse,
|};
*/


/*
mutation CreatePhoneMutation(
  $input: CreatePhoneInput!
) {
  create_phone(input: $input) {
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
    "type": "CreatePhoneInput!",
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
    "name": "CreatePhoneMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "create_phone",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreatePhonePayload",
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
    "name": "CreatePhoneMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "create_phone",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreatePhonePayload",
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
    "name": "CreatePhoneMutation",
    "id": null,
    "text": "mutation CreatePhoneMutation(\n  $input: CreatePhoneInput!\n) {\n  create_phone(input: $input) {\n    errors {\n      field\n      messages\n    }\n    phone {\n      handle_id\n      name\n      type\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4d43ca6fe19e51a27707810e58a9e109';
module.exports = node;
