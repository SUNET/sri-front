/**
 * @flow
 * @relayHash 9fd78e21926b0d10d504f354215f07bf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateOrganizationInput = {|
  account_id?: ?string,
  name: string,
  description?: ?string,
  customer_id?: ?string,
  type?: ?any,
  incident_management_info?: ?string,
  relationship_parent_of?: ?any,
  relationship_uses_a?: ?any,
  abuse_contact?: ?any,
  primary_contact?: ?any,
  secondary_contact?: ?any,
  it_technical_contact?: ?any,
  it_security_contact?: ?any,
  it_manager_contact?: ?any,
  handle_id: number,
  clientMutationId?: ?string,
|};
export type UpdateOrganizationMutationVariables = {|
  input: UpdateOrganizationInput
|};
export type UpdateOrganizationMutationResponse = {|
  +update_organization: ?{|
    +organization: ?{|
      +handle_id: string,
      +name: string,
      +type: ?any,
      +comments: ?$ReadOnlyArray<?{|
        +user: ?{|
          +first_name: string,
          +last_name: string,
        |},
        +comment: string,
        +submit_date: any,
      |}>,
    |}
  |}
|};
export type UpdateOrganizationMutation = {|
  variables: UpdateOrganizationMutationVariables,
  response: UpdateOrganizationMutationResponse,
|};
*/


/*
mutation UpdateOrganizationMutation(
  $input: UpdateOrganizationInput!
) {
  update_organization(input: $input) {
    organization {
      handle_id
      name
      type
      comments {
        user {
          first_name
          last_name
          id
        }
        comment
        submit_date
        id
      }
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateOrganizationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "handle_id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "comment",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "submit_date",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateOrganizationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "update_organization",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateOrganizationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "organization",
            "storageKey": null,
            "args": null,
            "concreteType": "Organization",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
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
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "user",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/)
                    ]
                  },
                  (v7/*: any*/),
                  (v8/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateOrganizationMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "update_organization",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateOrganizationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "organization",
            "storageKey": null,
            "args": null,
            "concreteType": "Organization",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
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
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "user",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v9/*: any*/)
                    ]
                  },
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/)
                ]
              },
              (v9/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateOrganizationMutation",
    "id": null,
    "text": "mutation UpdateOrganizationMutation(\n  $input: UpdateOrganizationInput!\n) {\n  update_organization(input: $input) {\n    organization {\n      handle_id\n      name\n      type\n      comments {\n        user {\n          first_name\n          last_name\n          id\n        }\n        comment\n        submit_date\n        id\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'baaaad7e9af459f560592dde7689cf63';
module.exports = node;
