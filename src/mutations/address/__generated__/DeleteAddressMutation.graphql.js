/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteAddressInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteAddressMutationVariables = {|
  input: DeleteAddressInput
|};
export type DeleteAddressMutationResponse = {|
  +delete_address: ?{|
    +success: boolean
  |}
|};
export type DeleteAddressMutation = {|
  variables: DeleteAddressMutationVariables,
  response: DeleteAddressMutationResponse,
|};
*/


/*
mutation DeleteAddressMutation(
  $input: DeleteAddressInput!
) {
  delete_address(input: $input) {
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
    "type": "DeleteAddressInput!"
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
    "concreteType": "DeleteAddressPayload",
    "kind": "LinkedField",
    "name": "delete_address",
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
    "name": "DeleteAddressMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteAddressMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteAddressMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteAddressMutation(\n  $input: DeleteAddressInput!\n) {\n  delete_address(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8f513393bde2cee64f5fba40b4327177';

module.exports = node;
