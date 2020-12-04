import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateOpticalMultiplexSectionFormContainer from '../../../containers/opticalMultiplexSection/CreateOpticalMultiplexSectionForm';

const CreateOpticalMultiplexSectionRoute = ({ history }) => <CreateOpticalMultiplexSectionFormContainer history={history} />;

export default withTranslation()(withRouter(CreateOpticalMultiplexSectionRoute));
