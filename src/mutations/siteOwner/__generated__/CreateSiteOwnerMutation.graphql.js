/**
 * @flow
 * @relayHash 16eef4704ebeb3ddef4929de256138fe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateSiteOwnerInput = {|
  name: string,
  description?: ?string,
  url?: ?string,
  clientMutationId?: ?string,
|};
export type CreateSiteOwnerMutationVariables = {|
  input: CreateSiteOwnerInput
|};
export type CreateSiteOwnerMutationResponse = {|
  +create_siteOwner: ?{|
    +errors: ?$ReadOnlyArray<?{|
      +field: string,
      +messages: $ReadOnlyArray<string>,
    |}>,
    +siteOwner: ?{|
      +id: string,
      +name: string,
      +description: ?string,
      +url: ?string,
    |},
  |}
|};
export type CreateSiteOwnerMutation = {|
  variables: CreateSiteOwnerMutationVariables,
  response: CreateSiteOwnerMutationResponse,
|};
*/


/*
mutation CreateSiteOwnerMutation(
  $input: CreateSiteOwnerInput!
) {
  create_siteOwner(input: $input) {
    errors {
      field
      messages
    }
    siteOwner {
      id
      name
      description
      url
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateSiteOwnerInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "create_siteOwner",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateSiteOwnerPayload",
    "plural": false,
    "selections": [
      {
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
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "siteOwner",
        "storageKey": null,
        "args": null,
        "concreteType": "SiteOwner",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "url",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateSiteOwnerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateSiteOwnerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateSiteOwnerMutation",
    "id": null,
    "text": "mutation CreateSiteOwnerMutation(\n  $input: CreateSiteOwnerInput!\n) {\n  create_siteOwner(input: $input) {\n    errors {\n      field\n      messages\n    }\n    siteOwner {\n      id\n      name\n      description\n      url\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b490cd0adca8b17da36c6f9daa0ea0c5';
module.exports = node;
