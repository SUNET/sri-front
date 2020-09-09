import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateSiteOwnerFormContainer from '../../../containers/siteOwner/CreateSiteOwnerForm';

const CreateSiteOwnerRoute = ({ history }) => <CreateSiteOwnerFormContainer history={history} />;

export default withTranslation()(withRouter(CreateSiteOwnerRoute));
