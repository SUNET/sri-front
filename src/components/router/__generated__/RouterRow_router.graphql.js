/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type RouterRow_router$ref: FragmentReference;
declare export opaque type RouterRow_router$fragmentType: RouterRow_router$ref;
export type RouterRow_router = {|
  +id: string,
  +name: string,
  +description: ?string,
  +$refType: RouterRow_router$ref,
|};
export type RouterRow_router$data = RouterRow_router;
export type RouterRow_router$key = {
  +$data?: RouterRow_router$data,
  +$fragmentRefs: RouterRow_router$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RouterRow_router",
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
  "type": "Router"
};
// prettier-ignore
(node/*: any*/).hash = 'c87f41fa8eebb484ad8a4046b840af45';

module.exports = node;
