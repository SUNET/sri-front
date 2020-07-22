/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ExternalEquipmentRow_externalEquipment$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExternalEquipmentList_externalEquipments$ref: FragmentReference;
declare export opaque type ExternalEquipmentList_externalEquipments$fragmentType: ExternalEquipmentList_externalEquipments$ref;
export type ExternalEquipmentList_externalEquipments = {|
  +externalEquipments: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: ExternalEquipmentRow_externalEquipment$ref,
      |}
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +endCursor: ?string,
    |},
  |},
  +$refType: ExternalEquipmentList_externalEquipments$ref,
|};
export type ExternalEquipmentList_externalEquipments$data = ExternalEquipmentList_externalEquipments;
export type ExternalEquipmentList_externalEquipments$key = {
  +$data?: ExternalEquipmentList_externalEquipments$data,
  +$fragmentRefs: ExternalEquipmentList_externalEquipments$ref,
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
      "type": "ExternalEquipmentFilter"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "orderBy",
      "type": "ExternalEquipmentOrderBy"
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
          "externalEquipments"
        ]
      }
    ]
  },
  "name": "ExternalEquipmentList_externalEquipments",
  "selections": [
    {
      "alias": "externalEquipments",
      "args": null,
      "concreteType": "externalEquipmentConnection",
      "kind": "LinkedField",
      "name": "__ExternalEquipmentList_externalEquipments_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "externalEquipmentEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ExternalEquipment",
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
                  "name": "ExternalEquipmentRow_externalEquipment"
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
(node/*: any*/).hash = '1bff6ef76ccba3ef094d07e9ba8f35d2';

module.exports = node;
