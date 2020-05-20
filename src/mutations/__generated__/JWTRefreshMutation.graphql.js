/**
 * @flow
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "RefreshInput!"
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
    "concreteType": "RefreshPayload",
    "kind": "LinkedField",
    "name": "refresh_token",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
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
    "name": "JWTRefreshMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "JWTRefreshMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "JWTRefreshMutation",
    "operationKind": "mutation",
    "text": "mutation JWTRefreshMutation(\n  $input: RefreshInput!\n) {\n  refresh_token(input: $input) {\n    token\n    payload\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c93639901921e920ab846f2035db05d8';

module.exports = node;
