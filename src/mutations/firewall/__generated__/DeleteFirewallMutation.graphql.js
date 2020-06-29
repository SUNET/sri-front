/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteFirewallInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteFirewallMutationVariables = {|
  input: DeleteFirewallInput
|};
export type DeleteFirewallMutationResponse = {|
  +delete_firewall: ?{|
    +success: boolean
  |}
|};
export type DeleteFirewallMutation = {|
  variables: DeleteFirewallMutationVariables,
  response: DeleteFirewallMutationResponse,
|};
*/


/*
mutation DeleteFirewallMutation(
  $input: DeleteFirewallInput!
) {
  delete_firewall(input: $input) {
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
    "type": "DeleteFirewallInput!"
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
    "concreteType": "DeleteFirewallPayload",
    "kind": "LinkedField",
    "name": "delete_firewall",
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
    "name": "DeleteFirewallMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteFirewallMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteFirewallMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteFirewallMutation(\n  $input: DeleteFirewallInput!\n) {\n  delete_firewall(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a445db392b43abbce1a0fbd702c6c4e2';

module.exports = node;
