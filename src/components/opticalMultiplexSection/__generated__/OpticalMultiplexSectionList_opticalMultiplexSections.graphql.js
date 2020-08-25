/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type OpticalMultiplexSectionRow_opticalMultiplexSection$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type OpticalMultiplexSectionList_opticalMultiplexSections$ref: FragmentReference;
declare export opaque type OpticalMultiplexSectionList_opticalMultiplexSections$fragmentType: OpticalMultiplexSectionList_opticalMultiplexSections$ref;
export type OpticalMultiplexSectionList_opticalMultiplexSections = {|
  +opticalMultiplexSections: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: OpticalMultiplexSectionRow_opticalMultiplexSection$ref,
      |}
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +endCursor: ?string,
    |},
  |},
  +$refType: OpticalMultiplexSectionList_opticalMultiplexSections$ref,
|};
export type OpticalMultiplexSectionList_opticalMultiplexSections$data = OpticalMultiplexSectionList_opticalMultiplexSections;
export type OpticalMultiplexSectionList_opticalMultiplexSections$key = {
  +$data?: OpticalMultiplexSectionList_opticalMultiplexSections$data,
  +$fragmentRefs: OpticalMultiplexSectionList_opticalMultiplexSections$ref,
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
      "type": "OpticalMultiplexSectionFilter"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "orderBy",
      "type": "OpticalMultiplexSectionOrderBy"
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
          "opticalMultiplexSections"
        ]
      }
    ]
  },
  "name": "OpticalMultiplexSectionList_opticalMultiplexSections",
  "selections": [
    {
      "alias": "opticalMultiplexSections",
      "args": null,
      "concreteType": "opticalMultiplexSectionConnection",
      "kind": "LinkedField",
      "name": "__OpticalMultiplexSectionList_opticalMultiplexSections_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "opticalMultiplexSectionEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "OpticalMultiplexSection",
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
                  "name": "OpticalMultiplexSectionRow_opticalMultiplexSection"
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
(node/*: any*/).hash = 'b80383ebac87051f78ddd4ec3a622962';

module.exports = node;
