import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateRackFormContainer from '../../../containers/rack/CreateRackForm';

const CreateRackRoute = ({ history }) => <CreateRackFormContainer history={history} />;

export default withTranslation()(withRouter(CreateRackRoute));
