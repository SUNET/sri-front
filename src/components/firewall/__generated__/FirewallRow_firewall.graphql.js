/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type FirewallRow_firewall$ref: FragmentReference;
declare export opaque type FirewallRow_firewall$fragmentType: FirewallRow_firewall$ref;
export type FirewallRow_firewall = {|
  +id: string,
  +name: string,
  +description: ?string,
  +$refType: FirewallRow_firewall$ref,
|};
export type FirewallRow_firewall$data = FirewallRow_firewall;
export type FirewallRow_firewall$key = {
  +$data?: FirewallRow_firewall$data,
  +$fragmentRefs: FirewallRow_firewall$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FirewallRow_firewall",
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
  "type": "Firewall"
};
// prettier-ignore
(node/*: any*/).hash = 'f42623827281bec22dc520d6310f5b41';

module.exports = node;
