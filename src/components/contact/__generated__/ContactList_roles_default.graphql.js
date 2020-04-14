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
  "kind": "Fragment",
  "name": "ContactList_roles_default",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "getRolesFromRoleGroup",
      "storageKey": null,
      "args": null,
      "concreteType": "Role",
      "plural": true,
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7463304cb98b9e3d94ad7ac57dabf5f1';

module.exports = node;
