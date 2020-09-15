import React from 'react';
import { withTranslation } from 'react-i18next';

import '../style/Footer.scss';

function Contracts({ t, i18n }) {
  return (
    <div>
      <p>Contracts</p>
    </div>
  );
}

export default withTranslation()(Contracts);
