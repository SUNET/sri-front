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
  +id: string,
  +name: string,
  +type: ?{|
    +name: string,
    +value: string,
  |},
  +website: ?string,
  +organization_id: ?string,
  +organization_number: ?string,
  +description: ?string,
  +incident_management_info: ?string,
  +parent_organization: ?{|
    +organization_id: ?string
  |},
  +addresses: ?$ReadOnlyArray<?{|
    +id: string,
    +name: string,
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
        +id: string,
        +node_name: string,
      |},
      +start: {|
        +id: string,
        +node_name: string,
      |},
    |},
  |}>,
  +contacts: ?$ReadOnlyArray<?{|
    +id: string,
    +first_name: string,
    +last_name: string,
    +contact_type: ?{|
      +name: string,
      +value: string,
    |},
    +emails: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +type: ?{|
        +name: string,
        +value: string,
      |},
    |}>,
    +phones: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +type: ?{|
        +name: string,
        +value: string,
      |},
    |}>,
    +roles: ?$ReadOnlyArray<?{|
      +relation_id: number,
      +role_data: ?{|
        +id: string,
        +name: string,
      |},
      +end: ?{|
        +id: string,
        +name: string,
      |},
    |}>,
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
  +creator: ?{|
    +email: string
  |},
  +modified: any,
  +modifier: ?{|
    +email: string
  |},
  +$refType: OrganizationUpdateForm_organization$ref,
|};
export type OrganizationUpdateForm_organization$data = OrganizationUpdateForm_organization;
export type OrganizationUpdateForm_organization$key = {
  +$data?: OrganizationUpdateForm_organization$data,
  +$fragmentRefs: OrganizationUpdateForm_organization$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
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
v2 = [
  (v1/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "value",
    "args": null,
    "storageKey": null
  }
],
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "type",
  "storageKey": null,
  "args": null,
  "concreteType": "Choice",
  "plural": false,
  "selections": (v2/*: any*/)
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "organization_id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "relation_id",
  "args": null,
  "storageKey": null
},
v6 = [
  (v0/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "node_name",
    "args": null,
    "storageKey": null
  }
],
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v9 = [
  (v0/*: any*/),
  (v1/*: any*/),
  (v3/*: any*/)
],
v10 = [
  (v0/*: any*/),
  (v1/*: any*/)
],
v11 = [
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
    (v3/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "website",
      "args": null,
      "storageKey": null
    },
    (v4/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "organization_number",
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
      "name": "parent_organization",
      "storageKey": null,
      "args": null,
      "concreteType": "Organization",
      "plural": false,
      "selections": [
        (v4/*: any*/)
      ]
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
            (v5/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "type",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "end",
              "storageKey": null,
              "args": null,
              "concreteType": "NINodeHandlerType",
              "plural": false,
              "selections": (v6/*: any*/)
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "start",
              "storageKey": null,
              "args": null,
              "concreteType": "NINodeHandlerType",
              "plural": false,
              "selections": (v6/*: any*/)
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "contacts",
      "storageKey": null,
      "args": null,
      "concreteType": "Contact",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v7/*: any*/),
        (v8/*: any*/),
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "contact_type",
          "storageKey": null,
          "args": null,
          "concreteType": "Choice",
          "plural": false,
          "selections": (v2/*: any*/)
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "emails",
          "storageKey": null,
          "args": null,
          "concreteType": "Email",
          "plural": true,
          "selections": (v9/*: any*/)
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "phones",
          "storageKey": null,
          "args": null,
          "concreteType": "Phone",
          "plural": true,
          "selections": (v9/*: any*/)
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
            (v5/*: any*/),
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "role_data",
              "storageKey": null,
              "args": null,
              "concreteType": "Role",
              "plural": false,
              "selections": (v10/*: any*/)
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "end",
              "storageKey": null,
              "args": null,
              "concreteType": "Organization",
              "plural": false,
              "selections": (v10/*: any*/)
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
        (v0/*: any*/),
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "user",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": [
            (v7/*: any*/),
            (v8/*: any*/)
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
      "selections": (v11/*: any*/)
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
      "selections": (v11/*: any*/)
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '5e6f69753ce099549e3fcdd3512c28cb';

module.exports = node;
