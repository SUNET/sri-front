/**
 * @flow
 * @relayHash 44c4a3ab769fab234dc952b74c86b998
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
      +id: string,
      +name: string,
      +type: ?{|
        +name: string,
        +value: string,
      |},
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
      id
      name
      type {
        name
        value
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
  "name": "id",
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
  "name": "value",
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "type",
                "storageKey": null,
                "args": null,
                "concreteType": "Choice",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/)
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "type",
                "storageKey": null,
                "args": null,
                "concreteType": "Choice",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
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
    "name": "CreatePhoneMutation",
    "id": null,
    "text": "mutation CreatePhoneMutation(\n  $input: CreatePhoneInput!\n) {\n  create_phone(input: $input) {\n    errors {\n      field\n      messages\n    }\n    phone {\n      id\n      name\n      type {\n        name\n        value\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8faec452ae227519aa65636db741a865';
module.exports = node;
