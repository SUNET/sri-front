/**
 * @flow
 * @relayHash fffb50ad845020cb41943bf20aad24e3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateEmailInput = {|
  contact?: ?any,
  name: string,
  type: any,
  clientMutationId?: ?string,
|};
export type CreateEmailMutationVariables = {|
  input: CreateEmailInput
|};
export type CreateEmailMutationResponse = {|
  +create_email: ?{|
    +errors: ?$ReadOnlyArray<?{|
      +field: string,
      +messages: $ReadOnlyArray<string>,
    |}>,
    +email: ?{|
      +id: string,
      +name: string,
      +type: ?{|
        +name: string,
        +value: string,
      |},
    |},
  |}
|};
export type CreateEmailMutation = {|
  variables: CreateEmailMutationVariables,
  response: CreateEmailMutationResponse,
|};
*/


/*
mutation CreateEmailMutation(
  $input: CreateEmailInput!
) {
  create_email(input: $input) {
    errors {
      field
      messages
    }
    email {
      id
      name
      type {
        name
        value
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "errors",
  "storageKey": null,
  "args": null,
  "concreteType": "ErrorType",
  "plural": true,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "field",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "messages",
      "args": null,
      "storageKey": null
    }
  ]
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateEmailMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "create_email",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateEmailPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "email",
            "storageKey": null,
            "args": null,
            "concreteType": "Email",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "type",
                "storageKey": null,
                "args": null,
                "concreteType": "Choice",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateEmailMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "create_email",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateEmailPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "email",
            "storageKey": null,
            "args": null,
            "concreteType": "Email",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "type",
                "storageKey": null,
                "args": null,
                "concreteType": "Choice",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v3/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateEmailMutation",
    "id": null,
    "text": "mutation CreateEmailMutation(\n  $input: CreateEmailInput!\n) {\n  create_email(input: $input) {\n    errors {\n      field\n      messages\n    }\n    email {\n      id\n      name\n      type {\n        name\n        value\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '90f9ac2930b371a036b4aebfc695685d';
module.exports = node;
