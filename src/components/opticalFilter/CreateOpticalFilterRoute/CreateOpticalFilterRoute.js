import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateOpticalFilterFormContainer from '../../../containers/opticalFilter/CreateOpticalFilterForm';

const CreateOpticalFilterRoute = ({ history }) => <CreateOpticalFilterFormContainer history={history} />;

export default withTranslation()(withRouter(CreateOpticalFilterRoute));
