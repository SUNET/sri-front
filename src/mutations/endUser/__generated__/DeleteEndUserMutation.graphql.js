/**
 * @flow
 * @relayHash 02f22d57bb3cbc7976304ae9904e375a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteEndUserInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteEndUserMutationVariables = {|
  input: DeleteEndUserInput
|};
export type DeleteEndUserMutationResponse = {|
  +delete_endUser: ?{|
    +success: boolean
  |}
|};
export type DeleteEndUserMutation = {|
  variables: DeleteEndUserMutationVariables,
  response: DeleteEndUserMutationResponse,
|};
*/


/*
mutation DeleteEndUserMutation(
  $input: DeleteEndUserInput!
) {
  delete_endUser(input: $input) {
    success
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteEndUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "delete_endUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteEndUserPayload",
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
    "name": "DeleteEndUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteEndUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteEndUserMutation",
    "id": null,
    "text": "mutation DeleteEndUserMutation(\n  $input: DeleteEndUserInput!\n) {\n  delete_endUser(input: $input) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '71e20455b8495cd23f4908a86908d587';
module.exports = node;
