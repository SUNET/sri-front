/**
 * @flow
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteCableInput!"
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
    "concreteType": "DeleteCablePayload",
    "kind": "LinkedField",
    "name": "delete_cable",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
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
    "name": "DeleteCableMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteCableMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteCableMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteCableMutation(\n  $input: DeleteCableInput!\n) {\n  delete_cable(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a09d6c082f618b83839290a5fc1769ee';

module.exports = node;
