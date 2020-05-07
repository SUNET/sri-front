/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteSiteOwnerInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteSiteOwnerMutationVariables = {|
  input: DeleteSiteOwnerInput
|};
export type DeleteSiteOwnerMutationResponse = {|
  +delete_siteOwner: ?{|
    +success: boolean
  |}
|};
export type DeleteSiteOwnerMutation = {|
  variables: DeleteSiteOwnerMutationVariables,
  response: DeleteSiteOwnerMutationResponse,
|};
*/


/*
mutation DeleteSiteOwnerMutation(
  $input: DeleteSiteOwnerInput!
) {
  delete_siteOwner(input: $input) {
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
    "type": "DeleteSiteOwnerInput!"
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
    "concreteType": "DeleteSiteOwnerPayload",
    "kind": "LinkedField",
    "name": "delete_siteOwner",
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
    "name": "DeleteSiteOwnerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteSiteOwnerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteSiteOwnerMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteSiteOwnerMutation(\n  $input: DeleteSiteOwnerInput!\n) {\n  delete_siteOwner(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5b6d1731e339c961e9e47c5b6cda2395';

module.exports = node;
