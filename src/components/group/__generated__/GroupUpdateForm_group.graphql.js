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
    +contact_type: ?{|
      +name: string,
      +value: string,
    |},
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
  +creator: ?{|
    +email: string
  |},
  +modified: any,
  +modifier: ?{|
    +email: string
  |},
  +$refType: GroupUpdateForm_group$ref,
|};
export type GroupUpdateForm_group$data = GroupUpdateForm_group;
export type GroupUpdateForm_group$key = {
  +$data?: GroupUpdateForm_group$data,
  +$fragmentRefs: GroupUpdateForm_group$ref,
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "first_name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "last_name",
  "storageKey": null
},
v4 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "value",
    "storageKey": null
  }
],
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
    "selections": (v4/*: any*/),
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
  "name": "GroupUpdateForm_group",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Contact",
      "kind": "LinkedField",
      "name": "contacts",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v2/*: any*/),
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Choice",
          "kind": "LinkedField",
          "name": "contact_type",
          "plural": false,
          "selections": (v4/*: any*/),
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
          "concreteType": "DictRelationType",
          "kind": "LinkedField",
          "name": "outgoing",
          "plural": true,
          "selections": [
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "NIRelationType",
              "kind": "LinkedField",
              "name": "relation",
              "plural": false,
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
                  "kind": "ScalarField",
                  "name": "type",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "NINodeHandlerType",
                  "kind": "LinkedField",
                  "name": "end",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "node_name",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
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
            (v2/*: any*/),
            (v3/*: any*/)
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
    }
  ],
  "type": "Group"
};
})();
// prettier-ignore
(node/*: any*/).hash = '929cea3706f8dd813898003f8b3fa9d9';

module.exports = node;
