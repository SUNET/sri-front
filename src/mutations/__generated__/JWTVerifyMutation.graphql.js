/**
 * @flow
 * @relayHash e7f21527f80c3197b93e628f025a044b
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
    "kind": "LocalArgument",
    "name": "input",
    "type": "VerifyInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "verify_token",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "VerifyPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "payload",
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
    "name": "JWTVerifyMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "JWTVerifyMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "JWTVerifyMutation",
    "id": null,
    "text": "mutation JWTVerifyMutation(\n  $input: VerifyInput!\n) {\n  verify_token(input: $input) {\n    payload\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c97284b754c6f5bfba9827e6049d0068';

module.exports = node;
