const REQUIRED_TEXT = '* Required!';

export default class ValidationsOpticalMultiplexSectionForm {
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
    return ValidationsOpticalMultiplexSectionForm.validate(values, true);
  };
}
