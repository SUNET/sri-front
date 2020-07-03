/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SwitchRow_switch$ref: FragmentReference;
declare export opaque type SwitchRow_switch$fragmentType: SwitchRow_switch$ref;
export type SwitchRow_switch = {|
  +id: string,
  +name: string,
  +description: ?string,
  +$refType: SwitchRow_switch$ref,
|};
export type SwitchRow_switch$data = SwitchRow_switch;
export type SwitchRow_switch$key = {
  +$data?: SwitchRow_switch$data,
  +$fragmentRefs: SwitchRow_switch$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SwitchRow_switch",
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
  "type": "Switch"
};
// prettier-ignore
(node/*: any*/).hash = 'bed18aafd75dc27da4c52051a07e646b';

module.exports = node;
