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
  +notes: ?string,
  +title: ?string,
  +contact_type: ?string,
  +first_name: string,
  +last_name: string,
  +pgp_fingerprint: ?string,
  +emails: ?$ReadOnlyArray<?{|
    +handle_id: string,
    +name: string,
    +type: any,
  |}>,
  +phones: ?$ReadOnlyArray<?{|
    +handle_id: string,
    +name: string,
    +type: any,
  |}>,
  +roles: ?$ReadOnlyArray<?{|
    +name: ?string,
    +end: ?{|
      +handle_id: string,
      +name: string,
    |},
  |}>,
  +comments: ?$ReadOnlyArray<?{|
    +id: string,
    +user: ?{|
      +first_name: string,
      +last_name: string,
    |},
    +comment: string,
    +submit_date: any,
  |}>,
  +$refType: Contact_contact$ref,
|};
export type Contact_contact$data = Contact_contact;
export type Contact_contact$key = {
  +$data?: Contact_contact$data,
  +$fragmentRefs: Contact_contact$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "handle_id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = [
  (v0/*: any*/),
  (v3/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "type",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "Contact_contact",
  "type": "Contact",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "notes",
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
    (v1/*: any*/),
    (v2/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "pgp_fingerprint",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "emails",
      "storageKey": null,
      "args": null,
      "concreteType": "Email",
      "plural": true,
      "selections": (v4/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "phones",
      "storageKey": null,
      "args": null,
      "concreteType": "Phone",
      "plural": true,
      "selections": (v4/*: any*/)
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
        (v3/*: any*/),
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "end",
          "storageKey": null,
          "args": null,
          "concreteType": "Organization",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            (v3/*: any*/)
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "comments",
      "storageKey": null,
      "args": null,
      "concreteType": "CommentType",
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
          "kind": "LinkedField",
          "alias": null,
          "name": "user",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": [
            (v1/*: any*/),
            (v2/*: any*/)
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "comment",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "submit_date",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e85771a58374a52b83590600f2f81755';
module.exports = node;
