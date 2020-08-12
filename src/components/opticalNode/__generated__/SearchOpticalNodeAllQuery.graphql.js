/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OpticalNodeList_opticalNodes$ref = any;
export type OpticalNodeOrderBy = "created_ASC" | "created_DESC" | "description_ASC" | "description_DESC" | "handle_id_ASC" | "handle_id_DESC" | "modified_ASC" | "modified_DESC" | "name_ASC" | "name_DESC" | "operational_state_ASC" | "operational_state_DESC" | "rack_position_ASC" | "rack_position_DESC" | "rack_units_ASC" | "rack_units_DESC" | "type_ASC" | "type_DESC" | "%future added value";
export type OpticalNodeFilter = {|
  AND?: ?$ReadOnlyArray<OpticalNodeNestedFilter>,
  OR?: ?$ReadOnlyArray<OpticalNodeNestedFilter>,
|};
export type OpticalNodeNestedFilter = {|
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
  type?: ?any,
  type_not?: ?any,
  type_lt?: ?any,
  type_lte?: ?any,
  type_gt?: ?any,
  type_gte?: ?any,
  type_contains?: ?any,
  type_not_contains?: ?any,
  type_starts_with?: ?any,
  type_not_starts_with?: ?any,
  type_ends_with?: ?any,
  type_not_ends_with?: ?any,
  type_in?: ?$ReadOnlyArray<any>,
  type_not_in?: ?$ReadOnlyArray<any>,
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
export type SearchOpticalNodeAllQueryVariables = {|
  count: number,
  filter?: ?OpticalNodeFilter,
  orderBy?: ?OpticalNodeOrderBy,
|};
export type SearchOpticalNodeAllQueryResponse = {|
  +$fragmentRefs: OpticalNodeList_opticalNodes$ref
|};
export type SearchOpticalNodeAllQuery = {|
  variables: SearchOpticalNodeAllQueryVariables,
  response: SearchOpticalNodeAllQueryResponse,
|};
*/


/*
query SearchOpticalNodeAllQuery(
  $count: Int!
  $filter: OpticalNodeFilter
  $orderBy: OpticalNodeOrderBy
) {
  ...OpticalNodeList_opticalNodes_1tT5Hu
}

fragment OpticalNodeList_opticalNodes_1tT5Hu on Query {
  opticalNodes(first: $count, filter: $filter, orderBy: $orderBy) {
    edges {
      node {
        id
        ...OpticalNodeRow_opticalNode
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

fragment OpticalNodeRow_opticalNode on OpticalNode {
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
    "type": "OpticalNodeFilter"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "OpticalNodeOrderBy"
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
    "name": "SearchOpticalNodeAllQuery",
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
        "name": "OpticalNodeList_opticalNodes"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchOpticalNodeAllQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "opticalNodeConnection",
        "kind": "LinkedField",
        "name": "opticalNodes",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "opticalNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "OpticalNode",
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
        "key": "OpticalNodeList_opticalNodes",
        "kind": "LinkedHandle",
        "name": "opticalNodes"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SearchOpticalNodeAllQuery",
    "operationKind": "query",
    "text": "query SearchOpticalNodeAllQuery(\n  $count: Int!\n  $filter: OpticalNodeFilter\n  $orderBy: OpticalNodeOrderBy\n) {\n  ...OpticalNodeList_opticalNodes_1tT5Hu\n}\n\nfragment OpticalNodeList_opticalNodes_1tT5Hu on Query {\n  opticalNodes(first: $count, filter: $filter, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...OpticalNodeRow_opticalNode\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment OpticalNodeRow_opticalNode on OpticalNode {\n  id\n  name\n  description\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '929e7b66cce66e3097ef2af0f22117e3';

module.exports = node;
