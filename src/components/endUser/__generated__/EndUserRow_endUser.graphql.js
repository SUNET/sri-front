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
  "kind": "Fragment",
  "name": "EndUserRow_endUser",
  "type": "EndUser",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8782528f56985ed4f577d8c377627de2';

module.exports = node;
