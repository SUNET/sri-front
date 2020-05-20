/**
 * @flow
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteOrganizationInput!"
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
    "concreteType": "DeleteOrganizationPayload",
    "kind": "LinkedField",
    "name": "delete_organization",
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
    "name": "DeleteOrganizationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteOrganizationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteOrganizationMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteOrganizationMutation(\n  $input: DeleteOrganizationInput!\n) {\n  delete_organization(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6d15e89858f6ec4315f005c8a438ead3';

module.exports = node;
