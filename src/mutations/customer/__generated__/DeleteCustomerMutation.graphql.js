/**
 * @flow
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteCustomerInput!"
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
    "concreteType": "DeleteCustomerPayload",
    "kind": "LinkedField",
    "name": "delete_customer",
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
    "name": "DeleteCustomerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteCustomerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteCustomerMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteCustomerMutation(\n  $input: DeleteCustomerInput!\n) {\n  delete_customer(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8129cd339d7bc73be73e634f2bfdc187';

module.exports = node;
