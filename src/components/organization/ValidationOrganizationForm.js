import { checkOrganization, getOrganizationByOrganizationId } from "../../components/organization/Organization";
import urlRegex from "url-regex";
import { change } from "redux-form";
const REQUIRED_TEXT = "* Required!";

export default class ValidationsOrganizationForm {
    static organizationFormValidate = (values, props) => {
        const errors = {};
        if (!values.name || values.name === "New organization") {
            errors.name = REQUIRED_TEXT;
        }

        if (!values.type) {
            errors.type = REQUIRED_TEXT;
        }

        if (!values.organization_id) {
            errors.organization_id = REQUIRED_TEXT;
        }

        if (values.organization_parent_id) {
            if (values.organization_parent_id === values.organization_id) {
                errors.organization_parent_id = "* Invalid Id!";
            }
        }

        if (values.website) {
            if (!urlRegex({ exact: true, strict: false }).test(values.website)) {
                errors.website = "* Invalid url!";
            }
        }

        if (
            (props.affiliation.customer === undefined || props.affiliation.customer === false) &&
            (props.affiliation.end_customer === undefined || props.affiliation.end_customer === false) &&
            (props.affiliation.host_user === undefined || props.affiliation.host_user === false) &&
            (props.affiliation.partner === undefined || props.affiliation.partner === false) &&
            (props.affiliation.provider === undefined || props.affiliation.provider === false) &&
            (props.affiliation.site_owner === undefined || props.affiliation.site_owner === false)
        ) {
            errors.affiliation = REQUIRED_TEXT;
        }

        if (values.addresses) {
            const addressArrayErrors = [];
            values.addresses.forEach((address, addressIndex) => {
                const addressErrors = {};
                if (!address || !address.street) {
                    addressErrors.street = REQUIRED_TEXT;
                    addressArrayErrors[addressIndex] = addressErrors;
                }
                if (!address || !address.postal_code) {
                    addressErrors.postal_code = REQUIRED_TEXT;
                    addressArrayErrors[addressIndex] = addressErrors;
                }
                if (!address || !address.postal_area) {
                    addressErrors.postal_area = REQUIRED_TEXT;
                    addressArrayErrors[addressIndex] = addressErrors;
                }
                if (!address || !address.phone) {
                    addressErrors.phone = REQUIRED_TEXT;
                    addressArrayErrors[addressIndex] = addressErrors;
                }
                return addressErrors;
            });
            if (addressArrayErrors.length) {
                errors.addresses = addressArrayErrors;
            }
        }

        if (values.contacts) {
            const contactArrayErrors = [];
            values.contacts.forEach((contact, contactIndex) => {
                const contactErrors = {};
                if (!contact || !contact.name) {
                    contactErrors.name = REQUIRED_TEXT;
                    contactArrayErrors[contactIndex] = contactErrors;
                }
                if (!contact || !contact.role) {
                    contactErrors.role = REQUIRED_TEXT;
                    contactArrayErrors[contactIndex] = contactErrors;
                }
                if (!contact || !contact.email) {
                    contactErrors.email = REQUIRED_TEXT;
                    contactArrayErrors[contactIndex] = contactErrors;
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(contact.email)) {
                    contactErrors.email = "* Invalid email!";
                    contactArrayErrors[contactIndex] = contactErrors;
                }
                if (!contact || !contact.phone) {
                    contactErrors.phone = REQUIRED_TEXT;
                    contactArrayErrors[contactIndex] = contactErrors;
                }
                return contactErrors;
            });
            if (contactArrayErrors.length) {
                errors.contacts = contactArrayErrors;
            }
        }
        return errors;
    };

    static asyncValidate_organization_id = (values, dispatch) => {
        if (values.organization_id) {
            return checkOrganization(values.organization_id, values.handle_id).then((exists) => {
                if (exists) {
                    // this absurdity, is by the error of non-throw-literal
                    const error = { organization_id: "Already exist!" };
                    throw error;
                }
            });
        }
    };

    static asyncValidate_relationship_parent_of = (values, dispatch, props) => {
        if (values.organization_parent_id) {
            return checkOrganization(values.organization_parent_id).then((exists) => {
                if (!exists) {
                    // this absurdity, is by the error of non-throw-literal
                    const error = { organization_parent_id: "Doesn't match any organization!" };
                    throw error;
                } else {
                    getOrganizationByOrganizationId(values.organization_parent_id).then((organization) => {
                        if (organization) {
                            dispatch(change("updateOrganization", `relationship_parent_of`, organization));
                        }
                    });
                }
            });
        }
    };

    static composeAsyncValidators = (validatorFns) => {
        return async (values, dispatch, props, field) => {
            let errors;
            for (const validatorFn of validatorFns) {
                try {
                    await validatorFn(values, dispatch, props, field);
                } catch (err) {
                    errors = Object.assign({}, errors, err);
                }
            }

            if (errors) throw errors;
        };
    };
}
