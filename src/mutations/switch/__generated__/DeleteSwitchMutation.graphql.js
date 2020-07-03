/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteSwitchInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteSwitchMutationVariables = {|
  input: DeleteSwitchInput
|};
export type DeleteSwitchMutationResponse = {|
  +delete_switch: ?{|
    +success: boolean
  |}
|};
export type DeleteSwitchMutation = {|
  variables: DeleteSwitchMutationVariables,
  response: DeleteSwitchMutationResponse,
|};
*/


/*
mutation DeleteSwitchMutation(
  $input: DeleteSwitchInput!
) {
  delete_switch(input: $input) {
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
    "type": "DeleteSwitchInput!"
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
    "concreteType": "DeleteSwitchPayload",
    "kind": "LinkedField",
    "name": "delete_switch",
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
    "name": "DeleteSwitchMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteSwitchMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteSwitchMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteSwitchMutation(\n  $input: DeleteSwitchInput!\n) {\n  delete_switch(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '10cb642c717eb66491c95b989c8ff4c2';

module.exports = node;
