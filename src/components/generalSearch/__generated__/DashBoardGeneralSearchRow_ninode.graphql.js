/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DashBoardGeneralSearchRow_ninode$ref: FragmentReference;
declare export opaque type DashBoardGeneralSearchRow_ninode$fragmentType: DashBoardGeneralSearchRow_ninode$ref;
export type DashBoardGeneralSearchRow_ninode = {|
  +match_txt: ?string,
  +ninode: {|
    +__typename: string,
    +id: string,
    +name: string,
  |},
  +$refType: DashBoardGeneralSearchRow_ninode$ref,
|};
export type DashBoardGeneralSearchRow_ninode$data = DashBoardGeneralSearchRow_ninode;
export type DashBoardGeneralSearchRow_ninode$key = {
  +$data?: DashBoardGeneralSearchRow_ninode$data,
  +$fragmentRefs: DashBoardGeneralSearchRow_ninode$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DashBoardGeneralSearchRow_ninode",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "match_txt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "ninode",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
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
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GeneralSearch"
};
// prettier-ignore
(node/*: any*/).hash = '36bd61d555a071ef1def087059604729';

module.exports = node;
