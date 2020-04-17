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
  "kind": "Fragment",
  "name": "ProviderRow_provider",
  "type": "Provider",
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
(node/*: any*/).hash = '5cfc2e46b7611fce53777237fe07abf8';

module.exports = node;
