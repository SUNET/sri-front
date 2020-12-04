import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateOpticalPathFormContainer from '../../../containers/opticalPath/CreateOpticalPathForm';

const CreateOpticalPathRoute = ({ history }) => <CreateOpticalPathFormContainer history={history} />;

export default withTranslation()(withRouter(CreateOpticalPathRoute));
