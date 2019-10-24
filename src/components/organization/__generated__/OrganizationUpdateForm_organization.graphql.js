/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type OrganizationUpdateForm_organization$ref: FragmentReference;
declare export opaque type OrganizationUpdateForm_organization$fragmentType: OrganizationUpdateForm_organization$ref;
export type OrganizationUpdateForm_organization = {|
  +handle_id: string,
  +name: string,
  +type: ?any,
  +customer_id: ?string,
  +description: ?string,
  +incident_management_info: ?string,
  +addresses: ?$ReadOnlyArray<?{|
    +handle_id: string,
    +name: string,
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
  +created: any,
  +creator: {|
    +email: string
  |},
  +modified: any,
  +modifier: {|
    +email: string
  |},
  +$refType: OrganizationUpdateForm_organization$ref,
|};
export type OrganizationUpdateForm_organization$data = OrganizationUpdateForm_organization;
export type OrganizationUpdateForm_organization$key = {
  +$data?: OrganizationUpdateForm_organization$data,
  +$fragmentRefs: OrganizationUpdateForm_organization$ref,
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
],
v4 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "email",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "OrganizationUpdateForm_organization",
  "type": "Organization",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "customer_id",
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
        (v1/*: any*/),
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "created",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "creator",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": (v4/*: any*/)
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "modified",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "modifier",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": (v4/*: any*/)
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '6d4c2f477acf6f1a1825925998b68e72';
module.exports = node;
