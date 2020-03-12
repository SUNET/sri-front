/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CableRow_cable$ref: FragmentReference;
declare export opaque type CableRow_cable$fragmentType: CableRow_cable$ref;
export type CableRow_cable = {|
  +id: string,
  +name: string,
  +description: ?string,
  +cable_type: ?any,
  +$refType: CableRow_cable$ref,
|};
export type CableRow_cable$data = CableRow_cable;
export type CableRow_cable$key = {
  +$data?: CableRow_cable$data,
  +$fragmentRefs: CableRow_cable$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CableRow_cable",
  "type": "Cable",
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
      "name": "cable_type",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '90cdef8ecf72881d37861ba1902afb66';
module.exports = node;
