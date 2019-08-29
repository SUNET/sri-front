/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ContactRow_contact$ref: FragmentReference;
declare export opaque type ContactRow_contact$fragmentType: ContactRow_contact$ref;
export type ContactRow_contact = {|
  +handle_id: string,
  +first_name: string,
  +last_name: string,
  +contact_type: ?string,
  +modified: any,
  +roles: ?$ReadOnlyArray<?{|
    +name: ?string,
    +end_node: ?{|
      +name: string
    |},
  |}>,
  +$refType: ContactRow_contact$ref,
|};
export type ContactRow_contact$data = ContactRow_contact;
export type ContactRow_contact$key = {
  +$data?: ContactRow_contact$data,
  +$fragmentRefs: ContactRow_contact$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ContactRow_contact",
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
      "name": "contact_type",
      "args": null,
      "storageKey": null
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
      "name": "roles",
      "storageKey": null,
      "args": null,
      "concreteType": "RoleRelation",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "end_node",
          "storageKey": null,
          "args": null,
          "concreteType": "Organization",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '56e2d00da0d4fabb44f0f3f8a81a5b9f';
module.exports = node;
