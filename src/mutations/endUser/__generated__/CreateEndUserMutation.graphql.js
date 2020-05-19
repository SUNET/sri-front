/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateEndUserInput = {|
  name: string,
  description?: ?string,
  url?: ?string,
  clientMutationId?: ?string,
|};
export type CreateEndUserMutationVariables = {|
  input: CreateEndUserInput
|};
export type CreateEndUserMutationResponse = {|
  +create_endUser: ?{|
    +errors: ?$ReadOnlyArray<?{|
      +field: string,
      +messages: $ReadOnlyArray<string>,
    |}>,
    +endUser: ?{|
      +id: string,
      +name: string,
      +description: ?string,
      +url: ?string,
    |},
  |}
|};
export type CreateEndUserMutation = {|
  variables: CreateEndUserMutationVariables,
  response: CreateEndUserMutationResponse,
|};
*/


/*
mutation CreateEndUserMutation(
  $input: CreateEndUserInput!
) {
  create_endUser(input: $input) {
    errors {
      field
      messages
    }
    endUser {
      id
      name
      description
      url
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateEndUserInput!"
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
    "concreteType": "CreateEndUserPayload",
    "kind": "LinkedField",
    "name": "create_endUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ErrorType",
        "kind": "LinkedField",
        "name": "errors",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "field",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "messages",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "EndUser",
        "kind": "LinkedField",
        "name": "endUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "url",
            "storageKey": null
          }
        ],
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
    "name": "CreateEndUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateEndUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateEndUserMutation",
    "operationKind": "mutation",
    "text": "mutation CreateEndUserMutation(\n  $input: CreateEndUserInput!\n) {\n  create_endUser(input: $input) {\n    errors {\n      field\n      messages\n    }\n    endUser {\n      id\n      name\n      description\n      url\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f4d222874ea9ca7d589b5a4effd81f55';

module.exports = node;
