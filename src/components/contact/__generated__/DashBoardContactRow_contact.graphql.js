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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DashBoardContactRow_contact",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "first_name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "last_name",
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
      "concreteType": "RoleRelation",
      "kind": "LinkedField",
      "name": "roles",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Organization",
          "kind": "LinkedField",
          "name": "end",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Group",
      "kind": "LinkedField",
      "name": "member_of_groups",
      "plural": true,
      "selections": (v1/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Contact"
};
})();
// prettier-ignore
(node/*: any*/).hash = '8f2e64b8bd85e26897700b972cf0815c';

module.exports = node;
