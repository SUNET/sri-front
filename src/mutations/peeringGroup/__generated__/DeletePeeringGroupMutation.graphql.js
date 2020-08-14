/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeletePeeringGroupInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeletePeeringGroupMutationVariables = {|
  input: DeletePeeringGroupInput
|};
export type DeletePeeringGroupMutationResponse = {|
  +delete_peeringGroup: ?{|
    +success: boolean
  |}
|};
export type DeletePeeringGroupMutation = {|
  variables: DeletePeeringGroupMutationVariables,
  response: DeletePeeringGroupMutationResponse,
|};
*/


/*
mutation DeletePeeringGroupMutation(
  $input: DeletePeeringGroupInput!
) {
  delete_peeringGroup(input: $input) {
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
    "type": "DeletePeeringGroupInput!"
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
    "concreteType": "DeletePeeringGroupPayload",
    "kind": "LinkedField",
    "name": "delete_peeringGroup",
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
    "name": "DeletePeeringGroupMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeletePeeringGroupMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeletePeeringGroupMutation",
    "operationKind": "mutation",
    "text": "mutation DeletePeeringGroupMutation(\n  $input: DeletePeeringGroupInput!\n) {\n  delete_peeringGroup(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2ac07aa9d52a37375190fa07058c7353';

module.exports = node;
