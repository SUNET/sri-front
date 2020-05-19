/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ContactList_roles_default$ref: FragmentReference;
declare export opaque type ContactList_roles_default$fragmentType: ContactList_roles_default$ref;
export type ContactList_roles_default = {|
  +getRolesFromRoleGroup: ?$ReadOnlyArray<?{|
    +id: string,
    +name: string,
  |}>,
  +$refType: ContactList_roles_default$ref,
|};
export type ContactList_roles_default$data = ContactList_roles_default;
export type ContactList_roles_default$key = {
  +$data?: ContactList_roles_default$data,
  +$fragmentRefs: ContactList_roles_default$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContactList_roles_default",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Role",
      "kind": "LinkedField",
      "name": "getRolesFromRoleGroup",
      "plural": true,
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
      "storageKey": null
    }
  ],
  "type": "Query"
};
// prettier-ignore
(node/*: any*/).hash = '7463304cb98b9e3d94ad7ac57dabf5f1';

module.exports = node;
