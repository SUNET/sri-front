/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FirewallList_firewalls$ref = any;
export type FirewallOrderBy = "backup_ASC" | "backup_DESC" | "contract_number_ASC" | "contract_number_DESC" | "created_ASC" | "created_DESC" | "description_ASC" | "description_DESC" | "end_support_ASC" | "end_support_DESC" | "handle_id_ASC" | "handle_id_DESC" | "managed_by_ASC" | "managed_by_DESC" | "max_number_of_ports_ASC" | "max_number_of_ports_DESC" | "model_ASC" | "model_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "operational_state_ASC" | "operational_state_DESC" | "os_ASC" | "os_DESC" | "os_version_ASC" | "os_version_DESC" | "rack_position_ASC" | "rack_position_DESC" | "rack_units_ASC" | "rack_units_DESC" | "security_class_ASC" | "security_class_DESC" | "security_comment_ASC" | "security_comment_DESC" | "service_tag_ASC" | "service_tag_DESC" | "vendor_ASC" | "vendor_DESC" | "%future added value";
export type FirewallListForwardQueryVariables = {|
  count: number,
  cursor?: ?string,
  orderBy?: ?FirewallOrderBy,
|};
export type FirewallListForwardQueryResponse = {|
  +$fragmentRefs: FirewallList_firewalls$ref
|};
export type FirewallListForwardQuery = {|
  variables: FirewallListForwardQueryVariables,
  response: FirewallListForwardQueryResponse,
|};
*/


/*
query FirewallListForwardQuery(
  $count: Int!
  $cursor: String
  $orderBy: FirewallOrderBy
) {
  ...FirewallList_firewalls_32czeo
}

fragment FirewallList_firewalls_32czeo on Query {
  firewalls(first: $count, after: $cursor, orderBy: $orderBy) {
    edges {
      node {
        id
        ...FirewallRow_firewall
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

fragment FirewallRow_firewall on Firewall {
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
    "type": "FirewallOrderBy"
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
    "name": "FirewallListForwardQuery",
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
        "name": "FirewallList_firewalls"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FirewallListForwardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "firewallConnection",
        "kind": "LinkedField",
        "name": "firewalls",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "firewallEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Firewall",
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
        "key": "FirewallList_firewalls",
        "kind": "LinkedHandle",
        "name": "firewalls"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FirewallListForwardQuery",
    "operationKind": "query",
    "text": "query FirewallListForwardQuery(\n  $count: Int!\n  $cursor: String\n  $orderBy: FirewallOrderBy\n) {\n  ...FirewallList_firewalls_32czeo\n}\n\nfragment FirewallList_firewalls_32czeo on Query {\n  firewalls(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...FirewallRow_firewall\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment FirewallRow_firewall on Firewall {\n  id\n  name\n  description\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd043c517f159633eedcfd21d59f51cbb';

module.exports = node;
