/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PeeringPartnerRow_peeringPartner$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PeeringPartnerList_peeringPartners$ref: FragmentReference;
declare export opaque type PeeringPartnerList_peeringPartners$fragmentType: PeeringPartnerList_peeringPartners$ref;
export type PeeringPartnerList_peeringPartners = {|
  +peeringPartners: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: PeeringPartnerRow_peeringPartner$ref,
      |}
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +endCursor: ?string,
    |},
  |},
  +$refType: PeeringPartnerList_peeringPartners$ref,
|};
export type PeeringPartnerList_peeringPartners$data = PeeringPartnerList_peeringPartners;
export type PeeringPartnerList_peeringPartners$key = {
  +$data?: PeeringPartnerList_peeringPartners$data,
  +$fragmentRefs: PeeringPartnerList_peeringPartners$ref,
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
      "type": "PeeringPartnerFilter"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "orderBy",
      "type": "PeeringPartnerOrderBy"
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
          "peeringPartners"
        ]
      }
    ]
  },
  "name": "PeeringPartnerList_peeringPartners",
  "selections": [
    {
      "alias": "peeringPartners",
      "args": null,
      "concreteType": "peeringPartnerConnection",
      "kind": "LinkedField",
      "name": "__PeeringPartnerList_peeringPartners_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "peeringPartnerEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "PeeringPartner",
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
                  "name": "PeeringPartnerRow_peeringPartner"
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
(node/*: any*/).hash = 'c187f92c8cda91132fd122655a0b30e6';

module.exports = node;
