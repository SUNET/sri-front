import React, { Component } from 'react';
// Common imports
import { withTranslation } from 'react-i18next';
import { Form } from 'react-bootstrap';
import { isBrowser } from 'react-device-detect';
import Dropdown from '../Dropdown';

import { CREATE } from '../../utils/constants';

import '../../style/bulkCreate.scss';

const titleByInputName = {
  type: 'general-forms/type',
  prefix: 'general-forms/bulk-port/prefix',
  offset: 'general-forms/bulk-port/offset',
};

const placeHolderByInputName = {
  type: 'general-forms/write-type',
  prefix: 'general-forms/bulk-port/prefix-placeholder',
  offset: 'general-forms/bulk-port/offset-placeholder',
  numberOfPorts: 'general-forms/bulk-port/Number-of-ports',
};

const errorByInputName = {
  type: 'general-forms/validations/required',
  prefix: 'general-forms/validations/required',
  offset: 'general-forms/validations/must-be-int',
  numberOfPorts: 'general-forms/validations/must-be-int',
};

function validRegularInput(value) {
  return !!value;
}

function validNumberInput(value) {
  const numberIntValue = Number.parseInt(value, 10);
  const isCorrectIntValue = Number.isInteger(numberIntValue);
  return isCorrectIntValue;
}

function validateField(inputName, value) {
  if (inputName === 'type' || inputName === 'prefix') {
    return validRegularInput(value);
  }
  return validNumberInput(value);
}

class BulkPort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: { value: '', valid: true },
      prefix: { value: '', valid: true },
      offset: { value: 0, valid: true },
      numberOfPorts: { value: '', valid: true },
    };
  }

  createNewPortsList() {
    const { type, prefix, offset, numberOfPorts } = this.state;
    const portList = [];
    let index = parseInt(offset.value, 10);
    const maxNumberWithOffset = parseInt(offset.value, 10) + parseInt(numberOfPorts.value, 10);
    for (index; index < maxNumberWithOffset; index += 1) {
      portList.push({
        type: {
          name: type.value,
          value: type.value,
        },
        __typename: 'Port',
        name: `${prefix.value}${index}`,
        id: `port-to-create-${index}-${maxNumberWithOffset}`,
        status: CREATE,
      });
    }
    return portList;
  }

  handleCreatePorts() {
    const { handleBulkPortResponse } = this.props;

    const isValid = this.areValidFields();

    if (isValid) {
      handleBulkPortResponse(this.createNewPortsList());
    }
  }

  areValidFields() {
    const { type, prefix, offset, numberOfPorts } = this.state;
    const typeValid = validateField('type', type.value);
    const prefixValid = validateField('prefix', prefix.value);
    const offsetValid = validateField('offset', offset.value);
    const numberOfPortsValid = validateField('numberOfPorts', numberOfPorts.value);
    this.setState({
      type: { ...type, ...{ valid: typeValid } },
      prefix: { ...prefix, ...{ valid: prefixValid } },
      offset: { ...offset, ...{ valid: offsetValid } },
      numberOfPorts: { ...numberOfPorts, ...{ valid: numberOfPortsValid } },
    });
    const areValidAllFields = typeValid && prefixValid && offsetValid && numberOfPortsValid;
    return areValidAllFields;
  }

  renderInput(inputName, hasError) {
    const { t } = this.props;
    const stateValue = this.state[inputName];
    const { value } = stateValue;
    return (
      <Form.Group>
        <div className={`${hasError ? 'has-error' : ''}`}>
          <Form.Control
            type="text"
            value={value}
            placeholder={t(placeHolderByInputName[inputName])}
            onChange={(event) => {
              this.setState({
                [inputName]: {
                  ...stateValue,
                  ...{ value: event.target.value },
                },
              });
            }}
          />
          {hasError && <span>{t(errorByInputName[inputName])}</span>}
        </div>
      </Form.Group>
    );
  }

  renderRegularInput(inputName) {
    const { t } = this.props;
    const stateValue = this.state[inputName];
    const hasError = !stateValue.valid;

    return (
      <div className={`form-internal-block__section bulk-create__${inputName}-block`} key={`bulk-port-${inputName}`}>
        <div className="form-internal-block__section__title">{t(titleByInputName[inputName])}</div>
        <div className={'form-internal-block__section__content form-internal-block__section__content--edition-mode'}>
          {this.renderInput(inputName, hasError)}
        </div>
      </div>
    );
  }

  renderNumberPortsInput() {
    const { numberOfPorts } = this.state;
    const hasError = !numberOfPorts.valid;
    const fieldName = 'ports-number';
    return (
      <div className={`bulk-create__right-block__number-input bulk-create__${fieldName}-block`}>
        {this.renderInput('numberOfPorts', hasError)}
      </div>
    );
  }

  renderSelectTypeInput() {
    const { t } = this.props;
    const { type } = this.state;
    const hasError = !type.valid;
    const fieldName = 'type';
    return (
      <div className={`form-internal-block__section bulk-create__${fieldName}-block`} key={`bulk-port-${'type'}`}>
        <div className="form-internal-block__section__title">{t(titleByInputName['type'])}</div>
        <div className={'form-internal-block__section__content form-internal-block__section__content--edition-mode'}>
          <Form.Group>
            <div className={`select-input ${hasError ? 'has-error' : ''}`}>
              <Dropdown
                t={t}
                className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
                emptyLabel="Select type"
                type="port_types"
                name="bulk-port_type"
                onChange={(event) => {
                  this.setState({
                    type: {
                      ...type,
                      ...{ value: event.value, valid: validateField('type', event.value) },
                    },
                  });
                }}
              />
              {hasError && <span>{t(errorByInputName['type'])}</span>}
            </div>
          </Form.Group>
        </div>
      </div>
    );
  }

  renderCreatePortsButton() {
    const { t } = this.props;
    return (
      <div className="bulk-create__right-block__add-button">
        <button type="button" className="btn btn-add outline" onClick={(e) => this.handleCreatePorts(e)}>
          <span>{t('actions/add-new')}</span>
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="bulk-create">
        <div className="bulk-create__left-block form-internal-block">
          {this.renderSelectTypeInput()}
          {this.renderRegularInput('prefix')}
          {this.renderRegularInput('offset')}
        </div>
        <div className="d-flex bulk-create__right-block">
          {this.renderNumberPortsInput()}
          {this.renderCreatePortsButton()}
        </div>
      </div>
    );
  }
}

export default withTranslation()(BulkPort);
