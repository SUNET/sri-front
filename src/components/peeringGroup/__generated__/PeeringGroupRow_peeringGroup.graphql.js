/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PeeringGroupRow_peeringGroup$ref: FragmentReference;
declare export opaque type PeeringGroupRow_peeringGroup$fragmentType: PeeringGroupRow_peeringGroup$ref;
export type PeeringGroupRow_peeringGroup = {|
  +id: string,
  +name: string,
  +$refType: PeeringGroupRow_peeringGroup$ref,
|};
export type PeeringGroupRow_peeringGroup$data = PeeringGroupRow_peeringGroup;
export type PeeringGroupRow_peeringGroup$key = {
  +$data?: PeeringGroupRow_peeringGroup$data,
  +$fragmentRefs: PeeringGroupRow_peeringGroup$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PeeringGroupRow_peeringGroup",
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
    }
  ],
  "type": "PeeringGroup"
};
// prettier-ignore
(node/*: any*/).hash = '3f025820c4c4a4dfca4f16437b4be3e5';

module.exports = node;
