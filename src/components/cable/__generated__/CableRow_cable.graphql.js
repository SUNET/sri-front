/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CableRow_cable$ref: FragmentReference;
declare export opaque type CableRow_cable$fragmentType: CableRow_cable$ref;
export type CableRow_cable = {|
  +id: string,
  +name: string,
  +description: ?string,
  +cable_type: ?{|
    +name: string,
    +value: string,
  |},
  +$refType: CableRow_cable$ref,
|};
export type CableRow_cable$data = CableRow_cable;
export type CableRow_cable$key = {
  +$data?: CableRow_cable$data,
  +$fragmentRefs: CableRow_cable$ref,
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
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CableRow_cable",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    (v0/*: any*/),
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
      "concreteType": "Choice",
      "kind": "LinkedField",
      "name": "cable_type",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Cable"
};
})();
// prettier-ignore
(node/*: any*/).hash = '3feaab3d47968c0a46c77d45dc256617';

module.exports = node;
