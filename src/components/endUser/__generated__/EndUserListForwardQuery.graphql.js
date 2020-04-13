/**
 * @flow
 * @relayHash 774e4e8b484f93394109483896e63205
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EndUserList_endUsers$ref = any;
export type EndUserOrderBy = "created_ASC" | "created_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "url_ASC" | "url_DESC" | "%future added value";
export type EndUserListForwardQueryVariables = {|
  count: number,
  cursor?: ?string,
  orderBy?: ?EndUserOrderBy,
|};
export type EndUserListForwardQueryResponse = {|
  +$fragmentRefs: EndUserList_endUsers$ref
|};
export type EndUserListForwardQuery = {|
  variables: EndUserListForwardQueryVariables,
  response: EndUserListForwardQueryResponse,
|};
*/


/*
query EndUserListForwardQuery(
  $count: Int!
  $cursor: String
  $orderBy: EndUserOrderBy
) {
  ...EndUserList_endUsers_32czeo
}

fragment EndUserList_endUsers_32czeo on Query {
  endUsers(first: $count, after: $cursor, orderBy: $orderBy) {
    edges {
      node {
        id
        ...EndUserRow_endUser
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment EndUserRow_endUser on EndUser {
  id
  name
  description
  url
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "EndUserOrderBy",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "orderBy",
  "variableName": "orderBy"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v1/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EndUserListForwardQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "EndUserList_endUsers",
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EndUserListForwardQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "endUsers",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "endUserConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "endUserEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "EndUser",
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "endUsers",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "EndUserList_endUsers",
        "filters": []
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "EndUserListForwardQuery",
    "id": null,
    "text": "query EndUserListForwardQuery(\n  $count: Int!\n  $cursor: String\n  $orderBy: EndUserOrderBy\n) {\n  ...EndUserList_endUsers_32czeo\n}\n\nfragment EndUserList_endUsers_32czeo on Query {\n  endUsers(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...EndUserRow_endUser\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment EndUserRow_endUser on EndUser {\n  id\n  name\n  description\n  url\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '00fd38f78052d74acd0fec7541949cb8';
module.exports = node;
