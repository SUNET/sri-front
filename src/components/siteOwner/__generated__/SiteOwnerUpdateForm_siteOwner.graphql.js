/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SiteOwnerUpdateForm_siteOwner$ref: FragmentReference;
declare export opaque type SiteOwnerUpdateForm_siteOwner$fragmentType: SiteOwnerUpdateForm_siteOwner$ref;
export type SiteOwnerUpdateForm_siteOwner = {|
  +id: string,
  +name: string,
  +description: ?string,
  +url: ?string,
  +created: any,
  +creator: {|
    +email: string
  |},
  +modified: any,
  +modifier: {|
    +email: string
  |},
  +$refType: SiteOwnerUpdateForm_siteOwner$ref,
|};
export type SiteOwnerUpdateForm_siteOwner$data = SiteOwnerUpdateForm_siteOwner;
export type SiteOwnerUpdateForm_siteOwner$key = {
  +$data?: SiteOwnerUpdateForm_siteOwner$data,
  +$fragmentRefs: SiteOwnerUpdateForm_siteOwner$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "email",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "SiteOwnerUpdateForm_siteOwner",
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "created",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "creator",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": (v0/*: any*/)
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "modified",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "modifier",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": (v0/*: any*/)
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '8778b73b40da813355cd6a001495eacf';
module.exports = node;
