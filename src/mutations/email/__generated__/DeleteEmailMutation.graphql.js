/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteEmailInput = {|
  id: string,
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteEmailInput!"
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
    "concreteType": "DeleteEmailPayload",
    "kind": "LinkedField",
    "name": "delete_email",
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
    "name": "DeleteEmailMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteEmailMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteEmailMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteEmailMutation(\n  $input: DeleteEmailInput!\n) {\n  delete_email(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7b666b335aede4d2350cc61b1cd6d413';

module.exports = node;
