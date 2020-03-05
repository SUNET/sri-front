/**
 * @flow
 * @relayHash 61e2d54fc641551a0abae29823df94a4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteContactInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteContactMutationVariables = {|
  input: DeleteContactInput
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
  $input: DeleteContactInput!
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
    "type": "DeleteContactInput!",
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
    "concreteType": "DeleteContactPayload",
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
    "text": "mutation DeleteContactMutation(\n  $input: DeleteContactInput!\n) {\n  delete_contact(input: $input) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2ca7cc50fce98fbe920155db60674743';
module.exports = node;
