/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeletePeeringPartnerInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeletePeeringPartnerMutationVariables = {|
  input: DeletePeeringPartnerInput
|};
export type DeletePeeringPartnerMutationResponse = {|
  +delete_peeringPartner: ?{|
    +success: boolean
  |}
|};
export type DeletePeeringPartnerMutation = {|
  variables: DeletePeeringPartnerMutationVariables,
  response: DeletePeeringPartnerMutationResponse,
|};
*/


/*
mutation DeletePeeringPartnerMutation(
  $input: DeletePeeringPartnerInput!
) {
  delete_peeringPartner(input: $input) {
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
    "type": "DeletePeeringPartnerInput!"
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
    "concreteType": "DeletePeeringPartnerPayload",
    "kind": "LinkedField",
    "name": "delete_peeringPartner",
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
    "name": "DeletePeeringPartnerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeletePeeringPartnerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeletePeeringPartnerMutation",
    "operationKind": "mutation",
    "text": "mutation DeletePeeringPartnerMutation(\n  $input: DeletePeeringPartnerInput!\n) {\n  delete_peeringPartner(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3b52df4bbc285e25d65bb1ae71856cdc';

module.exports = node;
