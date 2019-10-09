/**
 * @flow
 * @relayHash 385cc048698270f52c95c26826da6582
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Organization_organization$ref = any;
export type OrganizationRefetchQueryVariables = {|
  organizationId: number
|};
export type OrganizationRefetchQueryResponse = {|
  +getOrganizationById: ?{|
    +$fragmentRefs: Organization_organization$ref
  |}
|};
export type OrganizationRefetchQuery = {|
  variables: OrganizationRefetchQueryVariables,
  response: OrganizationRefetchQueryResponse,
|};
*/


/*
query OrganizationRefetchQuery(
  $organizationId: Int!
) {
  getOrganizationById(handle_id: $organizationId) {
    ...Organization_organization
    id
  }
}

fragment Organization_organization on Organization {
  handle_id
  name
  type
  incident_management_info
  addresses {
    handle_id
    website
    street
    postal_code
    postal_area
    phone
    id
  }
  incoming {
    name
    relation {
      relation_id
      type
      end {
        handle_id
        node_name
        id
      }
      start {
        handle_id
        node_name
        id
      }
      id
    }
  }
  comments {
    id
    user {
      first_name
      last_name
      id
    }
    comment
    submit_date
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "organizationId",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "handle_id",
    "variableName": "organizationId"
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = [
  (v2/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "node_name",
    "args": null,
    "storageKey": null
  },
  (v5/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OrganizationRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getOrganizationById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Organization",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Organization_organization",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OrganizationRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getOrganizationById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Organization",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
              (v2/*: any*/),
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
              },
              (v5/*: any*/)
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
              (v3/*: any*/),
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
                  (v4/*: any*/),
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
                  },
                  (v5/*: any*/)
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
              (v5/*: any*/),
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
                  },
                  (v5/*: any*/)
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
          (v5/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "OrganizationRefetchQuery",
    "id": null,
    "text": "query OrganizationRefetchQuery(\n  $organizationId: Int!\n) {\n  getOrganizationById(handle_id: $organizationId) {\n    ...Organization_organization\n    id\n  }\n}\n\nfragment Organization_organization on Organization {\n  handle_id\n  name\n  type\n  incident_management_info\n  addresses {\n    handle_id\n    website\n    street\n    postal_code\n    postal_area\n    phone\n    id\n  }\n  incoming {\n    name\n    relation {\n      relation_id\n      type\n      end {\n        handle_id\n        node_name\n        id\n      }\n      start {\n        handle_id\n        node_name\n        id\n      }\n      id\n    }\n  }\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3a81b47e4c3c28616c7e1c5bedfe17cc';
module.exports = node;