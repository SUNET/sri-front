/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdatePortInput = {|
  name: string,
  port_type?: ?any,
  description?: ?string,
  relationship_connected_to?: ?number,
  id: string,
  clientMutationId?: ?string,
|};
export type UpdatePortMutationVariables = {|
  input: UpdatePortInput
|};
export type UpdatePortMutationResponse = {|
  +update_port: ?{|
    +errors: ?$ReadOnlyArray<?{|
      +field: string,
      +messages: $ReadOnlyArray<string>,
    |}>,
    +port: ?{|
      +id: string,
      +name: string,
      +description: ?string,
      +port_type: ?{|
        +name: string,
        +value: string,
      |},
    |},
  |}
|};
export type UpdatePortMutation = {|
  variables: UpdatePortMutationVariables,
  response: UpdatePortMutationResponse,
|};
*/


/*
mutation UpdatePortMutation(
  $input: UpdatePortInput!
) {
  update_port(input: $input) {
    errors {
      field
      messages
    }
    port {
      id
      name
      description
      port_type {
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
    "type": "UpdatePortInput!"
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
  "name": "description",
  "storageKey": null
},
v6 = {
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
    "name": "UpdatePortMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdatePortPayload",
        "kind": "LinkedField",
        "name": "update_port",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Port",
            "kind": "LinkedField",
            "name": "port",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "port_type",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v6/*: any*/)
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
    "name": "UpdatePortMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdatePortPayload",
        "kind": "LinkedField",
        "name": "update_port",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Port",
            "kind": "LinkedField",
            "name": "port",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "port_type",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v6/*: any*/),
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
    "name": "UpdatePortMutation",
    "operationKind": "mutation",
    "text": "mutation UpdatePortMutation(\n  $input: UpdatePortInput!\n) {\n  update_port(input: $input) {\n    errors {\n      field\n      messages\n    }\n    port {\n      id\n      name\n      description\n      port_type {\n        name\n        value\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '230c207aad45c733a008ea681fa66986';

module.exports = node;
