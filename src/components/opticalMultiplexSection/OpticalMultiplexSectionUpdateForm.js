import _OpticalMultiplexSectionFormParentClass from './_OpticalMultiplexSectionFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UpdateOpticalMultiplexSectionMutation from '../../mutations/opticalMultiplexSection/UpdateOpticalMultiplexSectionMutation';
import ValidationsOpticalMultiplexSectionForm from './ValidationsOpticalMultiplexSectionForm';
// const
import { UPDATE_OPTICALMULTIPLEXSECTION_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class OpticalMultiplexSectionUpdateForm extends _OpticalMultiplexSectionFormParentClass {
  IS_UPDATED_FORM = true;
  FORM_ID = UPDATE_OPTICALMULTIPLEXSECTION_FORM;
  MODEL_NAME = 'opticalMultiplexSection';
  ROUTE_LIST_DIRECTION = '/network/optical-multiplex-sections';
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.isEditModeModal,
    };
  }
  refetch = () => {
    this.props.relay.refetch(
      { opticalMultiplexSectionId: this.props.opticalMultiplexSection.id }, // Our refetchQuery needs to know the `opticalMultiplexSectionID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        this.updateBreadcrumbsData();
      },
      { force: true },
    );
  };
  handleSubmit = (opticalMultiplexSection) => {
    this.setState({ editMode: false });
    UpdateOpticalMultiplexSectionMutation(opticalMultiplexSection, this);
  };
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

OpticalMultiplexSectionUpdateForm = reduxForm({
  validate: ValidationsOpticalMultiplexSectionForm.validate,
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    document.documentElement.scrollTop = 0;
  },
})(OpticalMultiplexSectionUpdateForm);

const OpticalMultiplexSectionUpdateFragment = createRefetchContainer(
  withTranslation()(OpticalMultiplexSectionUpdateForm),
  {
    opticalMultiplexSection: graphql`
      fragment OpticalMultiplexSectionUpdateForm_opticalMultiplexSection on OpticalMultiplexSection {
        id
name
description
__typename

    operational_state {
        __typename
        name
        value
    }
  

    provider {
        __typename
        id
        name
        
        
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

    dependencies {
      __typename
id
name
description
relation_id
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
    },...on Cable {
       
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
      
    }
    }
    }

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
      }
    `,
  },

  graphql`
    # Refetch query to be fetched upon calling 'refetch'.
    # Notice that we re-use our fragment and the shape of this query matches our fragment spec.
    query OpticalMultiplexSectionUpdateFormRefetchQuery($opticalMultiplexSectionId: ID!) {
      getOpticalMultiplexSectionById(id: $opticalMultiplexSectionId) {
        ...OpticalMultiplexSectionUpdateForm_opticalMultiplexSection
      }
    }
  `,
);

export default OpticalMultiplexSectionUpdateFragment;
