/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type GroupUpdateForm_members$ref: FragmentReference;
declare export opaque type GroupUpdateForm_members$fragmentType: GroupUpdateForm_members$ref;
export type GroupUpdateForm_members = {|
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
    |}
  |}>,
  +$refType: GroupUpdateForm_members$ref,
|};
export type GroupUpdateForm_members$data = GroupUpdateForm_members;
export type GroupUpdateForm_members$key = {
  +$data?: GroupUpdateForm_members$data,
  +$fragmentRefs: GroupUpdateForm_members$ref,
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
v2 = [
  (v0/*: any*/),
  (v1/*: any*/),
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
  "name": "GroupUpdateForm_members",
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
              "kind": "LinkedField",
              "alias": null,
              "name": "emails",
              "storageKey": null,
              "args": null,
              "concreteType": "Email",
              "plural": true,
              "selections": (v2/*: any*/)
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "phones",
              "storageKey": null,
              "args": null,
              "concreteType": "Phone",
              "plural": true,
              "selections": (v2/*: any*/)
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
                (v1/*: any*/),
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
                    (v1/*: any*/)
                  ]
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
(node/*: any*/).hash = '37e13ba06f364bfe11222e5d872ca1d8';
module.exports = node;
