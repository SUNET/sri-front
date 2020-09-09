import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateOpticalNodeFormContainer from '../../../containers/opticalNode/CreateOpticalNodeForm';

const CreateOpticalNodeRoute = ({ history }) => <CreateOpticalNodeFormContainer history={history} />;

export default withTranslation()(withRouter(CreateOpticalNodeRoute));
