const REQUIRED_TEXT = '* Required!';

export default class ValidationsGroupForm {
  static validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = REQUIRED_TEXT;
    }
    return errors;
  };
}
