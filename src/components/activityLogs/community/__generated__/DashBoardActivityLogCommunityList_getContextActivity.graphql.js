/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type DashBoardActivityLogCommunityRow_log$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type DashBoardActivityLogCommunityList_getContextActivity$ref: FragmentReference;
declare export opaque type DashBoardActivityLogCommunityList_getContextActivity$fragmentType: DashBoardActivityLogCommunityList_getContextActivity$ref;
export type DashBoardActivityLogCommunityList_getContextActivity = {|
  +getContextActivity: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: DashBoardActivityLogCommunityRow_log$ref
      |}
    |}>,
    +pageInfo: {|
      +endCursor: ?string,
      +hasNextPage: boolean,
      +hasPreviousPage: boolean,
      +startCursor: ?string,
    |},
  |},
  +$refType: DashBoardActivityLogCommunityList_getContextActivity$ref,
|};
export type DashBoardActivityLogCommunityList_getContextActivity$data = DashBoardActivityLogCommunityList_getContextActivity;
export type DashBoardActivityLogCommunityList_getContextActivity$key = {
  +$data?: DashBoardActivityLogCommunityList_getContextActivity$data,
  +$fragmentRefs: DashBoardActivityLogCommunityList_getContextActivity$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
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
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": null,
        "direction": "forward",
        "path": [
          "getContextActivity"
        ]
      }
    ]
  },
  "name": "DashBoardActivityLogCommunityList_getContextActivity",
  "selections": [
    {
      "alias": "getContextActivity",
      "args": null,
      "concreteType": "ActionConnection",
      "kind": "LinkedField",
      "name": "__DashBoardActivityLogCommunityList_getContextActivity_connection",
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "DashBoardActivityLogCommunityRow_log"
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
    }
  ],
  "type": "Query"
};
// prettier-ignore
(node/*: any*/).hash = 'afde659633e028d3ba75eec6b3c23cdf';

module.exports = node;
