/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Contact_contact$ref: FragmentReference;
declare export opaque type Contact_contact$fragmentType: Contact_contact$ref;
export type Contact_contact = {|
  +handle_id: string,
  +title: ?string,
  +contact_type: ?string,
  +first_name: string,
  +last_name: string,
  +email: ?string,
  +phone: ?string,
  +PGP_fingerprint: ?string,
  +$refType: Contact_contact$ref,
|};
export type Contact_contact$data = Contact_contact;
export type Contact_contact$key = {
  +$data?: Contact_contact$data,
  +$fragmentRefs: Contact_contact$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Contact_contact",
  "type": "Contact",
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
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "contact_type",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "first_name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "last_name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "phone",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "PGP_fingerprint",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ba34fef64c7ff61d2f493e6a70e99f25';
module.exports = node;
