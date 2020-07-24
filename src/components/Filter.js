import React from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTranslation } from 'react-i18next';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { debounce } from '../utils';
import PropTypes from 'prop-types';
import { MILLISECONDS_TO_WAIT_REQUEST_AUTOCOMPLETE } from '../utils/constants';

import '../style/Filter.scss';

export class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterValue: props.initialValue || '',
    };
  }

  changeFilterDebounce = debounce(this.changeFilter, MILLISECONDS_TO_WAIT_REQUEST_AUTOCOMPLETE);

  changeFilter(newFilter) {
    this.props.changeFilter(newFilter);
  }

  clearFilter() {
    this.setState({ filterValue: '' });
    this.props.changeFilter('');
  }

  render() {
    const { t } = this.props;
    return (
      <div className="filter">
        <Form.Control
          placeholder={t('filter.text.placeholder')}
          name="filter"
          type="text"
          value={this.state.filterValue}
          onChange={(e) => {
            this.setState({ filterValue: e.target.value });
            this.changeFilterDebounce(e.target.value);
          }}
          ref={(input) => (this.input = input)}
        />
        {this.state.filterValue && (
          <div className="clear-input-cta" onClick={() => this.clearFilter()}>
            <FontAwesomeIcon className="clear-input" icon={faTimes} />
          </div>
        )}
      </div>
    );
  }
}

Filter.defaultValues = {
  initialValue: '',
};

Filter.propTypes = {
  initialValue: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Filter);
