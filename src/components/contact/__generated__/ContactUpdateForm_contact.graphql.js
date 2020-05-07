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
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "value",
    "storageKey": null
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v5 = [
  (v0/*: any*/),
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Choice",
    "kind": "LinkedField",
    "name": "type",
    "plural": false,
    "selections": (v2/*: any*/),
    "storageKey": null
  }
],
v6 = [
  (v0/*: any*/),
  (v1/*: any*/)
],
v7 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "email",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContactUpdateForm_contact",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "notes",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Choice",
      "kind": "LinkedField",
      "name": "contact_type",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": null
    },
    (v3/*: any*/),
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "pgp_fingerprint",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Email",
      "kind": "LinkedField",
      "name": "emails",
      "plural": true,
      "selections": (v5/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Phone",
      "kind": "LinkedField",
      "name": "phones",
      "plural": true,
      "selections": (v5/*: any*/),
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "relation_id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Role",
          "kind": "LinkedField",
          "name": "role_data",
          "plural": false,
          "selections": (v6/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Organization",
          "kind": "LinkedField",
          "name": "end",
          "plural": false,
          "selections": (v6/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "created",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "creator",
      "plural": false,
      "selections": (v7/*: any*/),
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
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "modifier",
      "plural": false,
      "selections": (v7/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CommentType",
      "kind": "LinkedField",
      "name": "comments",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "user",
          "plural": false,
          "selections": [
            (v3/*: any*/),
            (v4/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "comment",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "submit_date",
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
(node/*: any*/).hash = 'efd8fa55966a845a754719ef9c87ae1d';

module.exports = node;
