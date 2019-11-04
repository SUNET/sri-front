/**
 * @flow
 * @relayHash 250e3506c09ce214eee6b894fba78bc7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteRelationshipInput = {|
  relation_id: number,
  clientMutationId?: ?string,
|};
export type DeleteRelationshipMutationVariables = {|
  input: DeleteRelationshipInput
|};
export type DeleteRelationshipMutationResponse = {|
  +delete_relationship: ?{|
    +success: boolean
  |}
|};
export type DeleteRelationshipMutation = {|
  variables: DeleteRelationshipMutationVariables,
  response: DeleteRelationshipMutationResponse,
|};
*/


/*
mutation DeleteRelationshipMutation(
  $input: DeleteRelationshipInput!
) {
  delete_relationship(input: $input) {
    success
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteRelationshipInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "delete_relationship",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteRelationshipPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "success",
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
    "name": "DeleteRelationshipMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteRelationshipMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteRelationshipMutation",
    "id": null,
    "text": "mutation DeleteRelationshipMutation(\n  $input: DeleteRelationshipInput!\n) {\n  delete_relationship(input: $input) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '756617b62fee99e75331801879827fcc';
module.exports = node;
