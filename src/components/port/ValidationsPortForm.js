const REQUIRED_TEXT = '* Required!';

export default class ValidationsPortForm {
  static validate = (values, isCreationForm = false) => {
    const errors = {};
    if (!values.name) {
      errors.name = REQUIRED_TEXT;
    }
    return errors;
  };
  static validateWithType = (values) => {
    return ValidationsPortForm.validate(values, true);
  };
}
