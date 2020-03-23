/**
 * @flow
 * @relayHash 07f9cdb285e93fa22ce547950c363c65
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteCableInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteCableMutationVariables = {|
  input: DeleteCableInput
|};
export type DeleteCableMutationResponse = {|
  +delete_cable: ?{|
    +success: boolean
  |}
|};
export type DeleteCableMutation = {|
  variables: DeleteCableMutationVariables,
  response: DeleteCableMutationResponse,
|};
*/


/*
mutation DeleteCableMutation(
  $input: DeleteCableInput!
) {
  delete_cable(input: $input) {
    success
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteCableInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "delete_cable",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteCablePayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "success",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteCableMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteCableMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteCableMutation",
    "id": null,
    "text": "mutation DeleteCableMutation(\n  $input: DeleteCableInput!\n) {\n  delete_cable(input: $input) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a09d6c082f618b83839290a5fc1769ee';

module.exports = node;
