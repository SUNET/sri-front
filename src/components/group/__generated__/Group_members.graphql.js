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
(node/*: any*/).hash = '89f61746cf78a19cb7baa2e095477685';
module.exports = node;
