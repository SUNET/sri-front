/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ConvertHostInput = {|
  id: string,
  slug: string,
  clientMutationId?: ?string,
|};
export type ConvertHostMutationVariables = {|
  input: ConvertHostInput
|};
export type ConvertHostMutationResponse = {|
  +convert_host: ?{|
    +success: boolean
  |}
|};
export type ConvertHostMutation = {|
  variables: ConvertHostMutationVariables,
  response: ConvertHostMutationResponse,
|};
*/


/*
mutation ConvertHostMutation(
  $input: ConvertHostInput!
) {
  convert_host(input: $input) {
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
    "type": "ConvertHostInput!"
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
    "concreteType": "ConvertHostPayload",
    "kind": "LinkedField",
    "name": "convert_host",
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
    "name": "ConvertHostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ConvertHostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ConvertHostMutation",
    "operationKind": "mutation",
    "text": "mutation ConvertHostMutation(\n  $input: ConvertHostInput!\n) {\n  convert_host(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c66845e986871bf0e26cb18d34618b63';

module.exports = node;
