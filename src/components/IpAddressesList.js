import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { withTranslation } from 'react-i18next';

import '../style/IpAddressesList.scss';

const isValidIp = (ipText) => {
  const IP_REGEX = /([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(\d{1,3}\.){3}\d{1,3}/;
  return IP_REGEX.test(ipText);
};

class IpAddressesList extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      validIp: true,
    };
  }

  onClickRemove(index) {
    const { ipList, onChangeIpList } = this.props;
    const ipListCopy = [...ipList];
    ipListCopy.splice(index, 1);
    onChangeIpList(ipListCopy);
  }

  onClickAddNew() {
    const ipString = this.input.current.value.trim();
    if (ipString && isValidIp(ipString)) {
      const { ipList, onChangeIpList } = this.props;
      const ipListCopy = [...ipList];
      ipListCopy.push(ipString);
      this.input.current.value = '';
      this.setState({ validIp: true });
      onChangeIpList(ipListCopy);
    } else {
      this.setState({ validIp: false });
    }
  }

  renderListBlock() {
    const { ipList, editMode } = this.props;
    return (
      <div className="ip-addresses-list__list-block">
        {ipList.map((ipAddress, index) => (
          <div className="ip-addresses-list__list-block__row" key={Math.random()}>
            <div className="ip-addresses-list__list-block__row__content">{ipAddress}</div>
            {editMode && (
              <button
                type="button"
                className="ip-addresses-list__list-block__row__cross-delete"
                onClick={() => this.onClickRemove(index)}
              >
                <span className="ip-addresses-list__list-block__row__cross-delete__icon">
                  <FontAwesomeIcon icon={faTimes} className="" />
                </span>
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }

  renderAddNewBlock() {
    const { t } = this.props;
    const { validIp } = this.state;
    return (
      <div className="ip-addresses-list__add-new-block">
        <input
          className={`ip-addresses-list__add-new-block__text-input form-control ${!validIp ? 'invalid-input' : ''}`}
          type="text"
          ref={this.input}
          placeholder={t('general-forms/write-address')}
        />
        {!validIp && (
          <div className="ip-addresses-list__add-new-block__invalid-ip">
            {`* ${t('general-forms/validations/invalid-ip')}`}
          </div>
        )}
        <div className="ip-addresses-list__add-new-block__new-button form-control">
          <button variant="outline-primary" type="button" onClick={() => this.onClickAddNew()}>
            <span className="ip-addresses-list__add-new-block__new-button__icon">
              <FontAwesomeIcon icon={faPlus} className="" />
            </span>
            <span className="ip-addresses-list__add-new-block__new-button__text">{t('actions/add-new')}</span>
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { editMode } = this.props;
    return (
      <div className="ip-addresses-list">
        {this.renderListBlock()}
        {editMode && this.renderAddNewBlock()}
      </div>
    );
  }
}

IpAddressesList.defaultProps = {};

IpAddressesList.propTypes = {
  ipList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeIpList: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
};

export default withTranslation()(IpAddressesList);
