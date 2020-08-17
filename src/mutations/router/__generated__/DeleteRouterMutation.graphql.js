/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteRouterInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteRouterMutationVariables = {|
  input: DeleteRouterInput
|};
export type DeleteRouterMutationResponse = {|
  +delete_router: ?{|
    +success: boolean
  |}
|};
export type DeleteRouterMutation = {|
  variables: DeleteRouterMutationVariables,
  response: DeleteRouterMutationResponse,
|};
*/


/*
mutation DeleteRouterMutation(
  $input: DeleteRouterInput!
) {
  delete_router(input: $input) {
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
    "type": "DeleteRouterInput!"
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
    "concreteType": "DeleteRouterPayload",
    "kind": "LinkedField",
    "name": "delete_router",
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
    "name": "DeleteRouterMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteRouterMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteRouterMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteRouterMutation(\n  $input: DeleteRouterInput!\n) {\n  delete_router(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c6b840f393f99d3d882f710148dbd42d';

module.exports = node;
