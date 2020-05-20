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
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SiteOwnerRow_siteOwner",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "type": "SiteOwner"
};
// prettier-ignore
(node/*: any*/).hash = 'b9b542c3f8b6bcbc6960300d837bb320';

module.exports = node;
