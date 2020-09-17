import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateHostFormContainer from '../../../containers/host/CreateHostForm';

const CreateHostRoute = ({ history }) => <CreateHostFormContainer history={history} />;

export default withTranslation()(withRouter(CreateHostRoute));
