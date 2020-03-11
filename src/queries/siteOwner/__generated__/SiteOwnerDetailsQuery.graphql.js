/**
 * @flow
 * @relayHash 6eaa6f5a0e93fab67d8f24de36ead263
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SiteOwnerUpdateForm_siteOwner$ref = any;
export type SiteOwnerDetailsQueryVariables = {|
  siteOwnerId: string
|};
export type SiteOwnerDetailsQueryResponse = {|
  +getSiteOwnerById: ?{|
    +id: string,
    +name: string,
    +description: ?string,
    +url: ?string,
    +__typename: string,
    +with_same_name: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +__typename: string,
    |}>,
    +created: any,
    +creator: {|
      +email: string
    |},
    +modified: any,
    +modifier: {|
      +email: string
    |},
    +$fragmentRefs: SiteOwnerUpdateForm_siteOwner$ref,
  |}
|};
export type SiteOwnerDetailsQuery = {|
  variables: SiteOwnerDetailsQueryVariables,
  response: SiteOwnerDetailsQueryResponse,
|};
*/


/*
query SiteOwnerDetailsQuery(
  $siteOwnerId: ID!
) {
  getSiteOwnerById(id: $siteOwnerId) {
    ...SiteOwnerUpdateForm_siteOwner
    id
    name
    description
    url
    __typename
    with_same_name {
      id
      name
      __typename
    }
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

fragment SiteOwnerUpdateForm_siteOwner on SiteOwner {
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
    "name": "siteOwnerId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "siteOwnerId"
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
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "with_same_name",
  "storageKey": null,
  "args": null,
  "concreteType": null,
  "plural": true,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/),
    (v6/*: any*/)
  ]
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v10 = [
  (v9/*: any*/)
],
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "modified",
  "args": null,
  "storageKey": null
},
v12 = [
  (v9/*: any*/),
  (v2/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SiteOwnerDetailsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getSiteOwnerById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "SiteOwner",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
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
          (v11/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v10/*: any*/)
          },
          {
            "kind": "FragmentSpread",
            "name": "SiteOwnerUpdateForm_siteOwner",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SiteOwnerDetailsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getSiteOwnerById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "SiteOwner",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v8/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v12/*: any*/)
          },
          (v11/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modifier",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v12/*: any*/)
          },
          (v6/*: any*/),
          (v7/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SiteOwnerDetailsQuery",
    "id": null,
    "text": "query SiteOwnerDetailsQuery(\n  $siteOwnerId: ID!\n) {\n  getSiteOwnerById(id: $siteOwnerId) {\n    ...SiteOwnerUpdateForm_siteOwner\n    id\n    name\n    description\n    url\n    __typename\n    with_same_name {\n      id\n      name\n      __typename\n    }\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n  }\n}\n\nfragment SiteOwnerUpdateForm_siteOwner on SiteOwner {\n  id\n  name\n  description\n  url\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '48e5a91ec059dac8a2a747497e1ff10b';
module.exports = node;
