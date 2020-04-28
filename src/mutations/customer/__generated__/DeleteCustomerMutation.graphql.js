/**
 * @flow
 * @relayHash bc8f0d806589b4e61a903c5e094aeaa7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteCustomerInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteCustomerMutationVariables = {|
  input: DeleteCustomerInput
|};
export type DeleteCustomerMutationResponse = {|
  +delete_customer: ?{|
    +success: boolean
  |}
|};
export type DeleteCustomerMutation = {|
  variables: DeleteCustomerMutationVariables,
  response: DeleteCustomerMutationResponse,
|};
*/


/*
mutation DeleteCustomerMutation(
  $input: DeleteCustomerInput!
) {
  delete_customer(input: $input) {
    success
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteCustomerInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "delete_customer",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteCustomerPayload",
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
    "name": "DeleteCustomerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteCustomerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteCustomerMutation",
    "id": null,
    "text": "mutation DeleteCustomerMutation(\n  $input: DeleteCustomerInput!\n) {\n  delete_customer(input: $input) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8129cd339d7bc73be73e634f2bfdc187';

module.exports = node;
