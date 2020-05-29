import { connect } from 'react-redux';

import ModalFormComponent from '../components/ModalForm';

import * as formModalActions from '../actions/FormModal';

const mapStateToProps = (state) => {
  return {
    isVisibleModalForm: state.formModal.showModalForm,
    entityName: state.formModal.entityName,
    entityInModalId: state.formModal.entityId,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    hideModalForm: () => dispatch(formModalActions.hideModalForm(props.index)),
  };
};

const FormModal = connect(mapStateToProps, mapDispatchToProps)(ModalFormComponent);

export default FormModal;
