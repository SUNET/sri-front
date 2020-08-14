/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PeeringGroupRow_peeringGroup$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PeeringGroupList_peeringGroups$ref: FragmentReference;
declare export opaque type PeeringGroupList_peeringGroups$fragmentType: PeeringGroupList_peeringGroups$ref;
export type PeeringGroupList_peeringGroups = {|
  +peeringGroups: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: PeeringGroupRow_peeringGroup$ref,
      |}
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +endCursor: ?string,
    |},
  |},
  +$refType: PeeringGroupList_peeringGroups$ref,
|};
export type PeeringGroupList_peeringGroups$data = PeeringGroupList_peeringGroups;
export type PeeringGroupList_peeringGroups$key = {
  +$data?: PeeringGroupList_peeringGroups$data,
  +$fragmentRefs: PeeringGroupList_peeringGroups$ref,
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
      "type": "PeeringGroupFilter"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "orderBy",
      "type": "PeeringGroupOrderBy"
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
          "peeringGroups"
        ]
      }
    ]
  },
  "name": "PeeringGroupList_peeringGroups",
  "selections": [
    {
      "alias": "peeringGroups",
      "args": null,
      "concreteType": "peeringGroupConnection",
      "kind": "LinkedField",
      "name": "__PeeringGroupList_peeringGroups_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "peeringGroupEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "PeeringGroup",
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
                  "name": "PeeringGroupRow_peeringGroup"
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
(node/*: any*/).hash = 'ecaac3f1df37432f5f4522434b3a95d9';

module.exports = node;
