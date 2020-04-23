/**
 * @flow
 * @relayHash ef5a188d76f650db805596d9ca5a0de1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RefreshInput = {|
  token?: ?string,
  clientMutationId?: ?string,
|};
export type JWTRefreshMutationVariables = {|
  input: RefreshInput
|};
export type JWTRefreshMutationResponse = {|
  +refresh_token: ?{|
    +token: string,
    +payload: any,
  |}
|};
export type JWTRefreshMutation = {|
  variables: JWTRefreshMutationVariables,
  response: JWTRefreshMutationResponse,
|};
*/


/*
mutation JWTRefreshMutation(
  $input: RefreshInput!
) {
  refresh_token(input: $input) {
    token
    payload
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RefreshInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "refresh_token",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "RefreshPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      },
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
    "name": "JWTRefreshMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "JWTRefreshMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "JWTRefreshMutation",
    "id": null,
    "text": "mutation JWTRefreshMutation(\n  $input: RefreshInput!\n) {\n  refresh_token(input: $input) {\n    token\n    payload\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c93639901921e920ab846f2035db05d8';

module.exports = node;
