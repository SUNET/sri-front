/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ConvertHostInput = {|
  id: string,
  slug: string,
  clientMutationId?: ?string,
|};
export type ConvertHostMutationVariables = {|
  input: ConvertHostInput
|};
export type ConvertHostMutationResponse = {|
  +convert_host: ?{|
    +success: boolean,
    +new_id: ?string,
    +new_type: ?{|
      +slug: string
    |},
  |}
|};
export type ConvertHostMutation = {|
  variables: ConvertHostMutationVariables,
  response: ConvertHostMutationResponse,
|};
*/


/*
mutation ConvertHostMutation(
  $input: ConvertHostInput!
) {
  convert_host(input: $input) {
    success
    new_id
    new_type {
      slug
      id
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
    "type": "ConvertHostInput!"
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
  "kind": "ScalarField",
  "name": "success",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "new_id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ConvertHostMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ConvertHostPayload",
        "kind": "LinkedField",
        "name": "convert_host",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "NINodeType",
            "kind": "LinkedField",
            "name": "new_type",
            "plural": false,
            "selections": [
              (v4/*: any*/)
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
    "name": "ConvertHostMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ConvertHostPayload",
        "kind": "LinkedField",
        "name": "convert_host",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "NINodeType",
            "kind": "LinkedField",
            "name": "new_type",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
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
    "name": "ConvertHostMutation",
    "operationKind": "mutation",
    "text": "mutation ConvertHostMutation(\n  $input: ConvertHostInput!\n) {\n  convert_host(input: $input) {\n    success\n    new_id\n    new_type {\n      slug\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '70a59d00af05f793a749b881ffdde718';

module.exports = node;
