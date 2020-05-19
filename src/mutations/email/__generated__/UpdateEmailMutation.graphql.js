/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateEmailInput = {|
  contact?: ?any,
  name: string,
  type: any,
  id: string,
  clientMutationId?: ?string,
|};
export type UpdateEmailMutationVariables = {|
  input: UpdateEmailInput
|};
export type UpdateEmailMutationResponse = {|
  +update_email: ?{|
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
export type UpdateEmailMutation = {|
  variables: UpdateEmailMutationVariables,
  response: UpdateEmailMutationResponse,
|};
*/


/*
mutation UpdateEmailMutation(
  $input: UpdateEmailInput!
) {
  update_email(input: $input) {
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateEmailInput!"
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateEmailMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateEmailPayload",
        "kind": "LinkedField",
        "name": "update_email",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Email",
            "kind": "LinkedField",
            "name": "email",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "type",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateEmailMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateEmailPayload",
        "kind": "LinkedField",
        "name": "update_email",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Email",
            "kind": "LinkedField",
            "name": "email",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "type",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UpdateEmailMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateEmailMutation(\n  $input: UpdateEmailInput!\n) {\n  update_email(input: $input) {\n    errors {\n      field\n      messages\n    }\n    email {\n      id\n      name\n      type {\n        name\n        value\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5f6f7a5349c17a39028e1a5f1bc34977';

module.exports = node;
