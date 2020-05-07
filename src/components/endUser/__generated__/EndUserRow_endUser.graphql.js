/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EndUserRow_endUser$ref: FragmentReference;
declare export opaque type EndUserRow_endUser$fragmentType: EndUserRow_endUser$ref;
export type EndUserRow_endUser = {|
  +id: string,
  +name: string,
  +description: ?string,
  +url: ?string,
  +$refType: EndUserRow_endUser$ref,
|};
export type EndUserRow_endUser$data = EndUserRow_endUser;
export type EndUserRow_endUser$key = {
  +$data?: EndUserRow_endUser$data,
  +$fragmentRefs: EndUserRow_endUser$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EndUserRow_endUser",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "type": "EndUser"
};
// prettier-ignore
(node/*: any*/).hash = '8782528f56985ed4f577d8c377627de2';

module.exports = node;
