/**
 * @flow
 * @relayHash 45b80dd05794e9b49c4cd8e5a07f472a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteRelationshipInput = {|
  relation_id: number,
  clientMutationId?: ?string,
|};
export type DeleteRelationshMutationVariables = {|
  input: DeleteRelationshipInput
|};
export type DeleteRelationshMutationResponse = {|
  +delete_relationship: ?{|
    +success: boolean
  |}
|};
export type DeleteRelationshMutation = {|
  variables: DeleteRelationshMutationVariables,
  response: DeleteRelationshMutationResponse,
|};
*/


/*
mutation DeleteRelationshMutation(
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
    "name": "DeleteRelationshMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteRelationshMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteRelationshMutation",
    "id": null,
    "text": "mutation DeleteRelationshMutation(\n  $input: DeleteRelationshipInput!\n) {\n  delete_relationship(input: $input) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a729ec134efba947c5412ee5db9c98d3';
module.exports = node;
