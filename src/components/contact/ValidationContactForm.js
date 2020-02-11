const REQUIRED_TEXT = "* Required!";

export default class ValidationsContactForm {
    static contactFormValidate = (values, props) => {
        const errors = {};
        if (!values.name) {
            errors.name = REQUIRED_TEXT;
        }

        if (!values.first_name) {
            errors.first_name = REQUIRED_TEXT;
        }

        if (!values.last_name) {
            errors.last_name = REQUIRED_TEXT;
        }

        if (!values.contact_type) {
            errors.contact_type = REQUIRED_TEXT;
        }

        if (values.emails) {
            const emailArrayErrors = [];
            values.emails.forEach((email, emailIndex) => {
                const emailErrors = {};
                if (!email || !email.email) {
                    emailErrors.email = REQUIRED_TEXT;
                    emailArrayErrors[emailIndex] = emailErrors;
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.email)) {
                    emailErrors.email = "* Invalid email!";
                    emailArrayErrors[emailIndex] = emailErrors;
                }
                if (!email || !email.type) {
                    emailErrors.type = REQUIRED_TEXT;
                    emailArrayErrors[emailIndex] = emailErrors;
                }
                return emailErrors;
            });
            if (emailArrayErrors.length) {
                errors.emails = emailArrayErrors;
            }
        }

        if (values.phones) {
            const phoneArrayErrors = [];
            values.phones.forEach((phone, phoneIndex) => {
                const phoneErrors = {};
                if (!phone || !phone.phone) {
                    phoneErrors.phone = REQUIRED_TEXT;
                    phoneArrayErrors[phoneIndex] = phoneErrors;
                }
                if (!phone || !phone.type) {
                    phoneErrors.type = REQUIRED_TEXT;
                    phoneArrayErrors[phoneIndex] = phoneErrors;
                }
                return phoneErrors;
            });
            if (phoneArrayErrors.length) {
                errors.phones = phoneArrayErrors;
            }
        }

        if (values.organizations) {
            const organizationArrayErrors = [];
            values.organizations.forEach((organization, organizationIndex) => {
                const organizationErrors = {};
                if (!organization || !organization.role) {
                    organizationErrors.role = REQUIRED_TEXT;
                    organizationArrayErrors[organizationIndex] = organizationErrors;
                }
                if (!organization || !organization.organization) {
                    organizationErrors.organization = REQUIRED_TEXT;
                    organizationArrayErrors[organizationIndex] = organizationErrors;
                }
                return organizationErrors;
            });
            if (organizationArrayErrors.length) {
                errors.organizations = organizationArrayErrors;
            }
        }

        return errors;
    };
}
