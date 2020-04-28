/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DashBoardContactRow_contact$ref: FragmentReference;
declare export opaque type DashBoardContactRow_contact$fragmentType: DashBoardContactRow_contact$ref;
export type DashBoardContactRow_contact = {|
  +id: string,
  +first_name: string,
  +last_name: string,
  +modified: any,
  +roles: ?$ReadOnlyArray<?{|
    +name: ?string,
    +end: ?{|
      +name: string
    |},
  |}>,
  +member_of_groups: ?$ReadOnlyArray<?{|
    +name: string
  |}>,
  +$refType: DashBoardContactRow_contact$ref,
|};
export type DashBoardContactRow_contact$data = DashBoardContactRow_contact;
export type DashBoardContactRow_contact$key = {
  +$data?: DashBoardContactRow_contact$data,
  +$fragmentRefs: DashBoardContactRow_contact$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
];
return {
  "kind": "Fragment",
  "name": "DashBoardContactRow_contact",
  "type": "Contact",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
      "kind": "ScalarField",
      "alias": null,
      "name": "modified",
      "args": null,
      "storageKey": null
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
        (v0/*: any*/),
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "end",
          "storageKey": null,
          "args": null,
          "concreteType": "Organization",
          "plural": false,
          "selections": (v1/*: any*/)
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "member_of_groups",
      "storageKey": null,
      "args": null,
      "concreteType": "Group",
      "plural": true,
      "selections": (v1/*: any*/)
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '8f2e64b8bd85e26897700b972cf0815c';

module.exports = node;
