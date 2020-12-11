const REQUIRED_TEXT = '* Required!';

export default class ValidationsServiceForm {
  static validate = (values, isCreationForm = false) => {
    const errors = {};
    if (!values.operational_state) {
      errors.operational_state = REQUIRED_TEXT;
    }
    if (!values.service_type_id) {
      errors.service_type_id = REQUIRED_TEXT;
    }
    return errors;
  };
  static validateWithType = (values) => {
    return ValidationsServiceForm.validate(values, true);
  };
}
