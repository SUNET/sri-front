import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateODFFormContainer from '../../../containers/ODF/CreateODFForm';

const CreateODFRoute = ({ history }) => <CreateODFFormContainer history={history} />;

export default withTranslation()(withRouter(CreateODFRoute));
