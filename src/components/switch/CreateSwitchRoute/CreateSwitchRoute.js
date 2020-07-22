import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateSwitchFormContainer from '../../../containers/switch/CreateSwitchForm';

const CreateSwitchRoute = ({ history }) => <CreateSwitchFormContainer history={history} />;

export default withTranslation()(withRouter(CreateSwitchRoute));
