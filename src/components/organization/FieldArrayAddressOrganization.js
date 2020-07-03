import React from 'react';
import { Form } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import FieldInput from '../FieldInput';
import { Field, change, touch } from 'redux-form';
import uuidv4 from 'uuid/v4';
import CONFIG from '../../config';
import { Modal } from 'react-bootstrap';
import { isBrowser, isMobile } from 'react-device-detect';

const { LIMIT_NEW_CONTACTS } = CONFIG;

class FieldArrayAddressOrganization extends React.Component {
  state = {
    showModal: false, // DEFAULT: false
    selectedRowKey: null, // DEFAULT: null
  };

  // lifecycle
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    const newFields = nextProps.fields.getAll();
    if (newFields && newFields.length && nextProps.editable) {
      newFields.forEach((field, index) => {
        const validated = this.validateAddress(field, index);
        if (field && field.status === 'editing' && validated) {
          this.props.dispatch(change(this.props.meta.form, `addresses[${index}].status`, 'saved'));
        } else if (!validated && field.status === 'saved') {
          nextProps.dispatch(change(nextProps.meta.form, `addresses[${index}].status`, 'editing'));
        }
      });
    }
  }

  // methods onClick
  onClickAccept() {
    const currentAddress = this.getValueByKey(this.state.selectedRowKey);
    const validated = this.validateAddress(currentAddress.data, currentAddress.index);
    if (validated) {
      this.hideDataModal();
    } else {
      this.props.dispatch(touch(this.props.meta.form, `addresses[${currentAddress.index}].street`));
      this.props.dispatch(touch(this.props.meta.form, `addresses[${currentAddress.index}].postal_code`));
      this.props.dispatch(touch(this.props.meta.form, `addresses[${currentAddress.index}].postal_area`));
      this.props.dispatch(touch(this.props.meta.form, `addresses[${currentAddress.index}].phone`));
    }
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
  getRowsData(selectedRowKey) {
    const { fields, t } = this.props;

    let valuesToShow, indexForThisFieldKey;

    if (selectedRowKey !== undefined) {
      const currentValue = this.getValueByKey(selectedRowKey);
      valuesToShow = [currentValue.data];
      indexForThisFieldKey = currentValue.index;
    } else {
      valuesToShow = fields.getAll() || [];
    }
    return [
      {
        title: t('organization-details.street'),
        presentContent: valuesToShow && valuesToShow.length ? valuesToShow.map((value) => value.street) : [],
        editContent: valuesToShow.map((address, index) => {
          return {
            element: (
              <Form.Group>
                <Field
                  type="text"
                  name={`addresses[${selectedRowKey ? indexForThisFieldKey : index}].street`}
                  component={FieldInput}
                  placeholder={t('organization-details.add-street')}
                />
              </Form.Group>
            ),
            status: address.status,
          };
        }),
      },
      {
        title: t('organization-details.postal-code'),
        presentContent: valuesToShow && valuesToShow.length ? valuesToShow.map((value) => value.postal_code) : [],
        editContent: valuesToShow.map((address, index) => {
          return {
            element: (
              <Form.Group>
                <Field
                  type="text"
                  name={`addresses[${selectedRowKey ? indexForThisFieldKey : index}].postal_code`}
                  component={FieldInput}
                  placeholder={t('organization-details.add-postalCode')}
                />
              </Form.Group>
            ),
            status: address.status,
          };
        }),
      },
      {
        title: t('organization-details.postal-area'),
        presentContent: valuesToShow && valuesToShow.length ? valuesToShow.map((value) => value.postal_area) : [],
        editContent: valuesToShow.map((address, index) => {
          return {
            element: (
              <Form.Group>
                <Field
                  type="text"
                  name={`addresses[${selectedRowKey ? indexForThisFieldKey : index}].postal_area`}
                  component={FieldInput}
                  placeholder={t('organization-details.add-postalArea')}
                />
              </Form.Group>
            ),
            status: address.status,
          };
        }),
      },
      {
        title: t('organization-details.phone'),
        presentContent: valuesToShow && valuesToShow.length ? valuesToShow.map((value) => value.phone) : [],
        editContent: valuesToShow.map((address, index) => {
          return {
            element: (
              <>
                <Form.Group>
                  <Field
                    type="text"
                    name={`addresses[${selectedRowKey ? indexForThisFieldKey : index}].phone`}
                    component={FieldInput}
                    placeholder={t('organization-details.add-phone')}
                  />
                </Form.Group>
                {isBrowser && this.renderRemoveCtaCross(address.key)}
                {isMobile && this.renderMobileFooterModalButtons(address.key)}
              </>
            ),
            status: address.status,
          };
        }),
      },
    ];
  }
  getRowsMobileData() {
    const { fields, t } = this.props;
    const valuesToShow = fields.getAll() || [];
    const editContent = valuesToShow.map((address, index) => {
      return {
        element: (
          <div className="d-flex">
            <Form.Group>
              <Field
                type="text"
                name={`addresses[${index}].street`}
                component={FieldInput}
                placeholder={t('organization-details.add-street')}
              />
            </Form.Group>
            {this.renderButtonsMobile(address.key)}
          </div>
        ),
        status: address.status,
      };
    });

    const presentContent =
      valuesToShow &&
      valuesToShow.map((value, index) => {
        return (
          <div className="d-flex align-items-center justify-content-between">
            <span className="mr-3">{value.street}</span>
            {this.renderMoreInfoButton(value.key)}
          </div>
        );
      });

    return [
      {
        title: t('organization-details.street'),
        presentContent,
        editContent,
      },
    ];
  }

  // methods validation
  validateAddress = (field, index) => {
    const { errors } = this.props;
    // when component is colapse, it need to check if the data are empty
    const hasBlankFields =
      field.street === '' ||
      field.street === undefined ||
      field.postal_code === '' ||
      field.postal_code === undefined ||
      field.postal_area === '' ||
      field.postal_area === undefined ||
      field.phone === '' ||
      field.phone === undefined;

    return (errors && errors[index] === undefined) || (errors === undefined && !hasBlankFields);
  };

  renderFormBlockSection = (editable, data, index) => {
    const { fields } = this.props;
    const values = fields.getAll();
    const isPresentState = !editable && data.presentContent;
    return (
      <div className="form-internal-block--organizations-contacts__section form-internal-block__section" key={index}>
        <div
          className={`form-internal-block--organizations-contacts__section_title form-internal-block__section__title`}
        >
          {data.title}
        </div>

        {data.editContent.map((content, contentIndex) => (
          <div
            key={`${contentIndex} - ${index}`}
            className={`form-internal-block--organizations-contacts__section__content form-internal-block__section__content 
                        ${
                          editable
                            ? 'form-internal-block--organizations-contacts__section__content--edition-mode form-internal-block__section__content--edition-mode'
                            : ''
                        }
                        ${editable && values[contentIndex].status === 'remove' ? 'd-none' : ''}`}
          >
            {isPresentState ? data.presentContent[contentIndex] : data.editContent[contentIndex]}
          </div>
        ))}
      </div>
    );
  };

  addRow = (event) => {
    if (this.props.fields.length < LIMIT_NEW_CONTACTS) {
      const key = uuidv4();
      this.props.fields.push({ key, status: 'editing' });
      if (isMobile) {
        this.showDataModal(key);
      }
    }
  };

  removeRow = (key) => {
    const currentValue = this.getValueByKey(key);
    this.hideDataModal();

    if (currentValue.data.origin === 'store') {
      this.props.dispatch(change(this.props.meta.form, `addresses[${currentValue.index}].status`, 'remove'));
    } else {
      this.props.fields.remove(currentValue.index);
    }
  };
  // common Renders
  renderModal() {
    const { t, editable } = this.props;
    return (
      <Modal
        centered
        dialogClassName="internal-modal role-organization"
        show={this.state.showModal}
        onHide={() => this.setState({ showModal: false })}
      >
        <Modal.Header closeButton={!editable}>
          <h2>{t('contact-details.professional-details')}</h2>
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

    const rowsData = this.getRowsData(fieldKey);
    return (
      <div className="form-internal-block form-internal-block--organizations-contacts">
        {rowsData.map((value, index) => {
          return this.renderFormBlockSection(editable, value, index);
        })}
      </div>
    );
  }

  renderFormBlockSection = (editable, data, index) => {
    const isPresentState = !editable && data.presentContent;
    return (
      <div className="form-internal-block--organizations-contacts__section form-internal-block__section" key={index}>
        <div
          className={`form-internal-block--organizations-contacts__section_title form-internal-block__section__title`}
        >
          {data.title}
        </div>

        {data.editContent.map((content, contentIndex) => (
          <div
            key={`${contentIndex} - ${index}`}
            className={`form-internal-block--organizations-contacts__section__content form-internal-block__section__content 
                        ${
                          editable
                            ? 'form-internal-block--organizations-contacts__section__content--edition-mode form-internal-block__section__content--edition-mode'
                            : ''
                        }
                        ${editable && content.status === 'remove' ? 'd-none' : ''}`}
          >
            {isPresentState ? data.presentContent[contentIndex] : data.editContent[contentIndex].element}
          </div>
        ))}
      </div>
    );
  };

  renderButtonsMobile(key) {
    return (
      <div className="d-flex ml-5 align-items-center">
        {this.renderMoreInfoButton(key)}
        {this.renderRemoveCtaCross(key)}
      </div>
    );
  }

  renderMoreInfoButton(key) {
    const { t } = this.props;
    return (
      <button type="button" className="btn outline btn-add more-info mr-3" onClick={() => this.showDataModal(key)}>
        <span>{t('actions.info')}</span>
      </button>
    );
  }

  renderRemoveCtaCross(key) {
    return (
      <div
        className={`row-cross-remove-cta ${isBrowser ? 'row-cross-remove-cta--desktop-version' : ''}`}
        onClick={() => this.removeRow(key)}
      ></div>
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

  renderAcceptModalButton() {
    const { t } = this.props;
    return (
      <button
        type="button"
        className="btn outline check mt-3"
        onClick={() => {
          this.onClickAccept();
        }}
      >
        <span> {t('actions.accept')}</span>
      </button>
    );
  }

  renderRemoveCtaButton(key) {
    const { t } = this.props;
    return (
      <button
        type="button"
        className="btn outline btn-trash mt-3"
        onClick={() => {
          this.hideDataModal();
          this.removeRow(key);
        }}
      >
        <span> {t('actions.delete')}</span>
      </button>
    );
  }

  renderRowsData() {
    const { editable } = this.props;
    const rowsData = this.getRowsData();
    const rowsDataMobile = this.getRowsMobileData();

    const dataToShow = isMobile ? rowsDataMobile : rowsData;
    return (
      <div className="form-internal-block form-internal-block--organizations-contacts">
        {dataToShow.map((data, index) => {
          return this.renderFormBlockSection(editable, data, index);
        })}
      </div>
    );
  }

  render() {
    const { meta, t, editable, errors } = this.props;
    return (
      <div className="organizations-contacts">
        {this.renderRowsData()}
        {errors && <div>{meta.error}</div>}
        {editable && (
          <button type="button" className="btn btn-add outline" onClick={(e) => this.addRow(e)}>
            {t('actions.add-new')}
          </button>
        )}
        {this.state.showModal && this.renderModal()}
      </div>
    );
  }
}

export default withTranslation()(FieldArrayAddressOrganization);
