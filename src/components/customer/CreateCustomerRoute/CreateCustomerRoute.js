import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateCustomerFormContainer from '../../../containers/customer/CreateCustomerForm';

const CreateCustomerRoute = ({ history }) => <CreateCustomerFormContainer history={history} />;

export default withTranslation()(withRouter(CreateCustomerRoute));
