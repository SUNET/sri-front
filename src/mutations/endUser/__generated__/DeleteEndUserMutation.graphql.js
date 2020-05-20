/**
 * @flow
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteEndUserInput!"
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
    "concreteType": "DeleteEndUserPayload",
    "kind": "LinkedField",
    "name": "delete_endUser",
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
    "name": "DeleteEndUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteEndUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteEndUserMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteEndUserMutation(\n  $input: DeleteEndUserInput!\n) {\n  delete_endUser(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '71e20455b8495cd23f4908a86908d587';

module.exports = node;
