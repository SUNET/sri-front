/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type OrganizationList_organization_types$ref: FragmentReference;
declare export opaque type OrganizationList_organization_types$fragmentType: OrganizationList_organization_types$ref;
export type OrganizationList_organization_types = {|
  +getChoicesForDropdown: ?$ReadOnlyArray<?{|
    +name: string,
    +value: string,
  |}>,
  +$refType: OrganizationList_organization_types$ref,
|};
export type OrganizationList_organization_types$data = OrganizationList_organization_types;
export type OrganizationList_organization_types$key = {
  +$data?: OrganizationList_organization_types$data,
  +$fragmentRefs: OrganizationList_organization_types$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrganizationList_organization_types",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "name",
          "value": "organization_types"
        }
      ],
      "concreteType": "Choice",
      "kind": "LinkedField",
      "name": "getChoicesForDropdown",
      "plural": true,
      "selections": [
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
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": "getChoicesForDropdown(name:\"organization_types\")"
    }
  ],
  "type": "Query"
};
// prettier-ignore
(node/*: any*/).hash = '89d18c5114dee824b8fbbb28f9f3e525';

module.exports = node;
