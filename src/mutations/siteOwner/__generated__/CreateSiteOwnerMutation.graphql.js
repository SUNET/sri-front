/**
 * @flow
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateSiteOwnerInput!"
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
    "concreteType": "CreateSiteOwnerPayload",
    "kind": "LinkedField",
    "name": "create_siteOwner",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ErrorType",
        "kind": "LinkedField",
        "name": "errors",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "field",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "messages",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "SiteOwner",
        "kind": "LinkedField",
        "name": "siteOwner",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "url",
            "storageKey": null
          }
        ],
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
    "name": "CreateSiteOwnerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateSiteOwnerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateSiteOwnerMutation",
    "operationKind": "mutation",
    "text": "mutation CreateSiteOwnerMutation(\n  $input: CreateSiteOwnerInput!\n) {\n  create_siteOwner(input: $input) {\n    errors {\n      field\n      messages\n    }\n    siteOwner {\n      id\n      name\n      description\n      url\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b490cd0adca8b17da36c6f9daa0ea0c5';

module.exports = node;
