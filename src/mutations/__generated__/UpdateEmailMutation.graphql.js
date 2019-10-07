/**
 * @flow
 * @relayHash d624695d17138268844b381945b3361e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateEmailInput = {|
  contact?: ?any,
  name: string,
  type: any,
  handle_id: number,
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
      +handle_id: string,
      +name: string,
      +type: any,
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
      handle_id
      name
      type
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateEmailInput!",
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
  "name": "handle_id",
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
  "name": "type",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateEmailMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "update_email",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateEmailPayload",
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
              (v5/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateEmailMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "update_email",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateEmailPayload",
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
              (v5/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateEmailMutation",
    "id": null,
    "text": "mutation UpdateEmailMutation(\n  $input: UpdateEmailInput!\n) {\n  update_email(input: $input) {\n    errors {\n      field\n      messages\n    }\n    email {\n      handle_id\n      name\n      type\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '984a073eb275be5055b94984370cdce1';
module.exports = node;
