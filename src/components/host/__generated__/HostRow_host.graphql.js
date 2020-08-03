/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HostRow_host$ref: FragmentReference;
declare export opaque type HostRow_host$fragmentType: HostRow_host$ref;
export type HostRow_host = {|
  +id: string,
  +name: string,
  +description: ?string,
  +$refType: HostRow_host$ref,
|};
export type HostRow_host$data = HostRow_host;
export type HostRow_host$key = {
  +$data?: HostRow_host$data,
  +$fragmentRefs: HostRow_host$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HostRow_host",
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
  "type": "Host"
};
// prettier-ignore
(node/*: any*/).hash = '0c595d9740b96fc54afa35d078af6fbf';

module.exports = node;
