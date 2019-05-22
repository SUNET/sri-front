/**
 * @flow
 * @relayHash 42323ac3d87888bdc52da32b516e8ee0
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteNIContactMutationInput = {|
  handle_id: number,
  clientMutationId?: ?string,
|};
export type DeleteContactMutationVariables = {|
  input: DeleteNIContactMutationInput
|};
export type DeleteContactMutationResponse = {|
  +delete_contact: ?{|
    +contact: ?{|
      +handle_id: string
    |}
  |}
|};
export type DeleteContactMutation = {|
  variables: DeleteContactMutationVariables,
  response: DeleteContactMutationResponse,
|};
*/

/*
mutation DeleteContactMutation(
  $input: DeleteNIContactMutationInput!
) {
  delete_contact(input: $input) {
    contact {
      handle_id
      id
    }
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
    var v0 = [
            {
                kind: "LocalArgument",
                name: "input",
                type: "DeleteNIContactMutationInput!",
                defaultValue: null
            }
        ],
        v1 = [
            {
                kind: "Variable",
                name: "input",
                variableName: "input",
                type: "DeleteNIContactMutationInput!"
            }
        ],
        v2 = {
            kind: "ScalarField",
            alias: null,
            name: "handle_id",
            args: null,
            storageKey: null
        };
    return {
        kind: "Request",
        fragment: {
            kind: "Fragment",
            name: "DeleteContactMutation",
            type: "Mutation",
            metadata: null,
            argumentDefinitions: (v0 /*: any*/),
            selections: [
                {
                    kind: "LinkedField",
                    alias: null,
                    name: "delete_contact",
                    storageKey: null,
                    args: (v1 /*: any*/),
                    concreteType: "DeleteNIContactMutation",
                    plural: false,
                    selections: [
                        {
                            kind: "LinkedField",
                            alias: null,
                            name: "contact",
                            storageKey: null,
                            args: null,
                            concreteType: "Contact",
                            plural: false,
                            selections: [(v2 /*: any*/)]
                        }
                    ]
                }
            ]
        },
        operation: {
            kind: "Operation",
            name: "DeleteContactMutation",
            argumentDefinitions: (v0 /*: any*/),
            selections: [
                {
                    kind: "LinkedField",
                    alias: null,
                    name: "delete_contact",
                    storageKey: null,
                    args: (v1 /*: any*/),
                    concreteType: "DeleteNIContactMutation",
                    plural: false,
                    selections: [
                        {
                            kind: "LinkedField",
                            alias: null,
                            name: "contact",
                            storageKey: null,
                            args: null,
                            concreteType: "Contact",
                            plural: false,
                            selections: [
                                (v2 /*: any*/),
                                {
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "id",
                                    args: null,
                                    storageKey: null
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        params: {
            operationKind: "mutation",
            name: "DeleteContactMutation",
            id: null,
            text:
                "mutation DeleteContactMutation(\n  $input: DeleteNIContactMutationInput!\n) {\n  delete_contact(input: $input) {\n    contact {\n      handle_id\n      id\n    }\n  }\n}\n",
            metadata: {}
        }
    };
})();
// prettier-ignore
(node/*: any*/).hash = '643d818e642fc2f46f22072b32aff75e';
module.exports = node;
