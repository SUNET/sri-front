/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DashBoardActivityNetworkList_getContextActivity$ref = any;
export type ActionOrderBy = "timestamp_ASC" | "timestamp_DESC" | "%future added value";
export type ActionFilter = {|
  context: string
|};
export type DashBoardActivityNetworkBlockQueryVariables = {|
  filter: ActionFilter,
  orderBy?: ?ActionOrderBy,
  first?: ?number,
|};
export type DashBoardActivityNetworkBlockQueryResponse = {|
  +$fragmentRefs: DashBoardActivityNetworkList_getContextActivity$ref
|};
export type DashBoardActivityNetworkBlockQuery = {|
  variables: DashBoardActivityNetworkBlockQueryVariables,
  response: DashBoardActivityNetworkBlockQueryResponse,
|};
*/


/*
query DashBoardActivityNetworkBlockQuery(
  $filter: ActionFilter!
  $orderBy: ActionOrderBy
  $first: Int
) {
  ...DashBoardActivityNetworkList_getContextActivity_2d34Kc
}

fragment DashBoardActivityNetworkList_getContextActivity_2d34Kc on Query {
  getContextActivity(filter: $filter, orderBy: $orderBy, first: $first) {
    edges {
      node {
        ...DashBoardActivityNetworkRow_log
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}

fragment DashBoardActivityNetworkRow_log on Action {
  id
  text
  actorname
  actor {
    id
    username
    first_name
    last_name
    email
  }
  verb
  action_object {
    id
    name
    __typename
  }
  target_object {
    id
    name
    __typename
  }
  description
  timestamp
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter",
    "type": "ActionFilter!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "ActionOrderBy"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "orderBy",
    "variableName": "orderBy"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DashBoardActivityNetworkBlockQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "DashBoardActivityNetworkList_getContextActivity"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DashBoardActivityNetworkBlockQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ActionConnection",
        "kind": "LinkedField",
        "name": "getContextActivity",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ActionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Action",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "text",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "actorname",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "actor",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "username",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "first_name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "last_name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "email",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "verb",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "action_object",
                    "plural": false,
                    "selections": (v4/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "target_object",
                    "plural": false,
                    "selections": (v4/*: any*/),
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
                    "name": "timestamp",
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": [],
        "handle": "connection",
        "key": "DashBoardActivityNetworkList_getContextActivity",
        "kind": "LinkedHandle",
        "name": "getContextActivity"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DashBoardActivityNetworkBlockQuery",
    "operationKind": "query",
    "text": "query DashBoardActivityNetworkBlockQuery(\n  $filter: ActionFilter!\n  $orderBy: ActionOrderBy\n  $first: Int\n) {\n  ...DashBoardActivityNetworkList_getContextActivity_2d34Kc\n}\n\nfragment DashBoardActivityNetworkList_getContextActivity_2d34Kc on Query {\n  getContextActivity(filter: $filter, orderBy: $orderBy, first: $first) {\n    edges {\n      node {\n        ...DashBoardActivityNetworkRow_log\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment DashBoardActivityNetworkRow_log on Action {\n  id\n  text\n  actorname\n  actor {\n    id\n    username\n    first_name\n    last_name\n    email\n  }\n  verb\n  action_object {\n    id\n    name\n    __typename\n  }\n  target_object {\n    id\n    name\n    __typename\n  }\n  description\n  timestamp\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2f507163dfb16767e70a36f6711064d2';

module.exports = node;
