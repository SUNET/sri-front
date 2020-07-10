import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateEndUserFormContainer from '../../../containers/endUser/CreateEndUserForm';

const CreateEndUserRoute = ({ history }) => <CreateEndUserFormContainer history={history} />;

export default withTranslation()(withRouter(CreateEndUserRoute));
