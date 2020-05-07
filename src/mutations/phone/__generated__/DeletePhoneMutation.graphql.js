/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeletePhoneInput = {|
  id: string,
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeletePhoneInput!"
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
    "concreteType": "DeletePhonePayload",
    "kind": "LinkedField",
    "name": "delete_phone",
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
    "name": "DeletePhoneMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeletePhoneMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeletePhoneMutation",
    "operationKind": "mutation",
    "text": "mutation DeletePhoneMutation(\n  $input: DeletePhoneInput!\n) {\n  delete_phone(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7aff5289e297674c293b730cd0e2cd26';

module.exports = node;
