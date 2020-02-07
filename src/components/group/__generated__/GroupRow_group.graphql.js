/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type GroupRow_group$ref: FragmentReference;
declare export opaque type GroupRow_group$fragmentType: GroupRow_group$ref;
export type GroupRow_group = {|
  +id: string,
  +name: string,
  +description: ?string,
  +$refType: GroupRow_group$ref,
|};
export type GroupRow_group$data = GroupRow_group;
export type GroupRow_group$key = {
  +$data?: GroupRow_group$data,
  +$fragmentRefs: GroupRow_group$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "GroupRow_group",
  "type": "Group",
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
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '23219fc4e54cb258b7adafa9f3dbd00f';
module.exports = node;
