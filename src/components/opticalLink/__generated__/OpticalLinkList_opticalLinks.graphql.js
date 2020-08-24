/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type OpticalLinkRow_opticalLink$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type OpticalLinkList_opticalLinks$ref: FragmentReference;
declare export opaque type OpticalLinkList_opticalLinks$fragmentType: OpticalLinkList_opticalLinks$ref;
export type OpticalLinkList_opticalLinks = {|
  +opticalLinks: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: OpticalLinkRow_opticalLink$ref,
      |}
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +endCursor: ?string,
    |},
  |},
  +$refType: OpticalLinkList_opticalLinks$ref,
|};
export type OpticalLinkList_opticalLinks$data = OpticalLinkList_opticalLinks;
export type OpticalLinkList_opticalLinks$key = {
  +$data?: OpticalLinkList_opticalLinks$data,
  +$fragmentRefs: OpticalLinkList_opticalLinks$ref,
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
      "type": "OpticalLinkFilter"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "orderBy",
      "type": "OpticalLinkOrderBy"
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
          "opticalLinks"
        ]
      }
    ]
  },
  "name": "OpticalLinkList_opticalLinks",
  "selections": [
    {
      "alias": "opticalLinks",
      "args": null,
      "concreteType": "opticalLinkConnection",
      "kind": "LinkedField",
      "name": "__OpticalLinkList_opticalLinks_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "opticalLinkEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "OpticalLink",
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
                  "name": "OpticalLinkRow_opticalLink"
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
(node/*: any*/).hash = 'fbaa38e3002d91b8e71ce2320e7d1b77';

module.exports = node;
