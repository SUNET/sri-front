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
  +type: ?any,
  +organization_id: ?string,
  +affiliation_customer: ?boolean,
  +affiliation_end_customer: ?boolean,
  +affiliation_host_user: ?boolean,
  +affiliation_partner: ?boolean,
  +affiliation_provider: ?boolean,
  +affiliation_site_owner: ?boolean,
  +parent_organization: ?$ReadOnlyArray<?{|
    +organization_id: ?string
  |}>,
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "organization_id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "OrganizationRow_organization",
  "type": "Organization",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
    (v3/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "affiliation_customer",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "affiliation_end_customer",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "affiliation_host_user",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "affiliation_partner",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "affiliation_provider",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "affiliation_site_owner",
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
      "plural": true,
      "selections": [
        (v3/*: any*/)
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
            (v2/*: any*/),
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "start",
              "storageKey": null,
              "args": null,
              "concreteType": "NINodeHandlerType",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "node_name",
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '1b2c0d3cf7382ac31b55a401d8fb043c';

module.exports = node;
