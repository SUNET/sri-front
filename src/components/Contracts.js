import React from 'react';
import { withTranslation } from 'react-i18next';

import '../style/Footer.scss';

function Contracts({ t, i18n }) {
  return (
    <div
      style={{
        width: 450,
      }}
    ></div>
  );
}

export default withTranslation()(Contracts);
