/**
 * @flow
 * @relayHash 69d10b250c5e55d1748d10ce3ef95cee
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProviderUpdateForm_provider$ref = any;
export type ProviderUpdateFormRefetchQueryVariables = {|
  providerId: string
|};
export type ProviderUpdateFormRefetchQueryResponse = {|
  +getProviderById: ?{|
    +$fragmentRefs: ProviderUpdateForm_provider$ref
  |}
|};
export type ProviderUpdateFormRefetchQuery = {|
  variables: ProviderUpdateFormRefetchQueryVariables,
  response: ProviderUpdateFormRefetchQueryResponse,
|};
*/


/*
query ProviderUpdateFormRefetchQuery(
  $providerId: ID!
) {
  getProviderById(id: $providerId) {
    ...ProviderUpdateForm_provider
    id
  }
}

fragment ProviderUpdateForm_provider on Provider {
  id
  name
  description
  url
  created
  creator {
    email
    id
  }
  modified
  modifier {
    email
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "providerId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "providerId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "email",
    "args": null,
    "storageKey": null
  },
  (v2/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProviderUpdateFormRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getProviderById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Provider",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProviderUpdateForm_provider",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProviderUpdateFormRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getProviderById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Provider",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "created",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v3/*: any*/)
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "modified",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v3/*: any*/)
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProviderUpdateFormRefetchQuery",
    "id": null,
    "text": "query ProviderUpdateFormRefetchQuery(\n  $providerId: ID!\n) {\n  getProviderById(id: $providerId) {\n    ...ProviderUpdateForm_provider\n    id\n  }\n}\n\nfragment ProviderUpdateForm_provider on Provider {\n  id\n  name\n  description\n  url\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e07804d53d75c8f221317178969d9520';
module.exports = node;
