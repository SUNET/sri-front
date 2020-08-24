/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteOpticalLinkInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteOpticalLinkMutationVariables = {|
  input: DeleteOpticalLinkInput
|};
export type DeleteOpticalLinkMutationResponse = {|
  +delete_opticalLink: ?{|
    +success: boolean
  |}
|};
export type DeleteOpticalLinkMutation = {|
  variables: DeleteOpticalLinkMutationVariables,
  response: DeleteOpticalLinkMutationResponse,
|};
*/


/*
mutation DeleteOpticalLinkMutation(
  $input: DeleteOpticalLinkInput!
) {
  delete_opticalLink(input: $input) {
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
    "type": "DeleteOpticalLinkInput!"
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
    "concreteType": "DeleteOpticalLinkPayload",
    "kind": "LinkedField",
    "name": "delete_opticalLink",
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
    "name": "DeleteOpticalLinkMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteOpticalLinkMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteOpticalLinkMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteOpticalLinkMutation(\n  $input: DeleteOpticalLinkInput!\n) {\n  delete_opticalLink(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9aec377faa43e788624b101273acfddd';

module.exports = node;
