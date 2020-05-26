import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';

class FieldArrayConnectedToPort extends _BasicFieldArrayParentClass {
  constructor(props) {
    super(props);
    this.HEADER_TEXTS = {
      summary: [
        {
          text: 'contact-details.name',
          fieldKey: 'name',
        },
      ],
      all: [
        {
          text: 'contact-details.name',
          fieldKey: 'name',
        },
        {
          text: 'organization-details.type',
          fieldKey: 'type.name',
        },
        {
          text: 'group-details.description',
          fieldKey: 'description',
        },
      ],
      modal: ['network.details.connectedTo_element_detail'],
    };
    this.TYPE_FIELD_NAMES = {
      Port: 'port_type',
      Cable: 'cable_type',
    };
    this.PRE_FILTER_SELECT = {
      label: 'cable.select_type',
      type: 'cable_types',
      name: 'cable_types_preFilter',
    };
  }
}

export default withTranslation()(FieldArrayConnectedToPort);
