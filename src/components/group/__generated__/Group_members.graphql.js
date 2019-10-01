/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Group_members$ref: FragmentReference;
declare export opaque type Group_members$fragmentType: Group_members$ref;
export type Group_members = {|
  +contacts: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +handle_id: string,
        +roles: ?$ReadOnlyArray<?{|
          +name: ?string
        |}>,
      |}
    |}>
  |},
  +$refType: Group_members$ref,
|};
export type Group_members$data = Group_members;
export type Group_members$key = {
  +$data?: Group_members$data,
  +$fragmentRefs: Group_members$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Group_members",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "contacts",
      "storageKey": "contacts(filter:{\"AND\":[{\"member_of_groups\":{\"handle_id\":1063}}]})",
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "AND": [
              {
                "member_of_groups": {
                  "handle_id": 1063
                }
              }
            ]
          }
        }
      ],
      "concreteType": "ContactConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "ContactEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Contact",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "handle_id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "roles",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "RoleRelation",
                  "plural": true,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "name",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3009e09a58de273aa2283f6bcb35f694';
module.exports = node;
