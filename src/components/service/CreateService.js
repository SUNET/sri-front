import React from 'react';
import CreateServiceFormContainer from '../../containers/service/CreateServiceForm';

class CreateService extends React.Component {
  render() {
    return <CreateServiceFormContainer {...this.props} />;
  }
}

export default CreateService;
