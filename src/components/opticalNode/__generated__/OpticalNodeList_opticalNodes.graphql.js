/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type OpticalNodeRow_opticalNode$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type OpticalNodeList_opticalNodes$ref: FragmentReference;
declare export opaque type OpticalNodeList_opticalNodes$fragmentType: OpticalNodeList_opticalNodes$ref;
export type OpticalNodeList_opticalNodes = {|
  +opticalNodes: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: OpticalNodeRow_opticalNode$ref,
      |}
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +endCursor: ?string,
    |},
  |},
  +$refType: OpticalNodeList_opticalNodes$ref,
|};
export type OpticalNodeList_opticalNodes$data = OpticalNodeList_opticalNodes;
export type OpticalNodeList_opticalNodes$key = {
  +$data?: OpticalNodeList_opticalNodes$data,
  +$fragmentRefs: OpticalNodeList_opticalNodes$ref,
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
      "type": "OpticalNodeFilter"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "orderBy",
      "type": "OpticalNodeOrderBy"
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
          "opticalNodes"
        ]
      }
    ]
  },
  "name": "OpticalNodeList_opticalNodes",
  "selections": [
    {
      "alias": "opticalNodes",
      "args": null,
      "concreteType": "opticalNodeConnection",
      "kind": "LinkedField",
      "name": "__OpticalNodeList_opticalNodes_connection",
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "OpticalNodeRow_opticalNode"
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
(node/*: any*/).hash = '4ae3f7e6b26aa67018aa05fe50bc6136';

module.exports = node;
