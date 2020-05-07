/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateSiteOwnerInput = {|
  name: string,
  description?: ?string,
  url?: ?string,
  id: string,
  clientMutationId?: ?string,
|};
export type UpdateSiteOwnerMutationVariables = {|
  input: UpdateSiteOwnerInput
|};
export type UpdateSiteOwnerMutationResponse = {|
  +update_siteOwner: ?{|
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
export type UpdateSiteOwnerMutation = {|
  variables: UpdateSiteOwnerMutationVariables,
  response: UpdateSiteOwnerMutationResponse,
|};
*/


/*
mutation UpdateSiteOwnerMutation(
  $input: UpdateSiteOwnerInput!
) {
  update_siteOwner(input: $input) {
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
    "type": "UpdateSiteOwnerInput!"
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
    "concreteType": "UpdateSiteOwnerPayload",
    "kind": "LinkedField",
    "name": "update_siteOwner",
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
    "name": "UpdateSiteOwnerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateSiteOwnerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UpdateSiteOwnerMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateSiteOwnerMutation(\n  $input: UpdateSiteOwnerInput!\n) {\n  update_siteOwner(input: $input) {\n    errors {\n      field\n      messages\n    }\n    siteOwner {\n      id\n      name\n      description\n      url\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dffcb3d9477d60b5c344cb06496bab49';

module.exports = node;
