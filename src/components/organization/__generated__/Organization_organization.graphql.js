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
  +description: string,
  +type: ?any,
  +incident_management_info: ?string,
  +addresses: ?$ReadOnlyArray<?{|
    +handle_id: string,
    +website: ?string,
    +street: ?string,
    +postal_code: ?string,
    +postal_area: ?string,
    +phone: ?string,
  |}>,
  +incoming: ?$ReadOnlyArray<?{|
    +name: string,
    +relation: {|
      +relation_id: number,
      +type: string,
      +end: {|
        +handle_id: string,
        +node_name: string,
      |},
      +start: {|
        +handle_id: string,
        +node_name: string,
      |},
    |},
  |}>,
  +comments: ?$ReadOnlyArray<?{|
    +id: string,
    +user: ?{|
      +first_name: string,
      +last_name: string,
    |},
    +comment: string,
    +submit_date: any,
  |}>,
  +$refType: Organization_organization$ref,
|};
export type Organization_organization$data = Organization_organization;
export type Organization_organization$key = {
  +$data?: Organization_organization$data,
  +$fragmentRefs: Organization_organization$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "handle_id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v3 = [
  (v0/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "node_name",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "Organization_organization",
  "type": "Organization",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    (v2/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "incident_management_info",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "addresses",
      "storageKey": null,
      "args": null,
      "concreteType": "Address",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "website",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "street",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "postal_code",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "postal_area",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "phone",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "incoming",
      "storageKey": null,
      "args": null,
      "concreteType": "DictRelationType",
      "plural": true,
      "selections": [
        (v1/*: any*/),
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "relation",
          "storageKey": null,
          "args": null,
          "concreteType": "NIRelationType",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "relation_id",
              "args": null,
              "storageKey": null
            },
            (v2/*: any*/),
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "end",
              "storageKey": null,
              "args": null,
              "concreteType": "NINodeHandlerType",
              "plural": false,
              "selections": (v3/*: any*/)
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "start",
              "storageKey": null,
              "args": null,
              "concreteType": "NINodeHandlerType",
              "plural": false,
              "selections": (v3/*: any*/)
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "comments",
      "storageKey": null,
      "args": null,
      "concreteType": "CommentType",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "user",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "first_name",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "last_name",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "comment",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "submit_date",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '36bfe31b818a89a0156cb0f476c8f9e0';
module.exports = node;
