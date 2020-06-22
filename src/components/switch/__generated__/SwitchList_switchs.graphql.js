/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SwitchRow_switch$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SwitchList_switchs$ref: FragmentReference;
declare export opaque type SwitchList_switchs$fragmentType: SwitchList_switchs$ref;
export type SwitchList_switchs = {|
  +switchs: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: SwitchRow_switch$ref,
      |}
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +endCursor: ?string,
    |},
  |},
  +$refType: SwitchList_switchs$ref,
|};
export type SwitchList_switchs$data = SwitchList_switchs;
export type SwitchList_switchs$key = {
  +$data?: SwitchList_switchs$data,
  +$fragmentRefs: SwitchList_switchs$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int"
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
      "name": "filter",
      "type": "SwitchFilter"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "orderBy",
      "type": "SwitchOrderBy"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "switchs"
        ]
      }
    ]
  },
  "name": "SwitchList_switchs",
  "selections": [
    {
      "alias": "switchs",
      "args": null,
      "concreteType": "switchConnection",
      "kind": "LinkedField",
      "name": "__SwitchList_switchs_connection",
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "SwitchRow_switch"
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
    }
  ],
  "type": "Query"
};
// prettier-ignore
(node/*: any*/).hash = '7ce437bc35e8d37592850e8a579fbb2a';

module.exports = node;
