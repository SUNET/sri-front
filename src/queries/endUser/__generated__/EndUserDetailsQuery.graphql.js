/**
 * @flow
 * @relayHash cc8f506637ad02ef29a278497338f84e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EndUserUpdateForm_endUser$ref = any;
export type EndUserDetailsQueryVariables = {|
  endUserId: string
|};
export type EndUserDetailsQueryResponse = {|
  +getEndUserById: ?{|
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
    +$fragmentRefs: EndUserUpdateForm_endUser$ref,
  |}
|};
export type EndUserDetailsQuery = {|
  variables: EndUserDetailsQueryVariables,
  response: EndUserDetailsQueryResponse,
|};
*/


/*
query EndUserDetailsQuery(
  $endUserId: ID!
) {
  getEndUserById(id: $endUserId) {
    ...EndUserUpdateForm_endUser
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

fragment EndUserUpdateForm_endUser on EndUser {
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
    "name": "endUserId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "endUserId"
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
    "name": "EndUserDetailsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getEndUserById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "EndUser",
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
            "name": "EndUserUpdateForm_endUser",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EndUserDetailsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getEndUserById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "EndUser",
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
    "name": "EndUserDetailsQuery",
    "id": null,
    "text": "query EndUserDetailsQuery(\n  $endUserId: ID!\n) {\n  getEndUserById(id: $endUserId) {\n    ...EndUserUpdateForm_endUser\n    id\n    name\n    description\n    url\n    created\n    creator {\n      email\n      id\n    }\n    modified\n    modifier {\n      email\n      id\n    }\n  }\n}\n\nfragment EndUserUpdateForm_endUser on EndUser {\n  id\n  name\n  description\n  url\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a79d673348636ecf652b654693d55f84';
module.exports = node;
