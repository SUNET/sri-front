import React from 'react';
import { Field, change } from 'redux-form';
import FieldInput from '../FieldInput';
import CopyToClipboard from '../CopyToClipboard';
import copy from 'clipboard-copy';
import { Modal } from 'react-bootstrap';
import { isBrowser, isMobile } from 'react-device-detect';
// import CONFIG from "../../config";

import DropdownSearch from '../DropdownSearch';
import Dropdown from '../Dropdown';

class _BasicFieldArrayParentClass extends React.Component {
  constructor(props) {
    super(props);
    this.HEADER_TEXTS = {
      summary: [''],
      all: [''],
    };
    this.TYPE_FIELD_NAMES = {};
    this.PRE_FILTER_SELECT = {
      label: '',
      type: '',
      name: '',
      model: '',
    };
    this.state = {
      showModal: false, // DEFAULT: false
      selectedRowKey: null, // DEFAULT: null
      currentPreFilterModel: '',
      preFilterMethod: '',
    };
  }

  // lifecycle
  // methods events
  onClickAccept() {
    // TODO: Validate before hide modal
    this.hideDataModal();
  }

  // methods state
  showDataModal(key) {
    this.setState({
      showModal: true,
      selectedRowKey: key,
    });
  }

  hideDataModal() {
    this.setState({
      showModal: false,
      selectedRowKey: null,
    });
  }
  // methods getData
  getValueByKey(key) {
    const allValues = this.props.fields.getAll();
    const valueData = allValues.find((value) => value.key === key);
    const valueIndex = allValues.findIndex((value) => value.key === key);

    return {
      data: valueData,
      index: valueIndex,
    };
  }
  // methods validation
  // validateMember = (index) => {
  //     const errors = this.props.errors;
  //     const values = this.props.fields.getAll();
  //     const hasBlankFields =
  //         values[index].name === "" ||
  //         values[index].name === undefined ||
  //         values[index].email === "" ||
  //         values[index].email === undefined ||
  //         values[index].phone === "" ||
  //         values[index].phone === undefined;
  //     return (errors && errors[index] === undefined) || (errors === undefined && !hasBlankFields);
  // };

  // methods rows
  addRow(event) {
    this.props.handleDeployCreateForm();
  }

  removeRow(key) {
    const currentValue = this.getValueByKey(key);
    this.hideDataModal();
    if (currentValue.data.origin === 'store') {
      this.props.dispatch(change(this.props.meta.form, `${this.props.name}[${currentValue.index}].status`, 'remove'));
    } else {
      this.props.fields.remove(currentValue.index);
    }
  }

  generateSubDataList = (field, keyName, secondaryKeyName) => {
    const getSecondaryKeyName = (element, doubleKeyForObject) => {
      const keysArr = doubleKeyForObject.split('.');
      return element[keysArr[0]][keysArr[1]];
    };
    const result = field ? (
      <>
        <div className="form-internal-block--contact-in-organization__section__content__internal-list form-internal-block__section__content__internal-list">
          {field[keyName].map((element, internalIndex) => {
            const useClipToClipboardContainer = !!secondaryKeyName;
            const child = (
              <div className={`form-internal-block--contact-in-organization__section__content__internal-list__element`}>
                <div className="form-internal-block--contact-in-organization__section__content__internal-list__element__main-text">
                  {element.name}
                </div>
                <div className="form-internal-block--contact-in-organization__section__content__internal-list__element__secondary-text">
                  {secondaryKeyName ? getSecondaryKeyName(element, secondaryKeyName) : ''}
                </div>
              </div>
            );
            let resultContainer;
            if (useClipToClipboardContainer) {
              resultContainer = (
                <CopyToClipboard key={internalIndex} copyContent={element.name}>
                  {child}
                </CopyToClipboard>
              );
            } else {
              resultContainer = <div key={internalIndex}>{child}</div>;
            }
            return resultContainer;
          })}
        </div>
      </>
    ) : (
      <div></div>
    );
    return result;
  };

  getValueDataAttribute(row, fieldKey) {
    const keys = fieldKey.split('.');
    if (keys.length > 1) {
      return row[keys[0]][keys[1]];
    } else {
      return row[keys[0]];
    }
  }

