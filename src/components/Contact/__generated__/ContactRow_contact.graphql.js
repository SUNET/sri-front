/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ContactRow_contact$ref: FragmentReference;
export type ContactRow_contact = {|
  +handle_id: string,
  +name: string,
  +first_name: string,
  +last_name: string,
  +contact_type: ?string,
  +phone: ?string,
  +email: ?string,
  +is_roles: ?$ReadOnlyArray<?{|
    +name: string
  |}>,
  +member_of_groups: ?$ReadOnlyArray<?{|
    +name: string
  |}>,
  +$refType: ContactRow_contact$ref,
|};
*/

const node /*: ReaderFragment*/ = (function() {
    var v0 = {
            kind: "ScalarField",
            alias: null,
            name: "name",
            args: null,
            storageKey: null
        },
        v1 = [(v0 /*: any*/)];
    return {
        kind: "Fragment",
        name: "ContactRow_contact",
        type: "Contact",
        metadata: null,
        argumentDefinitions: [],
        selections: [
            {
                kind: "ScalarField",
                alias: null,
                name: "handle_id",
                args: null,
                storageKey: null
            },
            (v0 /*: any*/),
            {
                kind: "ScalarField",
                alias: null,
                name: "first_name",
                args: null,
                storageKey: null
            },
            {
                kind: "ScalarField",
                alias: null,
                name: "last_name",
                args: null,
                storageKey: null
            },
            {
                kind: "ScalarField",
                alias: null,
                name: "contact_type",
                args: null,
                storageKey: null
            },
            {
                kind: "ScalarField",
                alias: null,
                name: "phone",
                args: null,
                storageKey: null
            },
            {
                kind: "ScalarField",
                alias: null,
                name: "email",
                args: null,
                storageKey: null
            },
            {
                kind: "LinkedField",
                alias: null,
                name: "is_roles",
                storageKey: null,
                args: null,
                concreteType: "Role",
                plural: true,
                selections: (v1 /*: any*/)
            },
            {
                kind: "LinkedField",
                alias: null,
                name: "member_of_groups",
                storageKey: null,
                args: null,
                concreteType: "Group",
                plural: true,
                selections: (v1 /*: any*/)
            }
        ]
    };
})();
// prettier-ignore
(node/*: any*/).hash = 'd32705e83254d73c99695019d5029cd1';
module.exports = node;
