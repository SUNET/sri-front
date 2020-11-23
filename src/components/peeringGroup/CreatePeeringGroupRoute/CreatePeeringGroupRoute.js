import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreatePeeringGroupFormContainer from '../../../containers/peeringGroup/CreatePeeringGroupForm';

const CreatePeeringGroupRoute = ({ history }) => <CreatePeeringGroupFormContainer history={history} />;

export default withTranslation()(withRouter(CreatePeeringGroupRoute));
