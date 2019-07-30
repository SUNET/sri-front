/**
 * @flow
 * @relayHash 422e867928c85f69cccc85eef7ed5079
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteNIContactMutationInput = {|
  handle_id: number,
  clientMutationId?: ?string,
|};
export type DeleteContactMutationVariables = {|
  input: DeleteNIContactMutationInput
|};
export type DeleteContactMutationResponse = {|
  +delete_contact: ?{|
    +success: boolean
  |}
|};
export type DeleteContactMutation = {|
  variables: DeleteContactMutationVariables,
  response: DeleteContactMutationResponse,
|};
*/


/*
mutation DeleteContactMutation(
  $input: DeleteNIContactMutationInput!
) {
  delete_contact(input: $input) {
    success
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteNIContactMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "delete_contact",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteNIContactMutationPayload",
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
    "name": "DeleteContactMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteContactMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteContactMutation",
    "id": null,
    "text": "mutation DeleteContactMutation(\n  $input: DeleteNIContactMutationInput!\n) {\n  delete_contact(input: $input) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd58c85d87f5679bfd0f27baadb1f0c0d';
module.exports = node;
