/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PortRow_port$ref: FragmentReference;
declare export opaque type PortRow_port$fragmentType: PortRow_port$ref;
export type PortRow_port = {|
  +id: string,
  +name: string,
  +description: ?string,
  +$refType: PortRow_port$ref,
|};
export type PortRow_port$data = PortRow_port;
export type PortRow_port$key = {
  +$data?: PortRow_port$data,
  +$fragmentRefs: PortRow_port$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PortRow_port",
  "type": "Port",
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1d457bf3294737bfc0f0ebc0857c108a';

module.exports = node;
