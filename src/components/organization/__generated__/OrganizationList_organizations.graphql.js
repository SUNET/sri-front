/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type OrganizationRow_organization$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type OrganizationList_organizations$ref: FragmentReference;
declare export opaque type OrganizationList_organizations$fragmentType: OrganizationList_organizations$ref;
export type OrganizationList_organizations = {|
  +organizations: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: OrganizationRow_organization$ref,
      |}
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +endCursor: ?string,
    |},
  |},
  +$refType: OrganizationList_organizations$ref,
|};
export type OrganizationList_organizations$data = OrganizationList_organizations;
export type OrganizationList_organizations$key = {
  +$data?: OrganizationList_organizations$data,
  +$fragmentRefs: OrganizationList_organizations$ref,
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
      "type": "OrganizationFilter"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "orderBy",
      "type": "OrganizationOrderBy"
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
          "organizations"
        ]
      }
    ]
  },
  "name": "OrganizationList_organizations",
  "selections": [
    {
      "alias": "organizations",
      "args": null,
      "concreteType": "organizationConnection",
      "kind": "LinkedField",
      "name": "__OrganizationList_organizations_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "organizationEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Organization",
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
                  "name": "OrganizationRow_organization"
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
(node/*: any*/).hash = '5b541f8f7059cd284e7cf4bad229e362';

module.exports = node;
