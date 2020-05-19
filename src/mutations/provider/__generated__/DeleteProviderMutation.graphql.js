/**
 * @flow
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteProviderInput!"
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
    "concreteType": "DeleteProviderPayload",
    "kind": "LinkedField",
    "name": "delete_provider",
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
    "name": "DeleteProviderMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteProviderMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteProviderMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteProviderMutation(\n  $input: DeleteProviderInput!\n) {\n  delete_provider(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '53d1a934fb97086c3b84ab5c0b9fc794';

module.exports = node;
