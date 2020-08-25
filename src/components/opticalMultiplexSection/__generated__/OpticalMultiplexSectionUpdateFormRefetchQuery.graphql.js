/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OpticalMultiplexSectionUpdateForm_opticalMultiplexSection$ref = any;
export type OpticalMultiplexSectionUpdateFormRefetchQueryVariables = {|
  opticalMultiplexSectionId: string
|};
export type OpticalMultiplexSectionUpdateFormRefetchQueryResponse = {|
  +getOpticalMultiplexSectionById: ?{|
    +$fragmentRefs: OpticalMultiplexSectionUpdateForm_opticalMultiplexSection$ref
  |}
|};
export type OpticalMultiplexSectionUpdateFormRefetchQuery = {|
  variables: OpticalMultiplexSectionUpdateFormRefetchQueryVariables,
  response: OpticalMultiplexSectionUpdateFormRefetchQueryResponse,
|};
*/


/*
query OpticalMultiplexSectionUpdateFormRefetchQuery(
  $opticalMultiplexSectionId: ID!
) {
  getOpticalMultiplexSectionById(id: $opticalMultiplexSectionId) {
    ...OpticalMultiplexSectionUpdateForm_opticalMultiplexSection
    id
  }
}

fragment OpticalMultiplexSectionUpdateForm_opticalMultiplexSection on OpticalMultiplexSection {
  id
  name
  description
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
    "name": "opticalMultiplexSectionId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "opticalMultiplexSectionId"
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
    "name": "OpticalMultiplexSectionUpdateFormRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "OpticalMultiplexSection",
        "kind": "LinkedField",
        "name": "getOpticalMultiplexSectionById",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "OpticalMultiplexSectionUpdateForm_opticalMultiplexSection"
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
    "name": "OpticalMultiplexSectionUpdateFormRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "OpticalMultiplexSection",
        "kind": "LinkedField",
        "name": "getOpticalMultiplexSectionById",
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
            "kind": "ScalarField",
            "name": "description",
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
    "name": "OpticalMultiplexSectionUpdateFormRefetchQuery",
    "operationKind": "query",
    "text": "query OpticalMultiplexSectionUpdateFormRefetchQuery(\n  $opticalMultiplexSectionId: ID!\n) {\n  getOpticalMultiplexSectionById(id: $opticalMultiplexSectionId) {\n    ...OpticalMultiplexSectionUpdateForm_opticalMultiplexSection\n    id\n  }\n}\n\nfragment OpticalMultiplexSectionUpdateForm_opticalMultiplexSection on OpticalMultiplexSection {\n  id\n  name\n  description\n  comments {\n    id\n    user {\n      first_name\n      last_name\n      id\n    }\n    comment\n    submit_date\n  }\n  created\n  creator {\n    email\n    id\n  }\n  modified\n  modifier {\n    email\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '49e3c95b56fa0b5f8a6a60536d157f73';

module.exports = node;
