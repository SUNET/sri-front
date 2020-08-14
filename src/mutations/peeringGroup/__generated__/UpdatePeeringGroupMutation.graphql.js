/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdatePeeringGroupInput = {|
  name: string,
  id: string,
  clientMutationId?: ?string,
|};
export type UpdatePeeringGroupMutationVariables = {|
  input: UpdatePeeringGroupInput
|};
export type UpdatePeeringGroupMutationResponse = {|
  +update_peeringGroup: ?{|
    +errors: ?$ReadOnlyArray<?{|
      +field: string,
      +messages: $ReadOnlyArray<string>,
    |}>,
    +peeringGroup: ?{|
      +id: string,
      +name: string,
      +dependents: ?$ReadOnlyArray<?{|
        +id: string
      |}>,
    |},
  |}
|};
export type UpdatePeeringGroupMutation = {|
  variables: UpdatePeeringGroupMutationVariables,
  response: UpdatePeeringGroupMutationResponse,
|};
*/


/*
mutation UpdatePeeringGroupMutation(
  $input: UpdatePeeringGroupInput!
) {
  update_peeringGroup(input: $input) {
    errors {
      field
      messages
    }
    peeringGroup {
      id
      name
      dependents {
        __typename
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
    "type": "UpdatePeeringGroupInput!"
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdatePeeringGroupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdatePeeringGroupPayload",
        "kind": "LinkedField",
        "name": "update_peeringGroup",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PeeringGroup",
            "kind": "LinkedField",
            "name": "peeringGroup",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "dependents",
                "plural": true,
                "selections": [
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
    ],
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdatePeeringGroupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdatePeeringGroupPayload",
        "kind": "LinkedField",
        "name": "update_peeringGroup",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PeeringGroup",
            "kind": "LinkedField",
            "name": "peeringGroup",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "dependents",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
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
    "name": "UpdatePeeringGroupMutation",
    "operationKind": "mutation",
    "text": "mutation UpdatePeeringGroupMutation(\n  $input: UpdatePeeringGroupInput!\n) {\n  update_peeringGroup(input: $input) {\n    errors {\n      field\n      messages\n    }\n    peeringGroup {\n      id\n      name\n      dependents {\n        __typename\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '29d73e77d450aca47e2ac0536d875f76';

module.exports = node;
