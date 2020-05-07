/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateCustomerInput = {|
  name: string,
  url?: ?string,
  description?: ?string,
  clientMutationId?: ?string,
|};
export type CreateCustomerMutationVariables = {|
  input: CreateCustomerInput
|};
export type CreateCustomerMutationResponse = {|
  +create_customer: ?{|
    +errors: ?$ReadOnlyArray<?{|
      +field: string,
      +messages: $ReadOnlyArray<string>,
    |}>,
    +customer: ?{|
      +id: string,
      +name: string,
      +description: ?string,
      +url: ?string,
    |},
  |}
|};
export type CreateCustomerMutation = {|
  variables: CreateCustomerMutationVariables,
  response: CreateCustomerMutationResponse,
|};
*/


/*
mutation CreateCustomerMutation(
  $input: CreateCustomerInput!
) {
  create_customer(input: $input) {
    errors {
      field
      messages
    }
    customer {
      id
      name
      description
      url
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
    "type": "CreateCustomerInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateCustomerPayload",
    "kind": "LinkedField",
    "name": "create_customer",
    "plural": false,
    "selections": [
      {
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
      {
        "alias": null,
        "args": null,
        "concreteType": "Customer",
        "kind": "LinkedField",
        "name": "customer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "url",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateCustomerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateCustomerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateCustomerMutation",
    "operationKind": "mutation",
    "text": "mutation CreateCustomerMutation(\n  $input: CreateCustomerInput!\n) {\n  create_customer(input: $input) {\n    errors {\n      field\n      messages\n    }\n    customer {\n      id\n      name\n      description\n      url\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c4838cbce4e29560a499da76007b28e1';

module.exports = node;
