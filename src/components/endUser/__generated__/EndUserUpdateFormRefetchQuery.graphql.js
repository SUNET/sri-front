/**
 * @flow
 * @relayHash b0b8c4f15fcb4980c8bcde7f2a4110ae
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EndUserUpdateForm_endUser$ref = any;
export type EndUserUpdateFormRefetchQueryVariables = {|
  endUserId: string
|};
export type EndUserUpdateFormRefetchQueryResponse = {|
  +getEndUserById: ?{|
    +$fragmentRefs: EndUserUpdateForm_endUser$ref
  |}
|};
export type EndUserUpdateFormRefetchQuery = {|
  variables: EndUserUpdateFormRefetchQueryVariables,
  response: EndUserUpdateFormRefetchQueryResponse,
|};
*/


/*
query EndUserUpdateFormRefetchQuery(
  $endUserId: ID!
) {
  getEndUserById(id: $endUserId) {
    ...EndUserUpdateForm_endUser
    id
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
    "name": "EndUserUpdateFormRefetchQuery",
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
    "name": "EndUserUpdateFormRefetchQuery",
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
    "name": "EndUserUpdateFormRefetchQuery",
    "id": null,
    "text": "query EndUserUpdateFormRefetchQuery(\n  $endUserId: ID!\n) {\n  getEndUserById(id: $endUserId) {\n    ...EndUserUpdateForm_endUser\n    id\n  }\n}\n\nfragment EndUserUpdateForm_endUser on EndUser {\n  id\n  name\n  description\n  url\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c1f3dbc99c52fb396e5a33ddbf4011e4';
module.exports = node;
