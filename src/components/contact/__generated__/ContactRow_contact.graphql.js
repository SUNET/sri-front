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
  +id: string,
  +first_name: string,
  +last_name: ?string,
  +contact_type: ?{|
    +name: string,
    +value: string,
  |},
  +modified: any,
  +roles: ?$ReadOnlyArray<?{|
    +name: ?string,
    +end: ?{|
      +name: string
    |},
  |}>,
  +$refType: ContactRow_contact$ref,
|};
export type ContactRow_contact$data = ContactRow_contact;
export type ContactRow_contact$key = {
  +$data?: ContactRow_contact$data,
  +$fragmentRefs: ContactRow_contact$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContactRow_contact",
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
      "name": "first_name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "last_name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Choice",
      "kind": "LinkedField",
      "name": "contact_type",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "modified",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "RoleRelation",
      "kind": "LinkedField",
      "name": "roles",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Organization",
          "kind": "LinkedField",
          "name": "end",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Contact"
};
})();
// prettier-ignore
(node/*: any*/).hash = '37f31108e13cf2981b9e87c0d58c300d';

module.exports = node;
