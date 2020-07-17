import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateExternalEquipmentFormContainer from '../../../containers/externalEquipment/CreateExternalEquipmentForm';

const CreateExternalEquipmentRoute = ({ history }) => <CreateExternalEquipmentFormContainer history={history} />;

export default withTranslation()(withRouter(CreateExternalEquipmentRoute));
