/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteContactInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteContactMutationVariables = {|
  input: DeleteContactInput
|};
export type DeleteContactMutationResponse = {|
  +delete_contact: ?{|
    +success: boolean
  |}
|};
export type DeleteContactMutation = {|
  variables: DeleteContactMutationVariables,
  response: DeleteContactMutationResponse,
|};
*/


/*
mutation DeleteContactMutation(
  $input: DeleteContactInput!
) {
  delete_contact(input: $input) {
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
    "type": "DeleteContactInput!"
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
    "concreteType": "DeleteContactPayload",
    "kind": "LinkedField",
    "name": "delete_contact",
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
    "name": "DeleteContactMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteContactMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteContactMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteContactMutation(\n  $input: DeleteContactInput!\n) {\n  delete_contact(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2ca7cc50fce98fbe920155db60674743';

module.exports = node;
