const REQUIRED_TEXT = '* Required!';

export default class ValidationsCableForm {
  static validate = (values, isCreationForm = false) => {
    const errors = {};
    if (!values.name) {
      errors.name = REQUIRED_TEXT;
    }
    if (!values.managed_by) {
      errors.managed_by = REQUIRED_TEXT;
    }
    if (!values.operational_state) {
      errors.operational_state = REQUIRED_TEXT;
    }
    if (isCreationForm && !values.switch_type) {
      errors.switch_type = REQUIRED_TEXT;
    }
    return errors;
  };
  static validateWithType = (values) => {
    return ValidationsCableForm.validate(values, true);
  };
}
