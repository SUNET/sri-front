/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ContactUpdateForm_contact$ref: FragmentReference;
declare export opaque type ContactUpdateForm_contact$fragmentType: ContactUpdateForm_contact$ref;
export type ContactUpdateForm_contact = {|
  +id: string,
  +name: string,
  +notes: ?string,
  +title: ?string,
  +contact_type: ?{|
    +name: string,
    +value: string,
  |},
  +first_name: string,
  +last_name: string,
  +pgp_fingerprint: ?string,
  +emails: ?$ReadOnlyArray<?{|
    +id: string,
    +name: string,
    +type: ?{|
      +name: string,
      +value: string,
    |},
  |}>,
  +phones: ?$ReadOnlyArray<?{|
    +id: string,
    +name: string,
    +type: ?{|
      +name: string,
      +value: string,
    |},
  |}>,
  +roles: ?$ReadOnlyArray<?{|
    +relation_id: number,
    +role_data: ?{|
      +id: string,
      +name: string,
    |},
    +end: ?{|
      +id: string,
      +name: string,
    |},
  |}>,
  +created: any,
  +creator: ?{|
    +email: string
  |},
  +modified: any,
  +modifier: ?{|
    +email: string
  |},
  +comments: ?$ReadOnlyArray<?{|
    +id: string,
    +user: ?{|
      +first_name: string,
      +last_name: string,
    |},
    +comment: string,
    +submit_date: any,
  |}>,
  +$refType: ContactUpdateForm_contact$ref,
|};
export type ContactUpdateForm_contact$data = ContactUpdateForm_contact;
export type ContactUpdateForm_contact$key = {
  +$data?: ContactUpdateForm_contact$data,
  +$fragmentRefs: ContactUpdateForm_contact$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = [
  (v1/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "value",
    "args": null,
    "storageKey": null
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v5 = [
  (v0/*: any*/),
  (v1/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "type",
    "storageKey": null,
    "args": null,
    "concreteType": "Choice",
    "plural": false,
    "selections": (v2/*: any*/)
  }
],
v6 = [
  (v0/*: any*/),
  (v1/*: any*/)
],
v7 = [
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
  "name": "ContactUpdateForm_contact",
  "type": "Contact",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
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
      "kind": "LinkedField",
      "alias": null,
      "name": "contact_type",
      "storageKey": null,
      "args": null,
      "concreteType": "Choice",
      "plural": false,
      "selections": (v2/*: any*/)
    },
    (v3/*: any*/),
    (v4/*: any*/),
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
      "selections": (v5/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "phones",
      "storageKey": null,
      "args": null,
      "concreteType": "Phone",
      "plural": true,
      "selections": (v5/*: any*/)
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "relation_id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "role_data",
          "storageKey": null,
          "args": null,
          "concreteType": "Role",
          "plural": false,
          "selections": (v6/*: any*/)
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "end",
          "storageKey": null,
          "args": null,
          "concreteType": "Organization",
          "plural": false,
          "selections": (v6/*: any*/)
        }
      ]
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
      "selections": (v7/*: any*/)
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
      "selections": (v7/*: any*/)
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
        (v0/*: any*/),
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "user",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": [
            (v3/*: any*/),
            (v4/*: any*/)
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
(node/*: any*/).hash = 'efd8fa55966a845a754719ef9c87ae1d';
module.exports = node;
