import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
// const

class _PeeringGroupFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'peeringGroup';
  ROUTE_LIST_DIRECTION = '/network/peering-groups';

  shouldComponentUpdate(nextProps, nextState) {
    const confirmedDelete = !this.props.isDeleteConfirmed && nextProps.isDeleteConfirmed;
    if (confirmedDelete && nextProps.confirmModalType === 'partialDelete') {
      this.props.hideModalConfirm();
      this.updateMutation(this.entityDataToUpdate, this);
    }
    return true;
  }
}

export default _PeeringGroupFormParentClass;
