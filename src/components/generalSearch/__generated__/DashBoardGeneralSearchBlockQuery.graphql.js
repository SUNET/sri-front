/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DashBoardGeneralSearchList_search_generalsearch$ref = any;
export type GenericFilter = {|
  query: string
|};
export type DashBoardGeneralSearchBlockQueryVariables = {|
  filter?: ?GenericFilter
|};
export type DashBoardGeneralSearchBlockQueryResponse = {|
  +$fragmentRefs: DashBoardGeneralSearchList_search_generalsearch$ref
|};
export type DashBoardGeneralSearchBlockQuery = {|
  variables: DashBoardGeneralSearchBlockQueryVariables,
  response: DashBoardGeneralSearchBlockQueryResponse,
|};
*/


/*
query DashBoardGeneralSearchBlockQuery(
  $filter: GenericFilter
) {
  ...DashBoardGeneralSearchList_search_generalsearch
}

fragment DashBoardGeneralSearchList_search_generalsearch on Query {
  search_generalsearch(filter: $filter) {
    edges {
      node {
        ...DashBoardGeneralSearchRow_ninode
      }
    }
  }
}

fragment DashBoardGeneralSearchRow_ninode on GeneralSearch {
  match_txt
  ninode {
    __typename
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter",
    "type": "GenericFilter"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DashBoardGeneralSearchBlockQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "DashBoardGeneralSearchList_search_generalsearch"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DashBoardGeneralSearchBlockQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "filter",
            "variableName": "filter"
          }
        ],
        "concreteType": "GeneralSearchConnection",
        "kind": "LinkedField",
        "name": "search_generalsearch",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "GeneralSearchEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "GeneralSearch",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "match_txt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ninode",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      },
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
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DashBoardGeneralSearchBlockQuery",
    "operationKind": "query",
    "text": "query DashBoardGeneralSearchBlockQuery(\n  $filter: GenericFilter\n) {\n  ...DashBoardGeneralSearchList_search_generalsearch\n}\n\nfragment DashBoardGeneralSearchList_search_generalsearch on Query {\n  search_generalsearch(filter: $filter) {\n    edges {\n      node {\n        ...DashBoardGeneralSearchRow_ninode\n      }\n    }\n  }\n}\n\nfragment DashBoardGeneralSearchRow_ninode on GeneralSearch {\n  match_txt\n  ninode {\n    __typename\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '228d2ea24c3a937b6d9eace705658006';

module.exports = node;
