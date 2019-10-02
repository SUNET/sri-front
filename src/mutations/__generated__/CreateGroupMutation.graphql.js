/**
 * @flow
 * @relayHash 6813c922a93ccbeb158a00c69ed34e41
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateGroupInput = {|
  name: string,
  description?: ?string,
  clientMutationId?: ?string,
|};
export type CreateGroupMutationVariables = {|
  input: CreateGroupInput
|};
export type CreateGroupMutationResponse = {|
  +create_group: ?{|
    +group: ?{|
      +handle_id: string,
      +name: string,
      +description: ?string,
    |}
  |}
|};
export type CreateGroupMutation = {|
  variables: CreateGroupMutationVariables,
  response: CreateGroupMutationResponse,
|};
*/


/*
mutation CreateGroupMutation(
  $input: CreateGroupInput!
) {
  create_group(input: $input) {
    group {
      handle_id
      name
      description
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
    "type": "CreateGroupInput!",
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
  "kind": "ScalarField",
  "alias": null,
  "name": "handle_id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateGroupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "create_group",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateGroupPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "group",
            "storageKey": null,
            "args": null,
            "concreteType": "Group",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateGroupMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "create_group",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateGroupPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "group",
            "storageKey": null,
            "args": null,
            "concreteType": "Group",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
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
    "name": "CreateGroupMutation",
    "id": null,
    "text": "mutation CreateGroupMutation(\n  $input: CreateGroupInput!\n) {\n  create_group(input: $input) {\n    group {\n      handle_id\n      name\n      description\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e1579a988c30114df1c64381051d7cdc';
module.exports = node;
