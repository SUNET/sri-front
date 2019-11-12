/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type GroupUpdateForm_group$ref: FragmentReference;
declare export opaque type GroupUpdateForm_group$fragmentType: GroupUpdateForm_group$ref;
export type GroupUpdateForm_group = {|
  +handle_id: string,
  +name: string,
  +description: ?string,
  +contacts: ?$ReadOnlyArray<?{|
    +handle_id: string,
    +first_name: string,
    +last_name: string,
    +contact_type: ?any,
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
      +role_data: ?{|
        +handle_id: string,
        +name: string,
      |},
      +end: ?{|
        +handle_id: string,
        +name: string,
      |},
    |}>,
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
  +created: any,
  +creator: {|
    +email: string
  |},
  +modified: any,
  +modifier: {|
    +email: string
  |},
  +$refType: GroupUpdateForm_group$ref,
|};
export type GroupUpdateForm_group$data = GroupUpdateForm_group;
export type GroupUpdateForm_group$key = {
  +$data?: GroupUpdateForm_group$data,
  +$fragmentRefs: GroupUpdateForm_group$ref,
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v4 = [
  (v0/*: any*/),
  (v1/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "type",
    "args": null,
    "storageKey": null
  }
],
v5 = [
  (v0/*: any*/),
  (v1/*: any*/)
],
v6 = [
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
  "name": "GroupUpdateForm_group",
  "type": "Group",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "contacts",
      "storageKey": null,
      "args": null,
      "concreteType": "Contact",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v2/*: any*/),
        (v3/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "contact_type",
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
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "role_data",
              "storageKey": null,
              "args": null,
              "concreteType": "Role",
              "plural": false,
              "selections": (v5/*: any*/)
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "end",
              "storageKey": null,
              "args": null,
              "concreteType": "Organization",
              "plural": false,
              "selections": (v5/*: any*/)
            }
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
            (v2/*: any*/),
            (v3/*: any*/)
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
      "selections": (v6/*: any*/)
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
      "selections": (v6/*: any*/)
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '903acfd0fe0958631a4e0fa1f4a34de6';
module.exports = node;
