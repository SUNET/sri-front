/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HostList_hosts$ref = any;
export type HostOrderBy = "backup_ASC" | "backup_DESC" | "contract_number_ASC" | "contract_number_DESC" | "created_ASC" | "created_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "host_services_ASC" | "host_services_DESC" | "host_type_ASC" | "host_type_DESC" | "managed_by_ASC" | "managed_by_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "operational_state_ASC" | "operational_state_DESC" | "os_ASC" | "os_DESC" | "os_version_ASC" | "os_version_DESC" | "rack_position_ASC" | "rack_position_DESC" | "rack_units_ASC" | "rack_units_DESC" | "%future added value";
export type HostListForwardQueryVariables = {|
  count: number,
  cursor?: ?string,
  orderBy?: ?HostOrderBy,
|};
export type HostListForwardQueryResponse = {|
  +$fragmentRefs: HostList_hosts$ref
|};
export type HostListForwardQuery = {|
  variables: HostListForwardQueryVariables,
  response: HostListForwardQueryResponse,
|};
*/


/*
query HostListForwardQuery(
  $count: Int!
  $cursor: String
  $orderBy: HostOrderBy
) {
  ...HostList_hosts_32czeo
}

fragment HostList_hosts_32czeo on Query {
  hosts(first: $count, after: $cursor, orderBy: $orderBy) {
    edges {
      node {
        id
        ...HostRow_host
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

fragment HostRow_host on Host {
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
    "type": "HostOrderBy"
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
    "name": "HostListForwardQuery",
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
        "name": "HostList_hosts"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HostListForwardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "hostConnection",
        "kind": "LinkedField",
        "name": "hosts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "hostEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Host",
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
        "key": "HostList_hosts",
        "kind": "LinkedHandle",
        "name": "hosts"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "HostListForwardQuery",
    "operationKind": "query",
    "text": "query HostListForwardQuery(\n  $count: Int!\n  $cursor: String\n  $orderBy: HostOrderBy\n) {\n  ...HostList_hosts_32czeo\n}\n\nfragment HostList_hosts_32czeo on Query {\n  hosts(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...HostRow_host\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment HostRow_host on Host {\n  id\n  name\n  description\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'add39105a17134b3e946df6f767ded3d';

module.exports = node;
