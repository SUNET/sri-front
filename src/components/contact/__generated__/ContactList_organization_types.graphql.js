/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ContactList_organization_types$ref: FragmentReference;
declare export opaque type ContactList_organization_types$fragmentType: ContactList_organization_types$ref;
export type ContactList_organization_types = {|
  +getChoicesForDropdown: ?$ReadOnlyArray<?{|
    +name: string,
    +value: string,
  |}>,
  +$refType: ContactList_organization_types$ref,
|};
export type ContactList_organization_types$data = ContactList_organization_types;
export type ContactList_organization_types$key = {
  +$data?: ContactList_organization_types$data,
  +$fragmentRefs: ContactList_organization_types$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContactList_organization_types",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "name",
          "value": "organization_types"
        }
      ],
      "concreteType": "Choice",
      "kind": "LinkedField",
      "name": "getChoicesForDropdown",
      "plural": true,
      "selections": [
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
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": "getChoicesForDropdown(name:\"organization_types\")"
    }
  ],
  "type": "Query"
};
// prettier-ignore
(node/*: any*/).hash = 'e7989c57b3c315494fd94e7cc9104e80';

module.exports = node;
