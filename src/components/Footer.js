import React from 'react';
import { withTranslation } from 'react-i18next';

import '../style/Footer.scss';


function Footer({t, i18n}) {
    return (
        <footer className="row">
            <p>
               {t('footer.copyright')}
            </p>
        </footer>
  );
}

export default withTranslation()(Footer);
