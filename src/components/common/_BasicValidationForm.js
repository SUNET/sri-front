import urlRegex from "url-regex";
const REQUIRED_TEXT = "* Required!";

export default class ValidationCustomerForm {
    static validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = REQUIRED_TEXT;
        }
        if (values.website) {
            if (!urlRegex({ exact: true, strict: false }).test(values.website)) {
                errors.website = "* Invalid url!";
            }
        }
        return errors;
    };
}
