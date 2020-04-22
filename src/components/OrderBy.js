import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import FieldSwitch from './FieldSwitch';

import '../style/OrderBy.scss';

export class OrderBy extends React.Component {
  handleOnChangeOrderBy(event) {
    const { changeOrderBy } = this.props;
    if (event.target.checked) {
      changeOrderBy('handle_id_ASC');
    } else {
      changeOrderBy('handle_id_DESC');
    }
  }

  render() {
    const { t } = this.props;
    return (
      <div className="order-by outline">
        <FieldSwitch
          type="toggle-icon"
          icon="angle"
          classNames="icon-right"
          labelChecked={t('filter.newest-first')}
          labelUnChecked={t('filter.latest-first')}
          handleChecked={(e) => this.handleOnChangeOrderBy(e)}
          id="orderBy"
        />
      </div>
    );
  }
}

OrderBy.propTypes = {
  changeOrderBy: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(OrderBy);
