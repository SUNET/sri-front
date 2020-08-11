/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PeeringPartnerRow_peeringPartner$ref: FragmentReference;
declare export opaque type PeeringPartnerRow_peeringPartner$fragmentType: PeeringPartnerRow_peeringPartner$ref;
export type PeeringPartnerRow_peeringPartner = {|
  +id: string,
  +name: string,
  +$refType: PeeringPartnerRow_peeringPartner$ref,
|};
export type PeeringPartnerRow_peeringPartner$data = PeeringPartnerRow_peeringPartner;
export type PeeringPartnerRow_peeringPartner$key = {
  +$data?: PeeringPartnerRow_peeringPartner$data,
  +$fragmentRefs: PeeringPartnerRow_peeringPartner$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PeeringPartnerRow_peeringPartner",
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
  "type": "PeeringPartner"
};
// prettier-ignore
(node/*: any*/).hash = 'd3136c73d34ae5552ccba9cdafc8c123';

module.exports = node;
