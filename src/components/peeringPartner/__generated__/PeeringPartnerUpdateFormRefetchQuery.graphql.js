/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PeeringPartnerUpdateForm_peeringPartner$ref = any;
export type PeeringPartnerUpdateFormRefetchQueryVariables = {|
  peeringPartnerId: string
|};
export type PeeringPartnerUpdateFormRefetchQueryResponse = {|
  +getPeeringPartnerById: ?{|
    +$fragmentRefs: PeeringPartnerUpdateForm_peeringPartner$ref
  |}
|};
export type PeeringPartnerUpdateFormRefetchQuery = {|
  variables: PeeringPartnerUpdateFormRefetchQueryVariables,
  response: PeeringPartnerUpdateFormRefetchQueryResponse,
|};
*/


/*
query PeeringPartnerUpdateFormRefetchQuery(
  $peeringPartnerId: ID!
) {
  getPeeringPartnerById(id: $peeringPartnerId) {
    ...PeeringPartnerUpdateForm_peeringPartner
    id
  }
}

fragment PeeringPartnerUpdateForm_peeringPartner on PeeringPartner {
  id
  name
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
  created
  creator {
    email
    id
  }
  modified
  modifier {
    email
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "peeringPartnerId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "peeringPartnerId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "email",
    "storageKey": null
  },
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PeeringPartnerUpdateFormRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PeeringPartner",
        "kind": "LinkedField",
        "name": "getPeeringPartnerById",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PeeringPartnerUpdateForm_peeringPartner"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PeeringPartnerUpdateFormRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PeeringPartner",
        "kind": "LinkedField",
        "name": "getPeeringPartnerById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
            "concreteType": "CommentType",
            "kind": "LinkedField",
            "name": "comments",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "first_name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "last_name",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "comment",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "submit_date",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "created",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": (v3/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "modified",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "modifier",
            "plural": false,
            "selections": (v3/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "PeeringPartnerUpdateFormRefetchQuery",
    "operationKind": "query",
    "text": "query PeeringPartnerUpdateFormRefetchQuery(\n  $peeringPartnerId: ID!\n) {\n  getPeeringPartnerById(id: $peeringPartnerId) {\n    ...PeeringPartnerUpdateForm_peeringPartner\n    id\n  }\n}\n\nfragment PeeringPartnerUpdateForm_peeringPartner on PeeringPartner {\n  id\n  name\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f23f300a2bd5678f99e93625cd56956';

module.exports = node;
