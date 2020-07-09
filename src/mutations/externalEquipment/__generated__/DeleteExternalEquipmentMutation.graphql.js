/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteExternalEquipmentInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteExternalEquipmentMutationVariables = {|
  input: DeleteExternalEquipmentInput
|};
export type DeleteExternalEquipmentMutationResponse = {|
  +delete_externalEquipment: ?{|
    +success: boolean
  |}
|};
export type DeleteExternalEquipmentMutation = {|
  variables: DeleteExternalEquipmentMutationVariables,
  response: DeleteExternalEquipmentMutationResponse,
|};
*/


/*
mutation DeleteExternalEquipmentMutation(
  $input: DeleteExternalEquipmentInput!
) {
  delete_externalEquipment(input: $input) {
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
    "type": "DeleteExternalEquipmentInput!"
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
    "concreteType": "DeleteExternalEquipmentPayload",
    "kind": "LinkedField",
    "name": "delete_externalEquipment",
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
    "name": "DeleteExternalEquipmentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteExternalEquipmentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteExternalEquipmentMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteExternalEquipmentMutation(\n  $input: DeleteExternalEquipmentInput!\n) {\n  delete_externalEquipment(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd563c2dfe2f4af31cd61af48fb3a19b7';

module.exports = node;
