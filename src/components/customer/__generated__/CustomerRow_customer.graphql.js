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
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CustomerRow_customer",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "type": "Customer"
};
// prettier-ignore
(node/*: any*/).hash = '009acd69c2599213f0094f46b62d3e7f';

module.exports = node;
