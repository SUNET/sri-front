import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateOpticalLinkFormContainer from '../../../containers/opticalLink/CreateOpticalLinkForm';

const CreateOpticalLinkRoute = ({ history }) => <CreateOpticalLinkFormContainer history={history} />;

export default withTranslation()(withRouter(CreateOpticalLinkRoute));
