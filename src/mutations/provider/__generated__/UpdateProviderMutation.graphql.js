/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateProviderInput = {|
  name: string,
  url?: ?string,
  description?: ?string,
  id: string,
  clientMutationId?: ?string,
|};
export type UpdateProviderMutationVariables = {|
  input: UpdateProviderInput
|};
export type UpdateProviderMutationResponse = {|
  +update_provider: ?{|
    +errors: ?$ReadOnlyArray<?{|
      +field: string,
      +messages: $ReadOnlyArray<string>,
    |}>,
    +provider: ?{|
      +id: string,
      +name: string,
      +description: ?string,
      +url: ?string,
    |},
  |}
|};
export type UpdateProviderMutation = {|
  variables: UpdateProviderMutationVariables,
  response: UpdateProviderMutationResponse,
|};
*/


/*
mutation UpdateProviderMutation(
  $input: UpdateProviderInput!
) {
  update_provider(input: $input) {
    errors {
      field
      messages
    }
    provider {
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
    "type": "UpdateProviderInput!"
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
    "concreteType": "UpdateProviderPayload",
    "kind": "LinkedField",
    "name": "update_provider",
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
        "concreteType": "Provider",
        "kind": "LinkedField",
        "name": "provider",
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
    "name": "UpdateProviderMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateProviderMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UpdateProviderMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateProviderMutation(\n  $input: UpdateProviderInput!\n) {\n  update_provider(input: $input) {\n    errors {\n      field\n      messages\n    }\n    provider {\n      id\n      name\n      description\n      url\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b686a2c413f9e96786369f80dd68664f';

module.exports = node;
