/**
 * @flow
 * @relayHash 8c88bdfe3638a3db68623e5adc312182
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeletePhoneInput = {|
  handle_id: number,
  clientMutationId?: ?string,
|};
export type DeletePhoneMutationVariables = {|
  input: DeletePhoneInput
|};
export type DeletePhoneMutationResponse = {|
  +delete_phone: ?{|
    +success: boolean
  |}
|};
export type DeletePhoneMutation = {|
  variables: DeletePhoneMutationVariables,
  response: DeletePhoneMutationResponse,
|};
*/


/*
mutation DeletePhoneMutation(
  $input: DeletePhoneInput!
) {
  delete_phone(input: $input) {
    success
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeletePhoneInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "delete_phone",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeletePhonePayload",
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
    "name": "DeletePhoneMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeletePhoneMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeletePhoneMutation",
    "id": null,
    "text": "mutation DeletePhoneMutation(\n  $input: DeletePhoneInput!\n) {\n  delete_phone(input: $input) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7aff5289e297674c293b730cd0e2cd26';
module.exports = node;
