/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type OrganizationRow_organization$ref: FragmentReference;
declare export opaque type OrganizationRow_organization$fragmentType: OrganizationRow_organization$ref;
export type OrganizationRow_organization = {|
  +handle_id: string,
  +name: string,
  +type: ?any,
  +$refType: OrganizationRow_organization$ref,
|};
export type OrganizationRow_organization$data = OrganizationRow_organization;
export type OrganizationRow_organization$key = {
  +$data?: OrganizationRow_organization$data,
  +$fragmentRefs: OrganizationRow_organization$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "OrganizationRow_organization",
  "type": "Organization",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "handle_id",
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
      "name": "type",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'cb1a1cb563e4c090a706cb4f96456606';
module.exports = node;
