/**
 * @flow
 * @relayHash e66977ffd5b971bf196bf60c6076be1c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteEmailInput = {|
  handle_id: number,
  clientMutationId?: ?string,
|};
export type DeleteEmailMutationVariables = {|
  input: DeleteEmailInput
|};
export type DeleteEmailMutationResponse = {|
  +delete_email: ?{|
    +success: boolean
  |}
|};
export type DeleteEmailMutation = {|
  variables: DeleteEmailMutationVariables,
  response: DeleteEmailMutationResponse,
|};
*/


/*
mutation DeleteEmailMutation(
  $input: DeleteEmailInput!
) {
  delete_email(input: $input) {
    success
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "delete_email",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteEmailPayload",
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
    "name": "DeleteEmailMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteEmailMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteEmailMutation",
    "id": null,
    "text": "mutation DeleteEmailMutation(\n  $input: DeleteEmailInput!\n) {\n  delete_email(input: $input) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7b666b335aede4d2350cc61b1cd6d413';
module.exports = node;
