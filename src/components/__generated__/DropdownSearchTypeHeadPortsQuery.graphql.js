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
        +type: ?{|
          +id: string,
          +name: string,
          +value: string,
        |},
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
        type: port_type {
          id
          name
          value
        }
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
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
              (v1/*: any*/),
              (v2/*: any*/),
              {
                "alias": "type",
                "args": null,
                "concreteType": "Choice",
                "kind": "LinkedField",
                "name": "port_type",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "value",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DropdownSearchTypeHeadPortsQuery",
    "selections": (v3/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DropdownSearchTypeHeadPortsQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DropdownSearchTypeHeadPortsQuery",
    "operationKind": "query",
    "text": "query DropdownSearchTypeHeadPortsQuery(\n  $filter: GenericFilter\n) {\n  search_port(filter: $filter) {\n    edges {\n      node {\n        id\n        name\n        type: port_type {\n          id\n          name\n          value\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '88a89998c4739f36310bbea6994e3cc1';

module.exports = node;
