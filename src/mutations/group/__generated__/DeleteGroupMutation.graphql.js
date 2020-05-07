/**
 * @flow
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteGroupInput!"
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
    "concreteType": "DeleteGroupPayload",
    "kind": "LinkedField",
    "name": "delete_group",
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
    "name": "DeleteGroupMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteGroupMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteGroupMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteGroupMutation(\n  $input: DeleteGroupInput!\n) {\n  delete_group(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '547cf95a698bf819305693b8c9fda01b';

module.exports = node;
