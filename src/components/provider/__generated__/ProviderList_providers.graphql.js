/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ProviderRow_provider$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProviderList_providers$ref: FragmentReference;
declare export opaque type ProviderList_providers$fragmentType: ProviderList_providers$ref;
export type ProviderList_providers = {|
  +providers: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: ProviderRow_provider$ref,
      |}
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +endCursor: ?string,
    |},
  |},
  +$refType: ProviderList_providers$ref,
|};
export type ProviderList_providers$data = ProviderList_providers;
export type ProviderList_providers$key = {
  +$data?: ProviderList_providers$data,
  +$fragmentRefs: ProviderList_providers$ref,
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
      "type": "ProviderFilter"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "orderBy",
      "type": "ProviderOrderBy"
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
          "providers"
        ]
      }
    ]
  },
  "name": "ProviderList_providers",
  "selections": [
    {
      "alias": "providers",
      "args": null,
      "concreteType": "providerConnection",
      "kind": "LinkedField",
      "name": "__ProviderList_providers_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "providerEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Provider",
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
                  "name": "ProviderRow_provider"
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
(node/*: any*/).hash = 'cdb2b80f9aca30ca152d7abc18dd59e5';

module.exports = node;
