/**
 * @flow
 * @relayHash f0222029f80066ac4672b868d07dab6d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateCableInput = {|
  name: string,
  cable_type: any,
  description?: ?string,
  clientMutationId?: ?string,
|};
export type CreateCableMutationVariables = {|
  input: CreateCableInput
|};
export type CreateCableMutationResponse = {|
  +create_cable: ?{|
    +errors: ?$ReadOnlyArray<?{|
      +field: string,
      +messages: $ReadOnlyArray<string>,
    |}>,
    +cable: ?{|
      +id: string,
      +name: string,
      +description: ?string,
      +cable_type: ?any,
    |},
  |}
|};
export type CreateCableMutation = {|
  variables: CreateCableMutationVariables,
  response: CreateCableMutationResponse,
|};
*/


/*
mutation CreateCableMutation(
  $input: CreateCableInput!
) {
  create_cable(input: $input) {
    errors {
      field
      messages
    }
    cable {
      id
      name
      description
      cable_type
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateCableInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "create_cable",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateCablePayload",
    "plural": false,
    "selections": [
      {
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
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "cable",
        "storageKey": null,
        "args": null,
        "concreteType": "Cable",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "cable_type",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateCableMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateCableMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateCableMutation",
    "id": null,
    "text": "mutation CreateCableMutation(\n  $input: CreateCableInput!\n) {\n  create_cable(input: $input) {\n    errors {\n      field\n      messages\n    }\n    cable {\n      id\n      name\n      description\n      cable_type\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3ae88f36b442bf128bdfb467b141f41f';

module.exports = node;
