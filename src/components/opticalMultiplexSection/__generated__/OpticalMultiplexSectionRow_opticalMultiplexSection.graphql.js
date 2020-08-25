/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type OpticalMultiplexSectionRow_opticalMultiplexSection$ref: FragmentReference;
declare export opaque type OpticalMultiplexSectionRow_opticalMultiplexSection$fragmentType: OpticalMultiplexSectionRow_opticalMultiplexSection$ref;
export type OpticalMultiplexSectionRow_opticalMultiplexSection = {|
  +id: string,
  +name: string,
  +description: ?string,
  +$refType: OpticalMultiplexSectionRow_opticalMultiplexSection$ref,
|};
export type OpticalMultiplexSectionRow_opticalMultiplexSection$data = OpticalMultiplexSectionRow_opticalMultiplexSection;
export type OpticalMultiplexSectionRow_opticalMultiplexSection$key = {
  +$data?: OpticalMultiplexSectionRow_opticalMultiplexSection$data,
  +$fragmentRefs: OpticalMultiplexSectionRow_opticalMultiplexSection$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OpticalMultiplexSectionRow_opticalMultiplexSection",
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
  "type": "OpticalMultiplexSection"
};
// prettier-ignore
(node/*: any*/).hash = 'bdfc759ddce730aa9f709efa35657b8e';

module.exports = node;
