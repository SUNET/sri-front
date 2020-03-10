/**
 * @flow
 * @relayHash 4f928b371b0858b1298ca2eef2055da7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProviderUpdateForm_provider$ref = any;
export type ProviderDetailsQueryVariables = {|
  providerId: string
|};
export type ProviderDetailsQueryResponse = {|
  +getProviderById: ?{|
    +id: string,
    +name: string,
    +description: ?string,
    +url: ?string,
    +created: any,
    +creator: {|
      +email: string
    |},
    +modified: any,
    +modifier: {|
      +email: string
    |},
    +$fragmentRefs: ProviderUpdateForm_provider$ref,
  |}
|};
export type ProviderDetailsQuery = {|
  variables: ProviderDetailsQueryVariables,
  response: ProviderDetailsQueryResponse,
|};
*/


/*
query ProviderDetailsQuery(
  $providerId: ID!
) {
  getProviderById(id: $providerId) {
    ...ProviderUpdateForm_provider
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
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v8 = [
  (v7/*: any*/)
],
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "modified",
  "args": null,
  "storageKey": null
},
v10 = [
  (v7/*: any*/),
  (v2/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProviderDetailsQuery",
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
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v8/*: any*/)
          },
          (v9/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v8/*: any*/)
          },
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
    "name": "ProviderDetailsQuery",
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
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v10/*: any*/)
          },
          (v9/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v10/*: any*/)
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProviderDetailsQuery",
    "id": null,
    "text": "query ProviderDetailsQuery(\n  $providerId: ID!\n) {\n  getProviderById(id: $providerId) {\n    ...ProviderUpdateForm_provider\n    id\n    name\n    description\n    url\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n  }\n}\n\nfragment ProviderUpdateForm_provider on Provider {\n  id\n  name\n  description\n  url\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '54d370038b16e7c3ad055074ae66ce40';
module.exports = node;
