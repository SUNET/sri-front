import React from 'react';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
import { FieldArray } from 'redux-form';
// components
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldArrayUsedBy from '../common/FieldArrayUsedBy';
import IpAddressesList from '../IpAddressesList';
// const
import renderFormBlockSection from '../common/BlockSection';

class _UnitFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'unit';
  ROUTE_LIST_DIRECTION = '/network/units';

  shouldComponentUpdate(nextProps, nextState) {
    const confirmedDelete = !this.props.isDeleteConfirmed && nextProps.isDeleteConfirmed;
    if (confirmedDelete && nextProps.confirmModalType === 'partialDelete') {
      this.props.hideModalConfirm();
      this.updateMutation(this.entityDataToUpdate, this);
    }
    return true;
  }

  renderSections(editMode) {
    const { t } = this.props;
    return (
      <>
        {this.renderDescriptionToggleSection(false)}
        {this.renderIPAddressesToggleSection(false)}
        {this.renderIsUsedToggleSection(false, 'dependents', 'is-used-block-dependents', t('general-forms/used-by'))}
        {this.renderIsUsedToggleSection(false, 'dependencies', 'is-used-block-dependencies', t('general-forms/depends-on'))}
        {this.renderWorkLog()}
      </>
    );
  }

  renderIPAddressesToggleSection(editMode) {
    const componentClassName = 'ip-addresses-block';
    const { t, vlan, ip_addresses } = this.props;
    const componentsToRender = [
      {
        title: t('general-forms/vlan'),
        presentContent: vlan,
      },
      {
        title: t('network.switch.details.ip-address'),
        presentContent: (
          <IpAddressesList ipList={ip_addresses ? ip_addresses : []} editMode={editMode} onChangeIpList={() => {}} />
        ),
      },
    ];
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/ip-addresses')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <div>
              <div className="form-internal-block">
                {componentsToRender.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
            </div>
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderIsUsedToggleSection(editMode = true, fieldName, componentClassName, headerText) {
    const { entityRemovedId } = this.props;
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{headerText}</h2>
          </ToggleHeading>
          <TogglePanel>
            <FieldArray
              preFilter={false}
              name={fieldName}
              component={FieldArrayUsedBy}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.parents}
              metaFields={this.props.fields}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: fieldName });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: fieldName });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={(selection) => {
                this.handleSelectedIsUsed(selection);
              }}
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === fieldName ? entityRemovedId : null}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _UnitFormParentClass;
