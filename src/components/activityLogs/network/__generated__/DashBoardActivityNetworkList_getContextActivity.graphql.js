/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type DashBoardActivityNetworkRow_log$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type DashBoardActivityNetworkList_getContextActivity$ref: FragmentReference;
declare export opaque type DashBoardActivityNetworkList_getContextActivity$fragmentType: DashBoardActivityNetworkList_getContextActivity$ref;
export type DashBoardActivityNetworkList_getContextActivity = {|
  +getContextActivity: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: DashBoardActivityNetworkRow_log$ref
      |}
    |}>,
    +pageInfo: {|
      +endCursor: ?string,
      +hasNextPage: boolean,
      +hasPreviousPage: boolean,
      +startCursor: ?string,
    |},
  |},
  +$refType: DashBoardActivityNetworkList_getContextActivity$ref,
|};
export type DashBoardActivityNetworkList_getContextActivity$data = DashBoardActivityNetworkList_getContextActivity;
export type DashBoardActivityNetworkList_getContextActivity$key = {
  +$data?: DashBoardActivityNetworkList_getContextActivity$data,
  +$fragmentRefs: DashBoardActivityNetworkList_getContextActivity$ref,
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
  "name": "DashBoardActivityNetworkList_getContextActivity",
  "selections": [
    {
      "alias": "getContextActivity",
      "args": null,
      "concreteType": "ActionConnection",
      "kind": "LinkedField",
      "name": "__DashBoardActivityNetworkList_getContextActivity_connection",
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
                  "name": "DashBoardActivityNetworkRow_log"
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
(node/*: any*/).hash = 'dc0434963bccf3a248b1d94d27217c66';

module.exports = node;