  // common Renders
  renderModal() {
    const { t } = this.props;
    return (
      <Modal
        centered
        dialogClassName="internal-modal role-organization"
        show={this.state.showModal}
        onHide={() => this.setState({ showModal: false })}
      >
        <Modal.Header closeButton={true}>
          <h2>{t(this.HEADER_TEXTS.modal)}</h2>
        </Modal.Header>
        <Modal.Body className="organizations-contacts">
          <div className="model-details">
            <div className="model-section model-section--in-modal">
              {this.renderInternalModalForm(this.state.selectedRowKey)}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  renderInternalModalForm(fieldKey) {
    const { editable } = this.props;
    return (
      <div className="form-internal-block form-internal-block--organizations-contacts">
        {this.renderInternalModalBody(fieldKey)}
        {editable && isMobile && this.renderMobileFooterModalButtons(fieldKey)}
      </div>
    );
  }

  renderInternalModalBody(key) {
    const { t } = this.props;
    const dataValue = this.getValueByKey(key);
    const row = dataValue.data;
    const index = dataValue.index;
    const flexClassesToMobileStructure = 'd-flex align-items-start flex-column';
    return (
      <div className="contact-in-organization__body">
        <div
          key={index}
          className={`${flexClassesToMobileStructure} contact-in-organization__body__row ${
            row.status === 'remove' ? 'd-none' : ''
          }`}
        >
          {this.HEADER_TEXTS.all.map((headerInfo, index) => {
            const { text, fieldKey } = headerInfo;
            return (
              <div className="contact-in-organization__body__row__element" key={index}>
                <div className="contact-in-organization__header__title">{t(text)}</div>
                <div className="contact-in-organization__body__row__element__data">
                  {this.getValueDataAttribute(row, fieldKey)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  renderMoreInfoButton(key) {
    const { t } = this.props;
    return (
      <button type="button" className="btn outline btn-add more-info" onClick={() => this.showDataModal(key)}>
        <span>{t('actions.info')}</span>
      </button>
    );
  }

  renderEditButton(key) {
    const { t } = this.props;
    return (
      <button
        type="button"
        onClick={() => {
          this.props.showRowEditModal(key);
        }}
        className="btn outline btn-edit"
      >
        <i className="icon-pencil"></i>
        <span>{t('actions.edit')}</span>
      </button>
    );
  }

  renderRemoveCtaCrossAndEditButton(key) {
    return (
      <div
        className={`contact-in-organization__body__buttons-in-the-final-row ${
          isBrowser ? 'contact-in-organization__body__buttons-in-the-final-row--desktop-version' : ''
        }`}
      >
        {isBrowser && this.renderEditButton(key)}
        <div
          className={`row-remove-cta ${isBrowser ? 'row-remove-cta--desktop-version' : ''}`}
          onClick={() => this.removeRow(key)}
        ></div>
      </div>
    );
  }

  renderMobileFooterModalButtons(key) {
    return (
      <div className="d-flex justify-content-around">
        {this.renderAcceptModalButton()}
        {this.renderRemoveCtaButton(key)}
      </div>
    );
  }

  // renderAcceptModalButton() {
  //     const { t } = this.props;
  //     return (
  //         <button
  //             type="button"
  //             className="btn outline check mt-3"
  //             onClick={() => {
  //                 this.onClickAccept();
  //             }}
  //         >
  //             <span> {t("actions.accept")}</span>
  //         </button>
  //     );
  // }

  // renderRemoveCtaButton(key) {
  //     const { t } = this.props;
  //     return (
  //         <button
  //             type="button"
  //             className="btn outline btn-trash mt-3"
  //             onClick={() => {
  //                 this.hideDataModal();
  //                 this.removeRow(key);
  //             }}
  //         >
  //             <span> {t("actions.delete")}</span>
  //         </button>
  //     );
  // }

  renderHeader() {
    const { t } = this.props;

    const headers = isMobile
      ? this.HEADER_TEXTS.summary.map((headerInfo) => t(headerInfo.text))
      : this.HEADER_TEXTS.all.map((headerInfo) => t(headerInfo.text));
    return (
      <div className="contact-in-organization__header">
        {headers.map((title, index) => {
          return (
            <div key={index} className="contact-in-organization__header__title">
              {title}
            </div>
          );
        })}
      </div>
    );
  }

  renderBody() {
    const { editable, fields } = this.props;
    const values = fields.getAll();
    return (
      <div className="contact-in-organization__body">
        {values &&
          values.map((row, index) => {
            return (
              <div
                key={index}
                className={`contact-in-organization__body__row ${row.status === 'remove' ? 'd-none' : ''}`}
              >
                <div className="contact-in-organization__body__row__element">{row.name}</div>
                {isMobile && (
                  <div className="contact-in-organization__body__row__element info-button">
                    {editable && this.renderEditButton(row.key)}
                    {!editable && this.renderMoreInfoButton(row.key)}
                  </div>
                )}
                {isBrowser && <div className="contact-in-organization__body__row__element">{row.type.name}</div>}
                {isBrowser && <div className="contact-in-organization__body__row__element">{row.description}</div>}

                {editable && this.renderRemoveCtaCrossAndEditButton(row.key)}
              </div>
            );
          })}
      </div>
    );
  }

  renderPreFilterDropDown() {
    const { t, editable } = this.props;
    return (
      <Dropdown
        emptyLabel={t(this.PRE_FILTER_SELECT.label)}
        className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
        type={this.PRE_FILTER_SELECT.type}
        name={this.PRE_FILTER_SELECT.name}
        model={this.PRE_FILTER_SELECT.model}
        onChange={(optionSelected) => {
          this.setState({
            currentPreFilterModel: optionSelected.value,
            preFilterMethod: optionSelected.getDetailsMethodName,
          });
        }}
      />
    );
  }

  renderDropDownSearch() {
    const { t, editable } = this.props;
    return (
      <DropdownSearch
        disabled={!this.state.currentPreFilterModel}
        model={this.state.currentPreFilterModel}
        selection={(selectedElement) => {
          this.props.handleSearchResult(selectedElement, this.state.preFilterMethod);
        }}
        placeholder={`${t(`search-filter.search`)} ${this.state.currentPreFilterModel}`}
      />
    );
  }

  renderFooter() {
    const { t, editable } = this.props;
    return (
      <div className="contact-in-organization__footer">
        {editable && (
          <>
            {this.renderPreFilterDropDown()}
            {this.renderDropDownSearch()}
            <button
              type="button"
              className="contact-in-organization__footer__add btn btn-add outline"
              onClick={(e) => this.addRow(e)}
            >
              {t('actions.add-new')}
            </button>
          </>
        )}
      </div>
    );
  }

  // specific renders

  render() {
    return (
      <div className="contact-in-organization">
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
        {this.state.showModal && this.renderModal()}
      </div>
    );
  }
}

export default _BasicFieldArrayParentClass;
