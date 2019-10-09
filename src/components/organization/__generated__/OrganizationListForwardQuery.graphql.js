/**
 * @flow
 * @relayHash e67f96bdbb5b2c2c0575ac1ae898078b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OrganizationList_organizations$ref = any;
export type OrganizationOrderBy = "created_ASC" | "created_DESC" | "creator_ASC" | "creator_DESC" | "customer_id_ASC" | "customer_id_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "incident_management_info_ASC" | "incident_management_info_DESC" | "modified_ASC" | "modified_DESC" | "modifier_ASC" | "modifier_DESC" | "name_ASC" | "name_DESC" | "type_ASC" | "type_DESC" | "%future added value";
export type OrganizationListForwardQueryVariables = {|
  count: number,
  cursor?: ?string,
  orderBy?: ?OrganizationOrderBy,
|};
export type OrganizationListForwardQueryResponse = {|
  +$fragmentRefs: OrganizationList_organizations$ref
|};
export type OrganizationListForwardQuery = {|
  variables: OrganizationListForwardQueryVariables,
  response: OrganizationListForwardQueryResponse,
|};
*/


/*
query OrganizationListForwardQuery(
  $count: Int!
  $cursor: String
  $orderBy: OrganizationOrderBy
) {
  ...OrganizationList_organizations_32czeo
}

fragment OrganizationList_organizations_32czeo on Query {
  organizations(first: $count, after: $cursor, orderBy: $orderBy) {
    edges {
      node {
        handle_id
        ...OrganizationRow_organization
        id
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

fragment OrganizationRow_organization on Organization {
  handle_id
  name
  type
  incoming {
    name
    relation {
      type
      start {
        handle_id
        node_name
        id
      }
      id
    }
  }
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
    "type": "OrganizationOrderBy",
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
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "handle_id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OrganizationListForwardQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "OrganizationList_organizations",
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
    "name": "OrganizationListForwardQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "organizations",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "OrganizationConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "OrganizationEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Organization",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "incoming",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "DictRelationType",
                    "plural": true,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "relation",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NIRelationType",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "start",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "NINodeHandlerType",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "node_name",
                                "args": null,
                                "storageKey": null
                              },
                              (v6/*: any*/)
                            ]
                          },
                          (v6/*: any*/)
                        ]
                      }
                    ]
                  },
                  (v6/*: any*/),
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
        "name": "organizations",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "OrganizationList_organizations",
        "filters": []
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "OrganizationListForwardQuery",
    "id": null,
    "text": "query OrganizationListForwardQuery(\n  $count: Int!\n  $cursor: String\n  $orderBy: OrganizationOrderBy\n) {\n  ...OrganizationList_organizations_32czeo\n}\n\nfragment OrganizationList_organizations_32czeo on Query {\n  organizations(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        handle_id\n        ...OrganizationRow_organization\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment OrganizationRow_organization on Organization {\n  handle_id\n  name\n  type\n  incoming {\n    name\n    relation {\n      type\n      start {\n        handle_id\n        node_name\n        id\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '69d675821f0848f262523122ed5ce898';
module.exports = node;