/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProviderRow_provider$ref: FragmentReference;
declare export opaque type ProviderRow_provider$fragmentType: ProviderRow_provider$ref;
export type ProviderRow_provider = {|
  +id: string,
  +name: string,
  +description: ?string,
  +url: ?string,
  +$refType: ProviderRow_provider$ref,
|};
export type ProviderRow_provider$data = ProviderRow_provider;
export type ProviderRow_provider$key = {
  +$data?: ProviderRow_provider$data,
  +$fragmentRefs: ProviderRow_provider$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProviderRow_provider",
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
  "type": "Provider"
};
// prettier-ignore
(node/*: any*/).hash = '5cfc2e46b7611fce53777237fe07abf8';

module.exports = node;
