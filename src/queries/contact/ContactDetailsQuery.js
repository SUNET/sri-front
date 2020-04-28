import graphql from "babel-plugin-relay/macro";

const ContactDetailsQuery = graphql`
    query ContactDetailsQuery($contactId: ID!) {
        getContactById(id: $contactId) {
            ...ContactUpdateForm_contact
            id
            name
            notes
            title
            contact_type {
                name
                value
            }
            first_name
            last_name
            pgp_fingerprint
            emails {
                id
                name
                type {
                    name
                    value
                }
            }
            phones {
                id
                name
                type {
                    name
                    value
                }
            }
            roles {
                relation_id
                role_data {
                    id
                    name
                }
                end {
                    id
                    name
                    organization_id
                    organization_number
                }
            }
            created
            creator {
                email
            }
            modified
            modifier {
                email
            }
            comments {
                id
                user {
                    first_name
                    last_name
                }
                comment
                submit_date
            }
        }
    }
`;

export default ContactDetailsQuery;
