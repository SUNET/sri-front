/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeletePortInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeletePortMutationVariables = {|
  input: DeletePortInput
|};
export type DeletePortMutationResponse = {|
  +delete_port: ?{|
    +success: boolean
  |}
|};
export type DeletePortMutation = {|
  variables: DeletePortMutationVariables,
  response: DeletePortMutationResponse,
|};
*/


/*
mutation DeletePortMutation(
  $input: DeletePortInput!
) {
  delete_port(input: $input) {
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
    "type": "DeletePortInput!"
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
    "concreteType": "DeletePortPayload",
    "kind": "LinkedField",
    "name": "delete_port",
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
    "name": "DeletePortMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeletePortMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeletePortMutation",
    "operationKind": "mutation",
    "text": "mutation DeletePortMutation(\n  $input: DeletePortInput!\n) {\n  delete_port(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7eadb67912f784b8df08037b48814409';

module.exports = node;
