import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateProviderFormContainer from '../../../containers/provider/CreateProviderForm';

const CreateProviderRoute = ({ history }) => <CreateProviderFormContainer history={history} />;

export default withTranslation()(withRouter(CreateProviderRoute));
