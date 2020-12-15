import _PortFormParentClass from './_PortFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdatePortMutation from '../../mutations/port/UpdatePortMutation';
import ValidationsPortForm from './ValidationsPortForm';
// const
import { UPDATE_PORT_FORM, REMOVE } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class PortUpdateForm extends _PortFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_PORT_FORM;
  MODEL_NAME = 'port';
  ROUTE_LIST_DIRECTION = '/network/ports';
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.isEditModeModal,
    };
  }

  refetch = () => {
    this.props.relay.refetch(
      { portId: this.props.port.id }, // Our refetchQuery needs to know the `portID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        this.updateBreadcrumbsData();
      },
      { force: true },
    );
  };

  handleSubmit = (entityData) => {
    this.setState({ editMode: false });
    this.props.hideModalForm();
    // const parentToRemove = entityData?.parent?.filter((parent) => parent.status === REMOVE);
    // const connectionsToRemove = entityData?.connected_to?.filter((connection) => connection.status === REMOVE);
    // const someItemWillBeDeleted = parentToRemove.length > 0 || connectionsToRemove.length > 0;
    if (false) {
      this.entityDataToUpdate = entityData;
      this.props.showModalConfirm('partialDelete');
    } else {
      this.updateMutation(entityData, this);
    }
  };

  updateMutation(entityData, form) {
    UpdatePortMutation(entityData, form);
  }

  render() {
    let { handleSubmit, isFromModal } = this.props;
    const { editMode } = this.state;
    const showBackButton = isBrowser && !isFromModal;
    const showSaveCancelInHeader = showBackButton;
    const formId = `${this.FORM_ID}${isFromModal ? 'InModal' : ''}`;
    return (
      <form id={formId} onSubmit={handleSubmit(this.handleSubmit)}>
        {showSaveCancelInHeader && this.renderSaveCancelButtons()}
        {this.renderHeader(editMode, showBackButton)}
        {this.renderSections(editMode)}
        {!isFromModal && this.renderSaveCancelButtons()}
      </form>
    );
  }
}

PortUpdateForm = reduxForm({
  validate: ValidationsPortForm.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(PortUpdateForm);

const PortUpdateFragment = createRefetchContainer(
  withTranslation()(PortUpdateForm),
  {
    port: graphql`
      fragment PortUpdateForm_port on Port {
        id
name
description
__typename

    comments {
      id

    user {
      first_name
last_name
      
    }
comment
submit_date
      
    }
created

    creator {
      email
      
    }
modified

    modifier {
      email
      
    }

    type: port_type {
        __typename
        name
        value
    }
  

    location {
        __typename
        id
        name
        id
name
description
__typename

    parent {
        __typename
        id
        name
        
    parent {
        __typename
        id
        name
        id
name
description
__typename
        
    }
  
        
    }
  
        
    }
  

    connected_to {
      id
name
description
__typename
relation_id
      ...on Cable {
       
    type: cable_type {
        __typename
        name
        value
    }
  

    ports {
      id
name
description
__typename

    type: port_type {
        __typename
        name
        value
    }
  

    parent {
      id
name
description
__typename
      ...on Physical {
       
    location {
        __typename
        id
        name
        id
name
description
__typename

    parent {
        __typename
        id
        name
        
    parent {
        __typename
        id
        name
        id
name
description
__typename
        
    }
  
        
    }
  
        
    }
  
    }
    }
      
    }
    }
    }

    parent {
      id
name
description
__typename
relation_id

    operational_state {
        __typename
        name
        value
    }
  
      ...on Port {
       
    type: port_type {
        __typename
        name
        value
    }
  
    },...on Cable {
       
    type: cable_type {
        __typename
        name
        value
    }
  
    },...on OpticalNode {
       
    type {
        __typename
        name
        value
    }
  
    }
    }

    dependents {
      id
name
description
__typename
relation_id

    operational_state {
        __typename
        name
        value
    }
  
      ...on Service {
       
    type: service_type {
        __typename
        id
        name
        
        
    }
  

    service_type {
        __typename
        id
        name
        
        
    }
  
    },...on OpticalPath {
       wavelength

    framing {
        __typename
        name
        value
    }
  

    capacity {
        __typename
        name
        value
    }
  

    operational_state {
        __typename
        name
        value
    }
  
    },...on OpticalMultiplexSection {
       
    operational_state {
        __typename
        name
        value
    }
  
    },...on OpticalLink {
       
    type: link_type {
        __typename
        name
        value
    }
  

    interface_type {
        __typename
        name
        value
    }
  

    operational_state {
        __typename
        name
        value
    }
  

    ports {
      id
name
description
__typename
      
    }
    }
    }
      }
    `,
  },

  graphql`
    # Refetch query to be fetched upon calling 'refetch'.
    # Notice that we re-use our fragment and the shape of this query matches our fragment spec.
    query PortUpdateFormRefetchQuery($portId: ID!) {
      getPortById(id: $portId) {
        ...PortUpdateForm_port
      }
    }
  `,
);

export default PortUpdateFragment;
