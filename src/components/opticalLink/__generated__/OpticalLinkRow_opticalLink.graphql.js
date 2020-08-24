/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type OpticalLinkRow_opticalLink$ref: FragmentReference;
declare export opaque type OpticalLinkRow_opticalLink$fragmentType: OpticalLinkRow_opticalLink$ref;
export type OpticalLinkRow_opticalLink = {|
  +id: string,
  +name: string,
  +description: ?string,
  +$refType: OpticalLinkRow_opticalLink$ref,
|};
export type OpticalLinkRow_opticalLink$data = OpticalLinkRow_opticalLink;
export type OpticalLinkRow_opticalLink$key = {
  +$data?: OpticalLinkRow_opticalLink$data,
  +$fragmentRefs: OpticalLinkRow_opticalLink$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OpticalLinkRow_opticalLink",
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
  "type": "OpticalLink"
};
// prettier-ignore
(node/*: any*/).hash = 'd2286da749ac202ea1425473546bc4b5';

module.exports = node;
