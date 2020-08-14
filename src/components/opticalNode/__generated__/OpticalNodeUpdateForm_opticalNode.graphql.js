/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type OpticalNodeUpdateForm_opticalNode$ref: FragmentReference;
declare export opaque type OpticalNodeUpdateForm_opticalNode$fragmentType: OpticalNodeUpdateForm_opticalNode$ref;
export type OpticalNodeUpdateForm_opticalNode = {|
  +id: string,
  +name: string,
  +description: ?string,
  +type: ?{|
    +id: string,
    +name: string,
    +value: string,
  |},
  +ports: ?$ReadOnlyArray<?{|
    +id: string,
    +name: string,
    +__typename: string,
    +relation_id: ?number,
    +type: ?{|
      +name: string
    |},
  |}>,
  +rack_units: ?number,
  +rack_position: ?number,
  +rack_back: ?boolean,
  +operational_state: ?{|
    +id: string,
    +name: string,
    +value: string,
  |},
  +comments: ?$ReadOnlyArray<?{|
    +id: string,
    +user: ?{|
      +first_name: string,
      +last_name: string,
    |},
    +comment: string,
    +submit_date: any,
  |}>,
  +created: any,
  +creator: ?{|
    +email: string
  |},
  +modified: any,
  +modifier: ?{|
    +email: string
  |},
  +__typename: "OpticalNode",
  +$refType: OpticalNodeUpdateForm_opticalNode$ref,
|};
export type OpticalNodeUpdateForm_opticalNode$data = OpticalNodeUpdateForm_opticalNode;
export type OpticalNodeUpdateForm_opticalNode$key = {
  +$data?: OpticalNodeUpdateForm_opticalNode$data,
  +$fragmentRefs: OpticalNodeUpdateForm_opticalNode$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  (v1/*: any*/),
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "value",
    "storageKey": null
  }
],
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "email",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OpticalNodeUpdateForm_opticalNode",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
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
      "name": "type",
      "plural": false,
      "selections": (v3/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Port",
      "kind": "LinkedField",
      "name": "ports",
      "plural": true,
      "selections": [
        (v1/*: any*/),
        (v2/*: any*/),
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "relation_id",
          "storageKey": null
        },
        {
          "alias": "type",
          "args": null,
          "concreteType": "Choice",
          "kind": "LinkedField",
          "name": "port_type",
          "plural": false,
          "selections": [
            (v2/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rack_units",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rack_position",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rack_back",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Choice",
      "kind": "LinkedField",
      "name": "operational_state",
      "plural": false,
      "selections": (v3/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CommentType",
      "kind": "LinkedField",
      "name": "comments",
      "plural": true,
      "selections": [
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "user",
          "plural": false,
          "selections": [
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
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "comment",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "submit_date",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "created",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "creator",
      "plural": false,
      "selections": (v4/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "modified",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "modifier",
      "plural": false,
      "selections": (v4/*: any*/),
      "storageKey": null
    }
  ],
  "type": "OpticalNode"
};
})();
// prettier-ignore
(node/*: any*/).hash = '6749ac17a5e2071c5b0c44c1f3a8731e';

module.exports = node;
