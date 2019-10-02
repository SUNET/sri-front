/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Organization_organization$ref: FragmentReference;
declare export opaque type Organization_organization$fragmentType: Organization_organization$ref;
export type Organization_organization = {|
  +handle_id: string,
  +name: string,
  +type: ?any,
  +$refType: Organization_organization$ref,
|};
export type Organization_organization$data = Organization_organization;
export type Organization_organization$key = {
  +$data?: Organization_organization$data,
  +$fragmentRefs: Organization_organization$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Organization_organization",
  "type": "Organization",
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
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c7fdc61127216ce41c2c5149b59eac42';
module.exports = node;
