const REQUIRED_TEXT = "* Required!";

export default class ValidationsCableForm {
    static validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = REQUIRED_TEXT;
        }
        if (!values.cable_type) {
            errors.cable_type = REQUIRED_TEXT;
        }
        return errors;
    };
}
