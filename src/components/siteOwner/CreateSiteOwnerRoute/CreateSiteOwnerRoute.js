import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateCustomerFormContainer from '../../../containers/customer/CreateCustomerForm';

const CreateSiteOwnerRoute = ({ history }) => <CreateCustomerFormContainer history={history} />;

export default withTranslation()(withRouter(CreateSiteOwnerRoute));
