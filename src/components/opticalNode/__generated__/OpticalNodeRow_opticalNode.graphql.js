/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type OpticalNodeRow_opticalNode$ref: FragmentReference;
declare export opaque type OpticalNodeRow_opticalNode$fragmentType: OpticalNodeRow_opticalNode$ref;
export type OpticalNodeRow_opticalNode = {|
  +id: string,
  +name: string,
  +description: ?string,
  +$refType: OpticalNodeRow_opticalNode$ref,
|};
export type OpticalNodeRow_opticalNode$data = OpticalNodeRow_opticalNode;
export type OpticalNodeRow_opticalNode$key = {
  +$data?: OpticalNodeRow_opticalNode$data,
  +$fragmentRefs: OpticalNodeRow_opticalNode$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OpticalNodeRow_opticalNode",
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
  "type": "OpticalNode"
};
// prettier-ignore
(node/*: any*/).hash = '2a732c7191f283f3361f39d0eec94180';

module.exports = node;
