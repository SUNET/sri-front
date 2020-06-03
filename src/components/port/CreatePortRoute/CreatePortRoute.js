import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreatePortFormContainer from '../../../containers/port/CreatePortForm';

const CreatePortRoute = ({ history }) => <CreatePortFormContainer history={history} />;

export default withTranslation()(withRouter(CreatePortRoute));
