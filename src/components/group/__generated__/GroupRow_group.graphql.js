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
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupRow_group",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Group"
};
// prettier-ignore
(node/*: any*/).hash = '23219fc4e54cb258b7adafa9f3dbd00f';

module.exports = node;
