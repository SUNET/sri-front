/**
 * @flow
 * @relayHash 34d9127888b432192a69d0e2dced82e0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteProviderInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteProviderMutationVariables = {|
  input: DeleteProviderInput
|};
export type DeleteProviderMutationResponse = {|
  +delete_provider: ?{|
    +success: boolean
  |}
|};
export type DeleteProviderMutation = {|
  variables: DeleteProviderMutationVariables,
  response: DeleteProviderMutationResponse,
|};
*/


/*
mutation DeleteProviderMutation(
  $input: DeleteProviderInput!
) {
  delete_provider(input: $input) {
    success
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteProviderInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "delete_provider",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteProviderPayload",
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
    "name": "DeleteProviderMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteProviderMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteProviderMutation",
    "id": null,
    "text": "mutation DeleteProviderMutation(\n  $input: DeleteProviderInput!\n) {\n  delete_provider(input: $input) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '53d1a934fb97086c3b84ab5c0b9fc794';
module.exports = node;
