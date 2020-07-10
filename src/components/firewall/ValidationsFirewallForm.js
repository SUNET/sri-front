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
    if (!values.end_support) {
      errors.end_support = REQUIRED_TEXT;
    }
    if (!values.rack_units) {
      errors.rack_units = REQUIRED_TEXT;
    }
    if (!values.max_number_of_ports) {
      errors.max_number_of_ports = REQUIRED_TEXT;
    }
    return errors;
  };
  static validateWithType = (values) => {
    return ValidationsCableForm.validate(values, true);
  };
}
