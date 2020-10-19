import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';

import MultiDropdownAutocomplete from './MultiDropdownAutocomplete';
import MultiDropdownAutocompleteLocations from './MultiDropdownAutocompleteLocations';

import '../style/Footer.scss';

function Contracts({ t, i18n }) {
  const [data, setData] = useState([{ id: 'UmFjazo1NDIy', name: 'Lindgren Lindberg AB' }]);
  return (
    <div
      style={{
        width: 450,
      }}
    >
      <MultiDropdownAutocompleteLocations
        onSelectOption={(newSelection) => {
          setData(newSelection);
        }}
      />
    </div>
  );
}

export default withTranslation()(Contracts);
