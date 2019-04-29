import React from 'react';
import { withTranslation } from 'react-i18next';

import '../style/Header.scss';


function Header({t, i18n}) {
    return (
        <header className="row">
            <p>
                {t('header.welcome')}
            </p>
        </header>
  );
}

export default withTranslation()(Header);
