/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteHostInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteHostMutationVariables = {|
  input: DeleteHostInput
|};
export type DeleteHostMutationResponse = {|
  +delete_host: ?{|
    +success: boolean
  |}
|};
export type DeleteHostMutation = {|
  variables: DeleteHostMutationVariables,
  response: DeleteHostMutationResponse,
|};
*/


/*
mutation DeleteHostMutation(
  $input: DeleteHostInput!
) {
  delete_host(input: $input) {
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
    "type": "DeleteHostInput!"
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
    "concreteType": "DeleteHostPayload",
    "kind": "LinkedField",
    "name": "delete_host",
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
    "name": "DeleteHostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteHostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteHostMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteHostMutation(\n  $input: DeleteHostInput!\n) {\n  delete_host(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b9223b2ce3f39adfc648bde3792bc5be';

module.exports = node;
