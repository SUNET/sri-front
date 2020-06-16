/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DashBoardActivityLogNetworkRow_log$ref: FragmentReference;
declare export opaque type DashBoardActivityLogNetworkRow_log$fragmentType: DashBoardActivityLogNetworkRow_log$ref;
export type DashBoardActivityLogNetworkRow_log = {|
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
  +$refType: DashBoardActivityLogNetworkRow_log$ref,
|};
export type DashBoardActivityLogNetworkRow_log$data = DashBoardActivityLogNetworkRow_log;
export type DashBoardActivityLogNetworkRow_log$key = {
  +$data?: DashBoardActivityLogNetworkRow_log$data,
  +$fragmentRefs: DashBoardActivityLogNetworkRow_log$ref,
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
  "name": "DashBoardActivityLogNetworkRow_log",
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
(node/*: any*/).hash = '75d1d232c0eb252522f55465f9d1ca9c';

module.exports = node;
