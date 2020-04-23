/**
 * @flow
 * @relayHash a6846abfee2f8784c9ee1d291eff12b8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteGroupInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteGroupMutationVariables = {|
  input: DeleteGroupInput
|};
export type DeleteGroupMutationResponse = {|
  +delete_group: ?{|
    +success: boolean
  |}
|};
export type DeleteGroupMutation = {|
  variables: DeleteGroupMutationVariables,
  response: DeleteGroupMutationResponse,
|};
*/


/*
mutation DeleteGroupMutation(
  $input: DeleteGroupInput!
) {
  delete_group(input: $input) {
    success
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteGroupInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "delete_group",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteGroupPayload",
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
    "name": "DeleteGroupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteGroupMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteGroupMutation",
    "id": null,
    "text": "mutation DeleteGroupMutation(\n  $input: DeleteGroupInput!\n) {\n  delete_group(input: $input) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '547cf95a698bf819305693b8c9fda01b';

module.exports = node;
