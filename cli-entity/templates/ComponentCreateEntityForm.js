import _BasicFormParentClass from '../common/_BasicFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import Create__EntityClassName__Mutation from '../../mutations/__entityName__/Create__EntityClassName__Mutation';
import Validations__EntityClassName__Form from '../common/_BasicValidationForm';
// const
import { CREATE___CONST_NAME___FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class Create__EntityClassName__Form extends _BasicFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE___CONST_NAME___FORM;
  ROUTE_LIST_DIRECTION = '/__entityBlock__/__entityInternalRoutePath__s';
  state = {
    errors: [],
  };
  handleSubmit = (__entityName__) => {
    Create__EntityClassName__Mutation(__entityName__, this);
  };
  render() {
    const { handleSubmit } = this.props;
    const editMode = true;
    const showBackButton = isBrowser;
    return (
      <form id={this.FORM_ID} onSubmit={handleSubmit(this.handleSubmit)}>
        {isBrowser && this.renderSaveCancelButtons()}
        <div className="model-details create-contact-form">
          {this.renderHeader(editMode, showBackButton)}
          {this.renderModelMainSection(editMode)}
          {this.renderWorkLog(editMode)}
        </div>
        {this.renderSaveCancelButtons()}
      </form>
    );
  }
}

Create__EntityClassName__Form = reduxForm({
  validate: Validations__EntityClassName__Form.validate,
  initialValues: {
    name: '',
  },
})(Create__EntityClassName__Form);

export default withTranslation()(withRouter(Create__EntityClassName__Form));
