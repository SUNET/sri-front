/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type VerifyInput = {|
  token?: ?string,
  clientMutationId?: ?string,
|};
export type JWTVerifyMutationVariables = {|
  input: VerifyInput
|};
export type JWTVerifyMutationResponse = {|
  +verify_token: ?{|
    +payload: any
  |}
|};
export type JWTVerifyMutation = {|
  variables: JWTVerifyMutationVariables,
  response: JWTVerifyMutationResponse,
|};
*/


/*
mutation JWTVerifyMutation(
  $input: VerifyInput!
) {
  verify_token(input: $input) {
    payload
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "VerifyInput!"
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
    "concreteType": "VerifyPayload",
    "kind": "LinkedField",
    "name": "verify_token",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "payload",
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
    "name": "JWTVerifyMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "JWTVerifyMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "JWTVerifyMutation",
    "operationKind": "mutation",
    "text": "mutation JWTVerifyMutation(\n  $input: VerifyInput!\n) {\n  verify_token(input: $input) {\n    payload\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c97284b754c6f5bfba9827e6049d0068';

module.exports = node;
