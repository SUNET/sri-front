/**
 * @flow
 * @relayHash eedfba6e94a414afa60b8e6c0ed272da
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateAddressInput = {|
  organization?: ?any,
  name: string,
  website?: ?string,
  phone?: ?string,
  street?: ?string,
  postal_code?: ?string,
  postal_area?: ?string,
  handle_id: number,
  clientMutationId?: ?string,
|};
export type UpdateAddressMutationVariables = {|
  input: UpdateAddressInput
|};
export type UpdateAddressMutationResponse = {|
  +update_address: ?{|
    +errors: ?$ReadOnlyArray<?{|
      +field: string,
      +messages: $ReadOnlyArray<string>,
    |}>,
    +address: ?{|
      +handle_id: string
    |},
  |}
|};
export type UpdateAddressMutation = {|
  variables: UpdateAddressMutationVariables,
  response: UpdateAddressMutationResponse,
|};
*/


/*
mutation UpdateAddressMutation(
  $input: UpdateAddressInput!
) {
  update_address(input: $input) {
    errors {
      field
      messages
    }
    address {
      handle_id
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
    "type": "UpdateAddressInput!",
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
  "kind": "LinkedField",
  "alias": null,
  "name": "errors",
  "storageKey": null,
  "args": null,
  "concreteType": "ErrorType",
  "plural": true,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "field",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "messages",
      "args": null,
      "storageKey": null
    }
  ]
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "handle_id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateAddressMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "update_address",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateAddressPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "address",
            "storageKey": null,
            "args": null,
            "concreteType": "Address",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateAddressMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "update_address",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateAddressPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "address",
            "storageKey": null,
            "args": null,
            "concreteType": "Address",
            "plural": false,
            "selections": [
              (v3/*: any*/),
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
    "name": "UpdateAddressMutation",
    "id": null,
    "text": "mutation UpdateAddressMutation(\n  $input: UpdateAddressInput!\n) {\n  update_address(input: $input) {\n    errors {\n      field\n      messages\n    }\n    address {\n      handle_id\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '75867aa076f7705b005276e52aaad5fd';
module.exports = node;
