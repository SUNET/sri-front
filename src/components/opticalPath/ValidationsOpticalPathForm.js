const REQUIRED_TEXT = '* Required!';

export default class ValidationsOpticalPathForm {
  static validate = (values, isCreationForm = false) => {
    const errors = {};
    if (!values.name) {
      errors.name = REQUIRED_TEXT;
    }
    if (!values.operational_state) {
      errors.operational_state = REQUIRED_TEXT;
    }
    if (!values.framing) {
      errors.framing = REQUIRED_TEXT;
    }
    if (!values.capacity) {
      errors.capacity = REQUIRED_TEXT;
    }
    return errors;
  };
  static validateWithType = (values) => {
    return ValidationsOpticalPathForm.validate(values, true);
  };
}
