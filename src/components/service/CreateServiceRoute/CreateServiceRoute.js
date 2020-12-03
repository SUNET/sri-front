import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateServiceFormContainer from '../../../containers/service/CreateServiceForm';

const CreateServiceRoute = ({ history }) => <CreateServiceFormContainer history={history} />;

export default withTranslation()(withRouter(CreateServiceRoute));
