/**
 * @flow
 * @relayHash 9789ac7c773f5d5636eeb68c0dcedb97
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
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteSiteOwnerInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "delete_siteOwner",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteSiteOwnerPayload",
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
    "name": "DeleteSiteOwnerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteSiteOwnerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteSiteOwnerMutation",
    "id": null,
    "text": "mutation DeleteSiteOwnerMutation(\n  $input: DeleteSiteOwnerInput!\n) {\n  delete_siteOwner(input: $input) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5b6d1731e339c961e9e47c5b6cda2395';
module.exports = node;
