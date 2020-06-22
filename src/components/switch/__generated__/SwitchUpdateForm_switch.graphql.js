/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SwitchUpdateForm_switch$ref: FragmentReference;
declare export opaque type SwitchUpdateForm_switch$fragmentType: SwitchUpdateForm_switch$ref;
export type SwitchUpdateForm_switch = {|
  +id: string,
  +name: string,
  +description: ?string,
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
  +$refType: SwitchUpdateForm_switch$ref,
|};
export type SwitchUpdateForm_switch$data = SwitchUpdateForm_switch;
export type SwitchUpdateForm_switch$key = {
  +$data?: SwitchUpdateForm_switch$data,
  +$fragmentRefs: SwitchUpdateForm_switch$ref,
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
v1 = [
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
  "name": "SwitchUpdateForm_switch",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
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
            }
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
      "selections": (v1/*: any*/),
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
      "selections": (v1/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Switch"
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f6058ce10b22dfe02f669da024f7af66';

module.exports = node;
