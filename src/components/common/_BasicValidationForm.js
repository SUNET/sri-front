const REQUIRED_TEXT = "* Required!";

export default class ValidationCustomerForm {
    static validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = REQUIRED_TEXT;
        }
        return errors;
    };
}
