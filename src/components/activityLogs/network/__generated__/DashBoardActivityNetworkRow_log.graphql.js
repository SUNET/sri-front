/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DashBoardActivityNetworkRow_log$ref: FragmentReference;
declare export opaque type DashBoardActivityNetworkRow_log$fragmentType: DashBoardActivityNetworkRow_log$ref;
export type DashBoardActivityNetworkRow_log = {|
  +id: string,
  +text: string,
  +actorname: ?string,
  +actor: ?{|
    +id: string,
    +username: string,
    +first_name: string,
    +last_name: string,
    +email: string,
  |},
  +verb: string,
  +action_object: ?{|
    +id: string,
    +name: string,
    +__typename: string,
  |},
  +target_object: ?{|
    +id: string,
    +name: string,
    +__typename: string,
  |},
  +description: ?string,
  +timestamp: any,
  +$refType: DashBoardActivityNetworkRow_log$ref,
|};
export type DashBoardActivityNetworkRow_log$data = DashBoardActivityNetworkRow_log;
export type DashBoardActivityNetworkRow_log$key = {
  +$data?: DashBoardActivityNetworkRow_log$data,
  +$fragmentRefs: DashBoardActivityNetworkRow_log$ref,
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
    "name": "__typename",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DashBoardActivityNetworkRow_log",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "text",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "actorname",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "actor",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "username",
          "storageKey": null
        },
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "email",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "verb",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "action_object",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "target_object",
      "plural": false,
      "selections": (v1/*: any*/),
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
      "name": "timestamp",
      "storageKey": null
    }
  ],
  "type": "Action"
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fa166ef4a1bc7129c2d22a7e0a2e0f4d';

module.exports = node;
