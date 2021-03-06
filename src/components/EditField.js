import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { Field, change } from 'redux-form';

import FieldInput from './FieldInput';

import '../style/EditField.scss';

class EditField extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  deleteInitialValue = () => {
    if (this.props.value === this.props.initialValue) {
      this.props.dispatch(change(this.props.form, 'name', ''));
    }
  };

  render() {
    const { error, meta } = this.props;
    const has_error = meta && meta.touched && error;
    return (
      <span className="edit-field">
        <Form.Group className={`${!this.props.editable ? 'd-none' : 'd-inline'}`}>
          <Field
            className="form-control edit-field-title auto"
            placeholder={this.props.placeholder || 'New'}
            component={FieldInput}
            name={this.props.name || 'name'}
          />
        </Form.Group>
        <span className={`${this.props.editable ? 'd-none' : 'd-inline'} ${has_error ? 'error-title' : ''}`}>
          {this.props.children}
        </span>
      </span>
    );
  }
}

export default EditField;
