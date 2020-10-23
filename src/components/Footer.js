import React from 'react';
import { withTranslation } from 'react-i18next';

import '../style/Footer.scss';

function Footer({ t, i18n }) {
  return <footer>{t('footer.copyright') + ', ' + new Date().getFullYear()}</footer>;
}

export default withTranslation()(Footer);
