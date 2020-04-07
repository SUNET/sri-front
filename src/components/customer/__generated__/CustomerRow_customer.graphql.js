/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CustomerRow_customer$ref: FragmentReference;
declare export opaque type CustomerRow_customer$fragmentType: CustomerRow_customer$ref;
export type CustomerRow_customer = {|
  +id: string,
  +name: string,
  +description: ?string,
  +url: ?string,
  +$refType: CustomerRow_customer$ref,
|};
export type CustomerRow_customer$data = CustomerRow_customer;
export type CustomerRow_customer$key = {
  +$data?: CustomerRow_customer$data,
  +$fragmentRefs: CustomerRow_customer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CustomerRow_customer",
  "type": "Customer",
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '009acd69c2599213f0094f46b62d3e7f';
module.exports = node;
