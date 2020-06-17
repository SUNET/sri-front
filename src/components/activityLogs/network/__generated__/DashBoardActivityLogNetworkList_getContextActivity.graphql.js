/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type DashBoardActivityLogNetworkRow_log$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type DashBoardActivityLogNetworkList_getContextActivity$ref: FragmentReference;
declare export opaque type DashBoardActivityLogNetworkList_getContextActivity$fragmentType: DashBoardActivityLogNetworkList_getContextActivity$ref;
export type DashBoardActivityLogNetworkList_getContextActivity = {|
  +getContextActivity: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: DashBoardActivityLogNetworkRow_log$ref
      |}
    |}>,
    +pageInfo: {|
      +endCursor: ?string,
      +hasNextPage: boolean,
      +hasPreviousPage: boolean,
      +startCursor: ?string,
    |},
  |},
  +$refType: DashBoardActivityLogNetworkList_getContextActivity$ref,
|};
export type DashBoardActivityLogNetworkList_getContextActivity$data = DashBoardActivityLogNetworkList_getContextActivity;
export type DashBoardActivityLogNetworkList_getContextActivity$key = {
  +$data?: DashBoardActivityLogNetworkList_getContextActivity$data,
  +$fragmentRefs: DashBoardActivityLogNetworkList_getContextActivity$ref,
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
  "name": "DashBoardActivityLogNetworkList_getContextActivity",
  "selections": [
    {
      "alias": "getContextActivity",
      "args": null,
      "concreteType": "ActionConnection",
      "kind": "LinkedField",
      "name": "__DashBoardActivityLogNetworkList_getContextActivity_connection",
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
                  "name": "DashBoardActivityLogNetworkRow_log"
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
(node/*: any*/).hash = 'a9a5897bb2304479de0c0a38382ed66f';

module.exports = node;
