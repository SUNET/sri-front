import { connect } from 'react-redux';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import * as confirmModalActions from '../actions/ConfirmModal';
import '../style/ConfirmModal.scss';

const INFO_CONFIRM_MODAL_BY_TYPE = {
  delete: {
    mainText: 'actions.confirm-delete.main-text',
    secondaryText: 'actions.confirm-delete.secondary-text',
    buttons: {
      action: { text: 'actions.delete', methodName: 'onConfirmDeleteModal' },
      // cancel: { text: 'Cancel', methodName: '' },
    },
  },
  partialDelete: {
    mainText: 'actions.confirm-partial-delete.main-text',
    secondaryText: 'actions.confirm-partial-delete.secondary-text',
    buttons: {
      action: { text: 'actions.update', methodName: 'onConfirmDeleteModal' },
      // cancel: { text: 'Cancel', methodName: '' },
    },
  },
};

const ConfirmModal = ({ t, showModalConfirm, showModalType, closeConfirmModal, onConfirmDeleteModal }) => (
  <Modal centered dialogClassName="confirm-modal" show={showModalConfirm} onHide={() => closeConfirmModal()}>
    <Modal.Header closeButton />
    <Modal.Body className="confirm-modal__body">
      <div className="confirm-modal__body__main-text">{t(INFO_CONFIRM_MODAL_BY_TYPE[showModalType].mainText)}</div>
      <div className="confirm-modal__body__secondary-text">
        {t(INFO_CONFIRM_MODAL_BY_TYPE[showModalType].secondaryText)}
      </div>
      <div className="confirm-modal__body__buttons">
        <div className="confirm-modal__body__buttons__on-confirm">
          <button type="button" className="btn primary lg" onClick={onConfirmDeleteModal}>
            <span>{t(INFO_CONFIRM_MODAL_BY_TYPE[showModalType].buttons.action.text)}</span>
          </button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
);

ConfirmModal.defaultProps = {
  showModalConfirm: false,
  showModalType: 'delete',
};

ConfirmModal.propTypes = {
  showModalConfirm: PropTypes.bool,
  showModalType: PropTypes.string,
  closeConfirmModal: PropTypes.func.isRequired,
  onConfirmDeleteModal: PropTypes.func.isRequired,
};

// export default ConfirmModal;

const mapStateToProps = (state, props) => {
  return {
    showModalConfirm: state.confirmModal.showModalConfirm,
    showModalType: state.confirmModal.type,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    closeConfirmModal: () => {
      dispatch(confirmModalActions.hideModalConfirm());
    },
    onConfirmDeleteModal: () => {
      dispatch(confirmModalActions.onConfirmDeleteModal());
    },
  };
};

const ConfirmModalContainer = connect(mapStateToProps, mapDispatchToProps)(ConfirmModal);

export default withTranslation()(ConfirmModalContainer);
