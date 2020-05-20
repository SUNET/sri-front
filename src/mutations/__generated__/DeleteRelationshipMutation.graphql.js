/**
 * @flow
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteRelationshipInput!"
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
    "concreteType": "DeleteRelationshipPayload",
    "kind": "LinkedField",
    "name": "delete_relationship",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
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
    "name": "DeleteRelationshipMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteRelationshipMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteRelationshipMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteRelationshipMutation(\n  $input: DeleteRelationshipInput!\n) {\n  delete_relationship(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '756617b62fee99e75331801879827fcc';

module.exports = node;
