/**
 * @flow
 * @relayHash 43a4560dea2271b979fe7cb2828b9e85
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteAddressInput = {|
  handle_id: number,
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
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteAddressInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "delete_address",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteAddressPayload",
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
    "name": "DeleteAddressMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteAddressMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteAddressMutation",
    "id": null,
    "text": "mutation DeleteAddressMutation(\n  $input: DeleteAddressInput!\n) {\n  delete_address(input: $input) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8f513393bde2cee64f5fba40b4327177';
module.exports = node;
