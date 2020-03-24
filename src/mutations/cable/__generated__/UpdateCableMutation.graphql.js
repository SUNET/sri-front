/**
 * @flow
 * @relayHash ccf0122ade96d62b9d24d0b6494ee100
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateCableInput = {|
  name: string,
  cable_type: any,
  description?: ?string,
  relationship_end_a?: ?number,
  relationship_end_b?: ?number,
  id: string,
  clientMutationId?: ?string,
|};
export type UpdateCableMutationVariables = {|
  input: UpdateCableInput
|};
export type UpdateCableMutationResponse = {|
  +update_cable: ?{|
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
export type UpdateCableMutation = {|
  variables: UpdateCableMutationVariables,
  response: UpdateCableMutationResponse,
|};
*/


/*
mutation UpdateCableMutation(
  $input: UpdateCableInput!
) {
  update_cable(input: $input) {
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
    "type": "UpdateCableInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "update_cable",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateCablePayload",
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
    "name": "UpdateCableMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateCableMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateCableMutation",
    "id": null,
    "text": "mutation UpdateCableMutation(\n  $input: UpdateCableInput!\n) {\n  update_cable(input: $input) {\n    errors {\n      field\n      messages\n    }\n    cable {\n      id\n      name\n      description\n      cable_type\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6657624cd402e26bb8faed1f9907c273';

module.exports = node;
