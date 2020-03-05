import { fetchQuery } from "relay-runtime";
import environment from "../../createRelayEnvironment";
import graphql from "babel-plugin-relay/macro";

const ContactQuery = graphql`
    query ContactQuery($contactId: ID!) {
        getContactById(id: $contactId) {
            id
            name
            first_name
            last_name
            contact_type
            emails {
                id
                name
                type
            }
            phones {
                id
                name
                type
            }
            roles {
                role_data {
                    id
                    name
                }
                end {
                    id
                    name
                }
            }
        }
    }
`;

export const getContact = (id) => {
    return fetchQuery(environment, ContactQuery, {
        contactId: id
    }).then((data) => {
        return data.getContactById;
    });
};
