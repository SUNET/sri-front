/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ODFRow_ODF$ref: FragmentReference;
declare export opaque type ODFRow_ODF$fragmentType: ODFRow_ODF$ref;
export type ODFRow_ODF = {|
  +id: string,
  +name: string,
  +description: ?string,
  +$refType: ODFRow_ODF$ref,
|};
export type ODFRow_ODF$data = ODFRow_ODF;
export type ODFRow_ODF$key = {
  +$data?: ODFRow_ODF$data,
  +$fragmentRefs: ODFRow_ODF$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ODFRow_ODF",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "ODF"
};
// prettier-ignore
(node/*: any*/).hash = '7f1217581d4d57806df17231b7fb1d90';

module.exports = node;
