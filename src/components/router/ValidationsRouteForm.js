const REQUIRED_TEXT = '* Required!';

export default class ValidationsRouteForm {
  static validate = (values, isCreationForm = false) => {
    const errors = {};
    if (!values.operational_state) {
      errors.operational_state = REQUIRED_TEXT;
    }
    return errors;
  };
  static validateWithType = (values) => {
    return ValidationsRouteForm.validate(values, true);
  };
}
