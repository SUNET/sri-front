/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteOpticalNodeInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteOpticalNodeMutationVariables = {|
  input: DeleteOpticalNodeInput
|};
export type DeleteOpticalNodeMutationResponse = {|
  +delete_opticalNode: ?{|
    +success: boolean
  |}
|};
export type DeleteOpticalNodeMutation = {|
  variables: DeleteOpticalNodeMutationVariables,
  response: DeleteOpticalNodeMutationResponse,
|};
*/


/*
mutation DeleteOpticalNodeMutation(
  $input: DeleteOpticalNodeInput!
) {
  delete_opticalNode(input: $input) {
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
    "type": "DeleteOpticalNodeInput!"
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
    "concreteType": "DeleteOpticalNodePayload",
    "kind": "LinkedField",
    "name": "delete_opticalNode",
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
    "name": "DeleteOpticalNodeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteOpticalNodeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteOpticalNodeMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteOpticalNodeMutation(\n  $input: DeleteOpticalNodeInput!\n) {\n  delete_opticalNode(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '297c6336aeb0f30961337517851cf1f9';

module.exports = node;
