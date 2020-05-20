/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type OrganizationRow_organization$ref: FragmentReference;
declare export opaque type OrganizationRow_organization$fragmentType: OrganizationRow_organization$ref;
export type OrganizationRow_organization = {|
  +id: string,
  +name: string,
  +type: ?{|
    +name: string,
    +value: string,
  |},
  +organization_id: ?string,
  +affiliation_customer: ?boolean,
  +affiliation_end_customer: ?boolean,
  +affiliation_host_user: ?boolean,
  +affiliation_partner: ?boolean,
  +affiliation_provider: ?boolean,
  +affiliation_site_owner: ?boolean,
  +parent_organization: ?{|
    +organization_id: ?string,
    +relation_id: ?number,
    +id: string,
    +name: string,
  |},
  +incoming: ?$ReadOnlyArray<?{|
    +name: string,
    +relation: {|
      +type: string,
      +start: {|
        +id: string,
        +node_name: string,
      |},
    |},
  |}>,
  +$refType: OrganizationRow_organization$ref,
|};
export type OrganizationRow_organization$data = OrganizationRow_organization;
export type OrganizationRow_organization$key = {
  +$data?: OrganizationRow_organization$data,
  +$fragmentRefs: OrganizationRow_organization$ref,
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "organization_id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrganizationRow_organization",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Choice",
      "kind": "LinkedField",
      "name": "type",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "affiliation_customer",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "affiliation_end_customer",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "affiliation_host_user",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "affiliation_partner",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "affiliation_provider",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "affiliation_site_owner",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Organization",
      "kind": "LinkedField",
      "name": "parent_organization",
      "plural": false,
      "selections": [
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "relation_id",
          "storageKey": null
        },
        (v0/*: any*/),
        (v1/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "DictRelationType",
      "kind": "LinkedField",
      "name": "incoming",
      "plural": true,
      "selections": [
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "NIRelationType",
          "kind": "LinkedField",
          "name": "relation",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "type",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "NINodeHandlerType",
              "kind": "LinkedField",
              "name": "start",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "node_name",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Organization"
};
})();
// prettier-ignore
(node/*: any*/).hash = '5d2611e3acf28073de36cdbca2b56f8e';

module.exports = node;
