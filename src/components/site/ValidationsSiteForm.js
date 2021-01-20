const REQUIRED_TEXT = '* Required!';

export default class ValidationCustomerForm {
  static validate = (values) => {
    console.log('---->', values.country);
    const errors = {};
    if (!values.name) {
      errors.name = REQUIRED_TEXT;
    }
    if (!values.country_value) {
      errors.country_value = REQUIRED_TEXT;
    }
    return errors;
  };
}
