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
  +id: string,
  +name: string,
  +description: ?string,
  +contacts: ?$ReadOnlyArray<?{|
    +id: string,
    +first_name: string,
    +last_name: string,
    +contact_type: ?any,
    +emails: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +type: any,
    |}>,
    +phones: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +type: any,
    |}>,
    +roles: ?$ReadOnlyArray<?{|
      +role_data: ?{|
        +id: string,
        +name: string,
      |},
      +end: ?{|
        +id: string,
        +name: string,
      |},
    |}>,
    +outgoing: ?$ReadOnlyArray<?{|
      +name: string,
      +relation: {|
        +relation_id: number,
        +type: string,
        +end: {|
          +id: string,
          +node_name: string,
        |},
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
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v5 = [
  (v0/*: any*/),
  (v1/*: any*/),
  (v4/*: any*/)
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
          "kind": "LinkedField",
          "alias": null,
          "name": "outgoing",
          "storageKey": null,
          "args": null,
          "concreteType": "DictRelationType",
          "plural": true,
          "selections": [
            (v1/*: any*/),
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "relation",
              "storageKey": null,
              "args": null,
              "concreteType": "NIRelationType",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "relation_id",
                  "args": null,
                  "storageKey": null
                },
                (v4/*: any*/),
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "end",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "NINodeHandlerType",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/),
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "node_name",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                }
              ]
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '4f77e5dfa06c51bc378745e4ad389af3';
module.exports = node;
