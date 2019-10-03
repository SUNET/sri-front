/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Group_members$ref: FragmentReference;
declare export opaque type Group_members$fragmentType: Group_members$ref;
export type Group_members = {|
  +edges: $ReadOnlyArray<?{|
    +node: ?{|
      +handle_id: string,
      +first_name: string,
      +last_name: string,
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
    |}
  |}>,
  +$refType: Group_members$ref,
|};
export type Group_members$data = Group_members;
export type Group_members$key = {
  +$data?: Group_members$data,
  +$fragmentRefs: Group_members$ref,
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
  "name": "Group_members",
  "type": "ContactConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "ContactEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Contact",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            (v2/*: any*/),
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
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e2dfe692e754c88c729432b491b3708b';
module.exports = node;
