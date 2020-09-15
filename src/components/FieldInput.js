import React from 'react';
import { Form } from 'react-bootstrap';

class FieldInput extends React.Component {
  render() {
    const {
      input,
      meta: { touched, error },
    } = this.props;
    const copyProps = { ...this.props };
    const has_error = touched && error;
    delete copyProps['input'];
    delete copyProps['meta'];
    return (
      <div className={`w-100 ${has_error ? 'has-error' : ''}`}>
        <Form.Control {...copyProps} {...input} />
        {has_error && <span>{error}</span>}
      </div>
    );
  }
}

export default FieldInput;
