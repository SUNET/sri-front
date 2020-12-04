import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CreateRoomFormContainer from '../../../containers/room/CreateRoomForm';

const CreateRoomRoute = ({ history }) => <CreateRoomFormContainer history={history} />;

export default withTranslation()(withRouter(CreateRoomRoute));
