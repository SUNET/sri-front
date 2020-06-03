import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateCableFormContainer from '../../../containers/cable/CreateCableForm';

const CreateCableRoute = ({ history }) => <CreateCableFormContainer history={history} />;

export default withTranslation()(withRouter(CreateCableRoute));
