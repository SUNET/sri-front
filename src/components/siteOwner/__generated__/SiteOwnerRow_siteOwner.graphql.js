/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SiteOwnerRow_siteOwner$ref: FragmentReference;
declare export opaque type SiteOwnerRow_siteOwner$fragmentType: SiteOwnerRow_siteOwner$ref;
export type SiteOwnerRow_siteOwner = {|
  +id: string,
  +name: string,
  +description: ?string,
  +url: ?string,
  +$refType: SiteOwnerRow_siteOwner$ref,
|};
export type SiteOwnerRow_siteOwner$data = SiteOwnerRow_siteOwner;
export type SiteOwnerRow_siteOwner$key = {
  +$data?: SiteOwnerRow_siteOwner$data,
  +$fragmentRefs: SiteOwnerRow_siteOwner$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SiteOwnerRow_siteOwner",
  "type": "SiteOwner",
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
      "name": "url",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b9b542c3f8b6bcbc6960300d837bb320';
module.exports = node;
