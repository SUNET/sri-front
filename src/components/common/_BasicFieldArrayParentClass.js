import React from 'react';
import { change } from 'redux-form';
import CopyToClipboard from '../CopyToClipboard';
import { Modal } from 'react-bootstrap';
import { isBrowser, isMobile } from 'react-device-detect';
import { UNLINK, SAVED } from '../../utils/constants';

import DropdownSearch from '../DropdownSearch';
import Dropdown from '../Dropdown';

class _BasicFieldArrayParentClass extends React.Component {
  constructor(props) {
    super(props);
    this.HEADER_TEXTS = {
      summary: [''],
      all: [''],
    };
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
      fieldModalOpened: '',
    };
  }
  // lifecycle
  shouldComponentUpdate(nextProps, nextState) {
    const newRemovedRow = !!nextProps.entityRemovedId && nextProps.entityRemovedId !== this.props.entityRemovedId;
    if (newRemovedRow) {
      this.removeRow(nextProps.entityRemovedId);
    }
    return !newRemovedRow;
  }
  // methods events
  onClickAccept() {
    // TODO: Validate before hide modal
    this.hideDataModal();
  }

  // methods state
  showDataModal(id) {
    this.setState({
      showModal: true,
      selectedRowKey: id,
    });
  }

  hideDataModal() {
    this.setState({
      showModal: false,
      selectedRowKey: null,
    });
  }
  // methods getData
  getValueById(id) {
    const allValues = this.props.fields.getAll();
    const valueData = allValues.find((value) => value.id === id);
    const valueIndex = allValues.findIndex((value) => value.id === id);

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
  newResultInSearch = (selection) => {
    if (!selection) {
      return;
    }
    const rowFound = this.getValueById(selection.id);
    if (rowFound.index > -1) {
      this.props.dispatch(change(this.props.meta.form, `${this.FIELD_NAME_IN_FORM}[${rowFound.index}].status`, SAVED));
    } else {
      this.props.handleContactSearch(selection);
    }
  };

  showCreateForm() {
    const entityToShow = this.PRE_FILTER_SELECT.entityMandatory
      ? this.PRE_FILTER_SELECT.entityMandatory
      : this.state.currentPreFilterModel;
    this.props.handleDeployCreateForm(entityToShow);
  }

  removeRow(id) {
    const currentValue = this.getValueById(id);
    this.hideDataModal();
    if (currentValue.data.origin === 'store') {
      this.props.dispatch(
        change(this.props.meta.form, `${this.FIELD_NAME_IN_FORM}[${currentValue.index}].status`, UNLINK),
      );
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

  renderInternalModalBody(id) {
    const { t } = this.props;
    const dataValue = this.getValueById(id);
    const row = dataValue.data;
    const index = dataValue.index;
    const flexClassesToMobileStructure = 'd-flex align-items-start flex-column';
    return (
      <div className="contact-in-organization__body">
        <div
          key={index}
          className={`${flexClassesToMobileStructure} contact-in-organization__body__row ${
            row.status === UNLINK ? 'd-none' : ''
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

  renderMoreInfoButton(id) {
    const { t } = this.props;
    return (
      <button type="button" className="btn outline btn-add more-info" onClick={() => this.showDataModal(id)}>
        <span>{t('actions.info')}</span>
      </button>
    );
  }

  renderEditButton(row) {
    // at the moment it will only show the details
    const { t } = this.props;
    return (
      <button
        type="button"
        className="btn outline btn-add more-info"
        onClick={() => this.props.showRowEditModal(row.__typename, row.id)}
      >
        <span>{t('actions.info')}</span>
      </button>
      // <button
      //   type="button"
      //   onClick={() => {
      //     this.props.showRowEditModal(row.__typename, row.id);
      //   }}
      //   className="btn outline btn-edit"
      // >
      //   <i className="icon-pencil"></i>
      //   <span>{t('actions.edit')}</span>
      // </button>
    );
  }

  renderRemoveCtaCrossAndEditButton(row, editable) {
    return (
      <div
        className={`contact-in-organization__body__buttons-in-the-final-row ${
          isBrowser ? 'contact-in-organization__body__buttons-in-the-final-row--desktop-version' : ''
        }`}
      >
        {isBrowser && this.renderEditButton(row)}
        {editable && <div
          className={`row-remove-cta ${isBrowser ? 'row-remove-cta--desktop-version' : ''}`}
          onClick={() => this.removeRow(row.id)}
        ></div>}
      </div>
    );
  }

  renderMobileFooterModalButtons(id) {
    return (
      <div className="d-flex justify-content-around">
        {this.renderAcceptModalButton()}
        {this.renderRemoveCtaButton(id)}
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

  // renderRemoveCtaButton(id) {
  //     const { t } = this.props;
  //     return (
  //         <button
  //             type="button"
  //             className="btn outline btn-trash mt-3"
  //             onClick={() => {
  //                 this.hideDataModal();
  //                 this.removeRow(id);
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
          values
            .filter((row) => row.status === SAVED)
            .map((row, index) => {
              return (
                <div key={index} className={`contact-in-organization__body__row`}>
                  <div className="contact-in-organization__body__row__element">{row.name}</div>
                  {isMobile && (
                    <div className="contact-in-organization__body__row__element info-button">
                      {editable && this.renderEditButton(row.id)}
                      {!editable && this.renderMoreInfoButton(row.id)}
                    </div>
                  )}
                  {isBrowser && <div className="contact-in-organization__body__row__element">{row.type.name}</div>}
                  {isBrowser && <div className="contact-in-organization__body__row__element">{row.description}</div>}

                  {this.renderRemoveCtaCrossAndEditButton(row, editable)}
                </div>
              );
            })}
      </div>
    );
  }

  renderPreFilterDropDown() {
    const { t } = this.props;
    return (
      <Dropdown
        emptyLabel={t(this.PRE_FILTER_SELECT.label)}
        className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
        type={this.PRE_FILTER_SELECT.type}
        name={this.PRE_FILTER_SELECT.name}
        model={this.PRE_FILTER_SELECT.model}
        onChange={(optionSelected) => {
          this.setState({
            currentPreFilterModel: optionSelected ? optionSelected.value : null,
            preFilterMethod: optionSelected ? optionSelected.getDetailsMethodName : null,
          });
        }}
      />
    );
  }

  renderDropDownSearch() {
    const { t, fields } = this.props;
    let existingElements = [];
    if (fields.getAll()) {
      existingElements = fields
        .getAll()
        .filter((el) => el.status === SAVED)
        .map((row) => row.id);
    }
    return (
      <DropdownSearch
        disabled={this.PRE_FILTER_SELECT ? !this.state.currentPreFilterModel : false}
        model={this.state.currentPreFilterModel}
        selection={(selectedElement) => {
          this.props.handleSearchResult(selectedElement, this.state.preFilterMethod);
        }}
        placeholder={`${t(`search-filter.search`)} ${this.state.currentPreFilterModel}`}
        skipElements={existingElements}
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
              disabled={this.PRE_FILTER_SELECT ? !this.state.currentPreFilterModel : false}
              onClick={(e) => this.showCreateForm()}
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
