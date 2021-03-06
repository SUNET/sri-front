import React from 'react';
import { arrayPush, FieldArray, Field, change } from 'redux-form';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import { Form } from 'react-bootstrap';
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldInput from '../FieldInput';
import FieldArrayAddressOrganization from '../organization/FieldArrayAddressOrganization';
// const
import { isBrowser } from 'react-device-detect';
import renderFormBlockSection from '../common/BlockSection';

import FieldArrayRooms from '../common/FieldArrayRooms';
import FieldArrayRacks from '../common/FieldArrayRacks';

import { renderEquipmentsToggleSection, handleSelectedPhysical } from '../common/formsSections/LocatedInToggleSection';

class _SiteFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'site';
  ROUTE_LIST_DIRECTION = '/network/location-sites';

  handleSelectedRoom = (selection) => {
    if (selection !== null && selection.id) {
      this.props.getRoomById(selection.id).then((entity) => {
        const newEntity = {
          type: entity.type,
          __typename: entity.__typename,
          name: entity.name,
          id: entity.id,
          status: 'saved',
        };
        this.props.dispatch(arrayPush(this.props.form, 'rooms', newEntity));
      });
    }
  };

  handleSelectedRack = (selection) => {
    if (selection !== null && selection.id) {
      this.props.getRackById(selection.id).then((entity) => {
        const newEntity = {
          type: entity.type,
          __typename: entity.__typename,
          name: entity.name,
          id: entity.id,
          status: 'saved',
        };
        this.props.dispatch(arrayPush(this.props.form, 'racks', newEntity));
      });
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    const confirmedDelete = !this.props.isDeleteConfirmed && nextProps.isDeleteConfirmed;
    if (confirmedDelete && nextProps.confirmModalType === 'partialDelete') {
      this.props.hideModalConfirm();
      this.updateMutation(this.entityDataToUpdate, this);
    }
    if (nextProps.entitySavedId) {
      const { fieldModalOpened } = nextState;
      const selectionData = {
        id: nextProps.entitySavedId,
      };
      const methodName = `get${nextProps.entityInModalName}ById`;
      if (fieldModalOpened === 'located_in') {
        handleSelectedPhysical({
          selection: selectionData,
          getMethod: this.props[methodName],
          form: this.props.form,
          dispatch: this.props.dispatch,
        });
      } else if (fieldModalOpened === 'room') {
        this.handleSelectedRoom(selectionData);
      } else if (fieldModalOpened === 'rack') {
        this.handleSelectedRack(selectionData);
      }
      return false;
    }
    return true;
  }

  renderSections(editMode) {
    return (
      <>
        {this.renderGeneralInfoToggleSection(editMode)}
        {this.renderAddressToggleSection(editMode)}
        {this.renderAddressListToggleSection(editMode)}
        {this.renderOwnerToggleSection(editMode)}
        {this.renderRoomsToggleSection(editMode)}
        {this.renderRacksToggleSection(editMode)}
        {renderEquipmentsToggleSection(editMode, this)}
        {this.renderWorkLog()}
      </>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const componentClassName = 'general-info-block';
    const { t, site_type } = this.props;

    const generalInfo = [
      {
        title: t('general-forms/location-site-type'),
        presentContent: site_type,
        editContent: (
          <Dropdown
            t={t}
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel={t('general-forms/type-placeholder')}
            type="site_types"
            name="site_type"
            onChange={(e) => {}}
          />
        ),
      },
      this.getUrlField('url'),
    ];

    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/general-information')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <div>
              <div className="form-internal-block">
                {generalInfo.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
            </div>
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderAddressToggleSection(editMode) {
    const componentClassName = 'location-block';

    const { t, country, area, longitude, latitude } = this.props;
    const addressInfo = [
      {
        title: t('general-forms/country'),
        presentContent: country?.name,
        editContent: (
          <Dropdown
            t={t}
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel={t('general-forms/type-placeholder')}
            type="countries"
            name="country_value"
            model="name_value_structure"
            onChange={(newValue) => {
              this.props.dispatch(change(this.props.form, 'country', newValue ? newValue : null));
            }}
          />
        ),
      },
      {
        title: t('general-forms/area'),
        presentContent: area,
        editContent: (
          <Form.Group>
            <Field type="text" name="area" component={FieldInput} placeholder={t('general-forms/area-placeholder')} />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/longitude'),
        presentContent: longitude,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="longitude"
              component={FieldInput}
              placeholder={t('general-forms/decimal-placeholder')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/latitude'),
        presentContent: latitude,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="latitude"
              component={FieldInput}
              placeholder={t('general-forms/decimal-placeholder')}
            />
          </Form.Group>
        ),
      },
    ];
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/location')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <div>
              <div className="form-internal-block">
                {addressInfo.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
            </div>
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderOwnerToggleSection(editMode) {
    const componentClassName = 'site-owner-block';
    const { t, owner_id, owner_site_name, site_responsible_obj, site_responsible_id } = this.props;

    const responsibleInfo = [
      {
        title: t('general-forms/responsible'),
        presentContent: site_responsible_obj ? site_responsible_obj.name : '',
        editContent: (
          <Dropdown
            t={t}
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            type="combo_list"
            name="owner_id"
            model="siteOwner"
            placeholder={t('general-forms/select-responsible')}
            currentValue={site_responsible_id}
            objectCurrentValue={site_responsible_obj}
            nameDataInsideRequest="all_siteowners"
            valueField="id"
            labelElementsArray={['name']}
            onChange={(newSiteOwner) => {
              this.props.dispatch(
                change(this.props.form, 'site_responsible_id', newSiteOwner ? newSiteOwner.id : null),
              );
              this.props.dispatch(change(this.props.form, 'site_responsible_obj', newSiteOwner ? newSiteOwner : null));
            }}
          />
        ),
      },
    ];
    const ownerInfo = [
      {
        title: t('general-forms/owner-site-id'),
        presentContent: owner_id,
        editContent: (
          <Form.Group>
            <Field type="text" name="owner_id" component={FieldInput} placeholder={t('general-forms/write-id')} />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/owner-site-name'),
        presentContent: owner_site_name,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="owner_site_name"
              component={FieldInput}
              placeholder={t('general-forms/write-name')}
            />
          </Form.Group>
        ),
      },
      this.getUrlField('url'),
    ];
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/owner')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <div>
              <div className="form-internal-block">
                {responsibleInfo.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
              <div className="form-internal-block">
                {ownerInfo.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
            </div>
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderAddressListToggleSection(editMode = true) {
    const { t } = this.props;
    const componentClassName = 'address-block';
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection defaultEditable={false}>
          <ToggleHeading>
            <h2>{t('general-forms/address')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <FieldArray
              name="addresses"
              component={FieldArrayAddressOrganization}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.addresses}
              metaFields={this.props.fields}
              rerenderOnEveryChange
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderRoomsToggleSection(editMode) {
    const { t, entityRemovedId } = this.props;
    const componentClassName = 'rooms-list-block';
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('main-entity-name/location-rooms')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <FieldArray
              name="rooms"
              component={FieldArrayRooms}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.located_in}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'room' });
                this.props.showModalCreateForm('Room');
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'rooms' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'rooms' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={(selection) => {
                this.handleSelectedRoom(selection);
              }}
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === 'rooms' ? entityRemovedId : null}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderRacksToggleSection(editMode) {
    const { t, entityRemovedId } = this.props;
    const componentClassName = 'racks-list-block';
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('main-entity-name/location-racks')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <FieldArray
              name="racks"
              component={FieldArrayRacks}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.located_in}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'rack' });
                this.props.showModalCreateForm('Rack');
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'racks' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'racks' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={(selection) => {
                this.handleSelectedRack(selection);
              }}
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === 'racks' ? entityRemovedId : null}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _SiteFormParentClass;
