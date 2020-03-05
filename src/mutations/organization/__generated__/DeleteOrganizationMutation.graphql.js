/**
 * @flow
 * @relayHash 9341ff7627a5e24576ff2c7b206ca1c0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteOrganizationInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteOrganizationMutationVariables = {|
  input: DeleteOrganizationInput
|};
export type DeleteOrganizationMutationResponse = {|
  +delete_organization: ?{|
    +success: boolean
  |}
|};
export type DeleteOrganizationMutation = {|
  variables: DeleteOrganizationMutationVariables,
  response: DeleteOrganizationMutationResponse,
|};
*/


/*
mutation DeleteOrganizationMutation(
  $input: DeleteOrganizationInput!
) {
  delete_organization(input: $input) {
    success
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteOrganizationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "delete_organization",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteOrganizationPayload",
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
    "name": "DeleteOrganizationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteOrganizationMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteOrganizationMutation",
    "id": null,
    "text": "mutation DeleteOrganizationMutation(\n  $input: DeleteOrganizationInput!\n) {\n  delete_organization(input: $input) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6d15e89858f6ec4315f005c8a438ead3';
module.exports = node;
