// import { fetchQuery } from "relay-runtime";
// import graphql from "babel-plugin-relay/macro";
// import environment from "../../createRelayEnvironment";

// const query = graphql`
//     query RelationshipGroupContactQuery($group_id: ID!, $contact_id: ID!) {
//         getGroupContactRelations(group_id: $group_id, contact_id: $contact_id) {
//             id
//             relation_id
//             type
//             start {
//                 id
//                 node_name
//             }
//             end {
//                 id
//                 node_name
//             }
//         }
//     }
// `;

// function RelationshipGroupContactQuery(group, contact, mutation) {
//     const variables = {
//         group_id: group,
//         contact_id: contact
//     };
//     fetchQuery(environment, query, variables).then((data) => {
//         if (data.getGroupContactRelations[0]) {
//             mutation(data.getGroupContactRelations[0].relation_id);
//         }
//     });
// }

// export default RelationshipGroupContactQuery;
