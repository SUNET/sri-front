const REQUIRED_TEXT = '* Required!';

export default class ValidationsOpticalFilterForm {
  static validate = (values, isCreationForm = false) => {
    const errors = {};
    if (!values.name) {
      errors.name = REQUIRED_TEXT;
    }
    if (!values.operational_state) {
      errors.operational_state = REQUIRED_TEXT;
    }
    return errors;
  };
  static validateWithType = (values) => {
    return ValidationsOpticalFilterForm.validate(values, true);
  };
}
