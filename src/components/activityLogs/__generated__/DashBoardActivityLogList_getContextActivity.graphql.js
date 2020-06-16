/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type DashBoardActivityLogRow_log$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type DashBoardActivityLogList_getContextActivity$ref: FragmentReference;
declare export opaque type DashBoardActivityLogList_getContextActivity$fragmentType: DashBoardActivityLogList_getContextActivity$ref;
export type DashBoardActivityLogList_getContextActivity = {|
  +getContextActivity: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: DashBoardActivityLogRow_log$ref
      |}
    |}>,
    +pageInfo: {|
      +endCursor: ?string,
      +hasNextPage: boolean,
      +hasPreviousPage: boolean,
      +startCursor: ?string,
    |},
  |},
  +$refType: DashBoardActivityLogList_getContextActivity$ref,
|};
export type DashBoardActivityLogList_getContextActivity$data = DashBoardActivityLogList_getContextActivity;
export type DashBoardActivityLogList_getContextActivity$key = {
  +$data?: DashBoardActivityLogList_getContextActivity$data,
  +$fragmentRefs: DashBoardActivityLogList_getContextActivity$ref,
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
  "name": "DashBoardActivityLogList_getContextActivity",
  "selections": [
    {
      "alias": "getContextActivity",
      "args": null,
      "concreteType": "ActionConnection",
      "kind": "LinkedField",
      "name": "__DashBoardActivityLogList_getContextActivity_connection",
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
                  "name": "DashBoardActivityLogRow_log"
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
(node/*: any*/).hash = '2ef0494d397176bc67d26864a930d8de';

module.exports = node;
