/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SwitchList_switchs$ref = any;
export type SwitchOrderBy = "backup_ASC" | "backup_DESC" | "contract_number_ASC" | "contract_number_DESC" | "created_ASC" | "created_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "managed_by_ASC" | "managed_by_DESC" | "max_number_of_ports_ASC" | "max_number_of_ports_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "operational_state_ASC" | "operational_state_DESC" | "os_ASC" | "os_DESC" | "os_version_ASC" | "os_version_DESC" | "rack_position_ASC" | "rack_position_DESC" | "rack_units_ASC" | "rack_units_DESC" | "%future added value";
export type SwitchListForwardQueryVariables = {|
  count: number,
  cursor?: ?string,
  orderBy?: ?SwitchOrderBy,
|};
export type SwitchListForwardQueryResponse = {|
  +$fragmentRefs: SwitchList_switchs$ref
|};
export type SwitchListForwardQuery = {|
  variables: SwitchListForwardQueryVariables,
  response: SwitchListForwardQueryResponse,
|};
*/


/*
query SwitchListForwardQuery(
  $count: Int!
  $cursor: String
  $orderBy: SwitchOrderBy
) {
  ...SwitchList_switchs_32czeo
}

fragment SwitchList_switchs_32czeo on Query {
  switchs(first: $count, after: $cursor, orderBy: $orderBy) {
    edges {
      node {
        id
        ...SwitchRow_switch
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

fragment SwitchRow_switch on Switch {
  id
  name
  description
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "SwitchOrderBy"
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
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SwitchListForwardQuery",
    "selections": [
      {
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
        ],
        "kind": "FragmentSpread",
        "name": "SwitchList_switchs"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SwitchListForwardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "switchConnection",
        "kind": "LinkedField",
        "name": "switchs",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "switchEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Switch",
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
                    "name": "__typename",
                    "storageKey": null
                  }
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
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
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
        "args": (v2/*: any*/),
        "filters": [],
        "handle": "connection",
        "key": "SwitchList_switchs",
        "kind": "LinkedHandle",
        "name": "switchs"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SwitchListForwardQuery",
    "operationKind": "query",
    "text": "query SwitchListForwardQuery(\n  $count: Int!\n  $cursor: String\n  $orderBy: SwitchOrderBy\n) {\n  ...SwitchList_switchs_32czeo\n}\n\nfragment SwitchList_switchs_32czeo on Query {\n  switchs(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...SwitchRow_switch\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment SwitchRow_switch on Switch {\n  id\n  name\n  description\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e6684b6694e6155698b36aa709524b14';

module.exports = node;
