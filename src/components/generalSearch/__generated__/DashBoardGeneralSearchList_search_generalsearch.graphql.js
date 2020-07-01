/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type DashBoardGeneralSearchRow_ninode$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type DashBoardGeneralSearchList_search_generalsearch$ref: FragmentReference;
declare export opaque type DashBoardGeneralSearchList_search_generalsearch$fragmentType: DashBoardGeneralSearchList_search_generalsearch$ref;
export type DashBoardGeneralSearchList_search_generalsearch = {|
  +search_generalsearch: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: DashBoardGeneralSearchRow_ninode$ref
      |}
    |}>
  |},
  +$refType: DashBoardGeneralSearchList_search_generalsearch$ref,
|};
export type DashBoardGeneralSearchList_search_generalsearch$data = DashBoardGeneralSearchList_search_generalsearch;
export type DashBoardGeneralSearchList_search_generalsearch$key = {
  +$data?: DashBoardGeneralSearchList_search_generalsearch$data,
  +$fragmentRefs: DashBoardGeneralSearchList_search_generalsearch$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "filter",
      "type": "GenericFilter"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "DashBoardGeneralSearchList_search_generalsearch",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "filter",
          "variableName": "filter"
        }
      ],
      "concreteType": "GeneralSearchConnection",
      "kind": "LinkedField",
      "name": "search_generalsearch",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "GeneralSearchEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "GeneralSearch",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "DashBoardGeneralSearchRow_ninode"
                }
              ],
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
(node/*: any*/).hash = '3b6c14eb30c339742ed60193b87fb9a4';

module.exports = node;
