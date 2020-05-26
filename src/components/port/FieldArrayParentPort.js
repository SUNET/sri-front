import _BasicFieldArrayParentClass from '../common/_BasicFieldArrayParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';

class FieldArrayParentPort extends _BasicFieldArrayParentClass {
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
      modal: ['network.details.parent_element_detail'],
    };
    this.TYPE_FIELD_NAMES = {
      Port: 'port_type',
      Cable: 'cable_type',
    };

    this.PRE_FILTER_SELECT = {
      label: 'physical.select_type',
      type: 'physical_types',
      model: 'physical_types',
      name: 'physical_types_preFilter',
    };
  }

  // TODO: remove this method
  // renderPreFilterDropDown() {
  //   return (
  //     <select
  //       name={this.PRE_FILTER_SELECT.name}
  //       onChange={(e) => {
  //         this.setState({ currentPreFilterModel: e.target.value });
  //       }}
  //     >
  //       <option value="contacts">contacts</option>
  //       <option value="providers">providers</option>
  //     </select>
  //   );
  // }
}

export default withTranslation()(FieldArrayParentPort);
