/**
 * @flow
 * @relayHash 3b4aec14fcc9d394fa7e19bfca00029f
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
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeletePortInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "delete_port",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeletePortPayload",
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
    "name": "DeletePortMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeletePortMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeletePortMutation",
    "id": null,
    "text": "mutation DeletePortMutation(\n  $input: DeletePortInput!\n) {\n  delete_port(input: $input) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7eadb67912f784b8df08037b48814409';

module.exports = node;
