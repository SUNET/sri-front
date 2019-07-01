/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DashBoardBlockRow_contact$ref: FragmentReference;
export type DashBoardBlockRow_contact = {|
  +handle_id: string,
  +first_name: string,
  +last_name: string,
  +modified: any,
  +roles: ?$ReadOnlyArray<?{|
    +name: ?string
  |}>,
  +member_of_groups: ?$ReadOnlyArray<?{|
    +name: string
  |}>,
  +$refType: DashBoardBlockRow_contact$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "DashBoardBlockRow_contact",
  "type": "Contact",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "handle_id",
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
      "concreteType": "Role",
      "plural": true,
      "selections": (v0/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "member_of_groups",
      "storageKey": null,
      "args": null,
      "concreteType": "Group",
      "plural": true,
      "selections": (v0/*: any*/)
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '7ccde4c9aa4125a8fd2f9e49d7cb48e3';
module.exports = node;
