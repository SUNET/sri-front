/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteOdfInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteODFMutationVariables = {|
  input: DeleteOdfInput
|};
export type DeleteODFMutationResponse = {|
  +delete_oDF: ?{|
    +success: boolean
  |}
|};
export type DeleteODFMutation = {|
  variables: DeleteODFMutationVariables,
  response: DeleteODFMutationResponse,
|};
*/


/*
mutation DeleteODFMutation(
  $input: DeleteOdfInput!
) {
  delete_oDF(input: $input) {
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
    "type": "DeleteOdfInput!"
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
    "concreteType": "DeleteOdfPayload",
    "kind": "LinkedField",
    "name": "delete_oDF",
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
    "name": "DeleteODFMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteODFMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteODFMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteODFMutation(\n  $input: DeleteOdfInput!\n) {\n  delete_oDF(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1cb90bbc5fa75fd04af75f48a22e38c4';

module.exports = node;
