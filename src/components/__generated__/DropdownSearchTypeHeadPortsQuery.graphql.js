/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GenericFilter = {|
  query: string
|};
export type DropdownSearchTypeHeadPortsQueryVariables = {|
  filter?: ?GenericFilter
|};
export type DropdownSearchTypeHeadPortsQueryResponse = {|
  +search_port: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
      |}
    |}>
  |}
|};
export type DropdownSearchTypeHeadPortsQuery = {|
  variables: DropdownSearchTypeHeadPortsQueryVariables,
  response: DropdownSearchTypeHeadPortsQueryResponse,
|};
*/


/*
query DropdownSearchTypeHeadPortsQuery(
  $filter: GenericFilter
) {
  search_port(filter: $filter) {
    edges {
      node {
        id
        name
      }
    }
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
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter"
      }
    ],
    "concreteType": "PortSearchConnection",
    "kind": "LinkedField",
    "name": "search_port",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PortSearchEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Port",
            "kind": "LinkedField",
            "name": "node",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DropdownSearchTypeHeadPortsQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DropdownSearchTypeHeadPortsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DropdownSearchTypeHeadPortsQuery",
    "operationKind": "query",
    "text": "query DropdownSearchTypeHeadPortsQuery(\n  $filter: GenericFilter\n) {\n  search_port(filter: $filter) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'caa12aed120b854f7678da1aad931689';

module.exports = node;
