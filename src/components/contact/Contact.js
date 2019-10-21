import { fetchQuery } from "relay-runtime";
import environment from "../../createRelayEnvironment";
import graphql from "babel-plugin-relay/macro";

const ContactQuery = graphql`
    query ContactQuery($contactId: Int!) {
        getContactById(handle_id: $contactId) {
            handle_id
            name
            first_name
            last_name
            contact_type
            emails {
                handle_id
                name
                type
            }
            phones {
                handle_id
                name
                type
            }
            roles {
                role_data {
                    handle_id
                    name
                }
                end {
                    handle_id
                    name
                }
            }
        }
    }
`;

export const getContact = (handle_id) => {
    return fetchQuery(environment, ContactQuery, {
        contactId: handle_id
    }).then((data) => {
        return data.getContactById;
    });
};
