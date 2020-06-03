import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateContactFormContainer from '../../../containers/contact/CreateContactForm';


const CreateContactRoute = ({ history }) => <CreateContactFormContainer history={history} />;

export default withTranslation()(withRouter(CreateContactRoute));
