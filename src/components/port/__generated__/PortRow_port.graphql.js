/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PortRow_port$ref: FragmentReference;
declare export opaque type PortRow_port$fragmentType: PortRow_port$ref;
export type PortRow_port = {|
  +id: string,
  +name: string,
  +description: ?string,
  +port_type: ?{|
    +name: string,
    +value: string,
  |},
  +$refType: PortRow_port$ref,
|};
export type PortRow_port$data = PortRow_port;
export type PortRow_port$key = {
  +$data?: PortRow_port$data,
  +$fragmentRefs: PortRow_port$ref,
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
  "name": "PortRow_port",
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
      "name": "port_type",
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
  "type": "Port"
};
})();
// prettier-ignore
(node/*: any*/).hash = '6b6c5104d77985bad7ed9e43ee6b8192';

module.exports = node;
