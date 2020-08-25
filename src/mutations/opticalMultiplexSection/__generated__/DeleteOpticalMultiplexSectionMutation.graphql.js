/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteOpticalMultiplexSectionInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteOpticalMultiplexSectionMutationVariables = {|
  input: DeleteOpticalMultiplexSectionInput
|};
export type DeleteOpticalMultiplexSectionMutationResponse = {|
  +delete_opticalMultiplexSection: ?{|
    +success: boolean
  |}
|};
export type DeleteOpticalMultiplexSectionMutation = {|
  variables: DeleteOpticalMultiplexSectionMutationVariables,
  response: DeleteOpticalMultiplexSectionMutationResponse,
|};
*/


/*
mutation DeleteOpticalMultiplexSectionMutation(
  $input: DeleteOpticalMultiplexSectionInput!
) {
  delete_opticalMultiplexSection(input: $input) {
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
    "type": "DeleteOpticalMultiplexSectionInput!"
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
    "concreteType": "DeleteOpticalMultiplexSectionPayload",
    "kind": "LinkedField",
    "name": "delete_opticalMultiplexSection",
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
    "name": "DeleteOpticalMultiplexSectionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteOpticalMultiplexSectionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteOpticalMultiplexSectionMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteOpticalMultiplexSectionMutation(\n  $input: DeleteOpticalMultiplexSectionInput!\n) {\n  delete_opticalMultiplexSection(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2c6b8755246d3b1c74bc4a9e0251689e';

module.exports = node;
