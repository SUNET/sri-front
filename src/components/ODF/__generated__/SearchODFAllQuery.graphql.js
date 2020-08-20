/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ODFList_odfs$ref = any;
export type ODFOrderBy = "created_ASC" | "created_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "max_number_of_ports_ASC" | "max_number_of_ports_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "operational_state_ASC" | "operational_state_DESC" | "rack_position_ASC" | "rack_position_DESC" | "rack_units_ASC" | "rack_units_DESC" | "%future added value";
export type ODFFilter = {|
  AND?: ?$ReadOnlyArray<ODFNestedFilter>,
  OR?: ?$ReadOnlyArray<ODFNestedFilter>,
|};
export type ODFNestedFilter = {|
  name?: ?string,
  name_not?: ?string,
  name_lt?: ?string,
  name_lte?: ?string,
  name_gt?: ?string,
  name_gte?: ?string,
  name_contains?: ?string,
  name_not_contains?: ?string,
  name_starts_with?: ?string,
  name_not_starts_with?: ?string,
  name_ends_with?: ?string,
  name_not_ends_with?: ?string,
  name_in?: ?$ReadOnlyArray<string>,
  name_not_in?: ?$ReadOnlyArray<string>,
  description?: ?string,
  description_not?: ?string,
  description_lt?: ?string,
  description_lte?: ?string,
  description_gt?: ?string,
  description_gte?: ?string,
  description_contains?: ?string,
  description_not_contains?: ?string,
  description_starts_with?: ?string,
  description_not_starts_with?: ?string,
  description_ends_with?: ?string,
  description_not_ends_with?: ?string,
  description_in?: ?$ReadOnlyArray<string>,
  description_not_in?: ?$ReadOnlyArray<string>,
  operational_state?: ?any,
  operational_state_not?: ?any,
  operational_state_lt?: ?any,
  operational_state_lte?: ?any,
  operational_state_gt?: ?any,
  operational_state_gte?: ?any,
  operational_state_contains?: ?any,
  operational_state_not_contains?: ?any,
  operational_state_starts_with?: ?any,
  operational_state_not_starts_with?: ?any,
  operational_state_ends_with?: ?any,
  operational_state_not_ends_with?: ?any,
  operational_state_in?: ?$ReadOnlyArray<any>,
  operational_state_not_in?: ?$ReadOnlyArray<any>,
  rack_units?: ?number,
  rack_units_not?: ?number,
  rack_units_lt?: ?number,
  rack_units_lte?: ?number,
  rack_units_gt?: ?number,
  rack_units_gte?: ?number,
  rack_units_in?: ?$ReadOnlyArray<number>,
  rack_units_not_in?: ?$ReadOnlyArray<number>,
  rack_position?: ?number,
  rack_position_not?: ?number,
  rack_position_lt?: ?number,
  rack_position_lte?: ?number,
  rack_position_gt?: ?number,
  rack_position_gte?: ?number,
  rack_position_in?: ?$ReadOnlyArray<number>,
  rack_position_not_in?: ?$ReadOnlyArray<number>,
  rack_back?: ?boolean,
  rack_back_not?: ?boolean,
  rack_back_lt?: ?boolean,
  rack_back_lte?: ?boolean,
  rack_back_gt?: ?boolean,
  rack_back_gte?: ?boolean,
  rack_back_in?: ?$ReadOnlyArray<boolean>,
  rack_back_not_in?: ?$ReadOnlyArray<boolean>,
  max_number_of_ports?: ?number,
  max_number_of_ports_not?: ?number,
  max_number_of_ports_lt?: ?number,
  max_number_of_ports_lte?: ?number,
  max_number_of_ports_gt?: ?number,
  max_number_of_ports_gte?: ?number,
  max_number_of_ports_in?: ?$ReadOnlyArray<number>,
  max_number_of_ports_not_in?: ?$ReadOnlyArray<number>,
  id?: ?string,
  id_not?: ?string,
  id_lt?: ?string,
  id_lte?: ?string,
  id_gt?: ?string,
  id_gte?: ?string,
  id_in?: ?$ReadOnlyArray<string>,
  id_not_in?: ?$ReadOnlyArray<string>,
  created?: ?any,
  created_not?: ?any,
  created_lt?: ?any,
  created_lte?: ?any,
  created_gt?: ?any,
  created_gte?: ?any,
  created_in?: ?$ReadOnlyArray<any>,
  created_not_in?: ?$ReadOnlyArray<any>,
  modified?: ?any,
  modified_not?: ?any,
  modified_lt?: ?any,
  modified_lte?: ?any,
  modified_gt?: ?any,
  modified_gte?: ?any,
  modified_in?: ?$ReadOnlyArray<any>,
  modified_not_in?: ?$ReadOnlyArray<any>,
  creator?: ?UserInputType,
  creator_not?: ?UserInputType,
  creator_lt?: ?UserInputType,
  creator_lte?: ?UserInputType,
  creator_gt?: ?UserInputType,
  creator_gte?: ?UserInputType,
  creator_contains?: ?UserInputType,
  creator_not_contains?: ?UserInputType,
  creator_starts_with?: ?UserInputType,
  creator_not_starts_with?: ?UserInputType,
  creator_ends_with?: ?UserInputType,
  creator_not_ends_with?: ?UserInputType,
  creator_in?: ?$ReadOnlyArray<UserInputType>,
  creator_not_in?: ?$ReadOnlyArray<UserInputType>,
  modifier?: ?UserInputType,
  modifier_not?: ?UserInputType,
  modifier_lt?: ?UserInputType,
  modifier_lte?: ?UserInputType,
  modifier_gt?: ?UserInputType,
  modifier_gte?: ?UserInputType,
  modifier_contains?: ?UserInputType,
  modifier_not_contains?: ?UserInputType,
  modifier_starts_with?: ?UserInputType,
  modifier_not_starts_with?: ?UserInputType,
  modifier_ends_with?: ?UserInputType,
  modifier_not_ends_with?: ?UserInputType,
  modifier_in?: ?$ReadOnlyArray<UserInputType>,
  modifier_not_in?: ?$ReadOnlyArray<UserInputType>,
|};
export type UserInputType = {|
  username: string
|};
export type SearchODFAllQueryVariables = {|
  count: number,
  filter?: ?ODFFilter,
  orderBy?: ?ODFOrderBy,
|};
export type SearchODFAllQueryResponse = {|
  +$fragmentRefs: ODFList_odfs$ref
|};
export type SearchODFAllQuery = {|
  variables: SearchODFAllQueryVariables,
  response: SearchODFAllQueryResponse,
|};
*/


