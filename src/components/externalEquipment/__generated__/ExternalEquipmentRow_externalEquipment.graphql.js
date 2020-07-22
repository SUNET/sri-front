/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExternalEquipmentRow_externalEquipment$ref: FragmentReference;
declare export opaque type ExternalEquipmentRow_externalEquipment$fragmentType: ExternalEquipmentRow_externalEquipment$ref;
export type ExternalEquipmentRow_externalEquipment = {|
  +id: string,
  +name: string,
  +description: ?string,
  +$refType: ExternalEquipmentRow_externalEquipment$ref,
|};
export type ExternalEquipmentRow_externalEquipment$data = ExternalEquipmentRow_externalEquipment;
export type ExternalEquipmentRow_externalEquipment$key = {
  +$data?: ExternalEquipmentRow_externalEquipment$data,
  +$fragmentRefs: ExternalEquipmentRow_externalEquipment$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExternalEquipmentRow_externalEquipment",
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
  "type": "ExternalEquipment"
};
// prettier-ignore
(node/*: any*/).hash = '5fa8a9c5c900c1c655a8903a8b2317ab';

module.exports = node;
