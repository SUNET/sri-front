import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateSiteFormContainer from '../../../containers/site/CreateSiteForm';

const CreateSiteRoute = ({ history }) => <CreateSiteFormContainer history={history} />;

export default withTranslation()(withRouter(CreateSiteRoute));