/*
query SearchODFAllQuery(
  $count: Int!
  $filter: ODFFilter
  $orderBy: ODFOrderBy
) {
  ...ODFList_odfs_1tT5Hu
}

fragment ODFList_odfs_1tT5Hu on Query {
  odfs(first: $count, filter: $filter, orderBy: $orderBy) {
    edges {
      node {
        id
        ...ODFRow_ODF
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

fragment ODFRow_ODF on ODF {
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
    "name": "filter",
    "type": "ODFFilter"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "ODFOrderBy"
  }
],
v1 = {
  "kind": "Variable",
  "name": "filter",
  "variableName": "filter"
},
v2 = {
  "kind": "Variable",
  "name": "orderBy",
  "variableName": "orderBy"
},
v3 = [
  (v1/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchODFAllQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "ODFList_odfs"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchODFAllQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "odfConnection",
        "kind": "LinkedField",
        "name": "odfs",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "odfEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ODF",
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
        "args": (v3/*: any*/),
        "filters": [],
        "handle": "connection",
        "key": "ODFList_odfs",
        "kind": "LinkedHandle",
        "name": "odfs"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SearchODFAllQuery",
    "operationKind": "query",
    "text": "query SearchODFAllQuery(\n  $count: Int!\n  $filter: ODFFilter\n  $orderBy: ODFOrderBy\n) {\n  ...ODFList_odfs_1tT5Hu\n}\n\nfragment ODFList_odfs_1tT5Hu on Query {\n  odfs(first: $count, filter: $filter, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...ODFRow_ODF\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment ODFRow_ODF on ODF {\n  id\n  name\n  description\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '43601166054e249197646fe85704cca7';

module.exports = node;
