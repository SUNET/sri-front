import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Modal } from 'react-bootstrap';
import { QueryRenderer } from 'react-relay';
import environment from '../../createRelayEnvironment';

const ConvertHostModalTypesConvertHostQuery = graphql`
  query ConvertHostModalTypesConvertHostQuery {
    getAllowedTypesConvertHost
  }
`;

export class ConvertHostModal extends React.Component {
  renderModal(typesConvertHost) {
    const { t, isVisibleModal, onHide, clickInConvertHostOption } = this.props;
    return (
      <Modal centered dialogClassName="confirm-modal confirm-modal--convert-host" show={isVisibleModal} onHide={onHide}>
        <Modal.Header closeButton />
        <Modal.Body className="confirm-modal__body">
          <div className="confirm-modal__body__main-text">{t('host-modal.title')}</div>
          <div className="confirm-modal__body__secondary-text">{t('host-modal.question')}</div>
          <div className="confirm-modal__body__secondary-text">{t('host-modal.introduction')}</div>
          <div className="confirm-modal__body__buttons confirm-modal__body__buttons">
            {typesConvertHost.map((buttonName) => (
              <button
                key={Math.random()}
                type="button"
                className="btn secondary"
                onClick={() => {
                  clickInConvertHostOption(buttonName);
                }}
              >
                <span>{buttonName}</span>
              </button>
            ))}
            <div className="confirm-modal__body__final-text">{t('host-modal.warning')}</div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={ConvertHostModalTypesConvertHostQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{this.props.t('general.error')}</div>;
          }
          if (props && props.getAllowedTypesConvertHost) {
            return this.renderModal(props.getAllowedTypesConvertHost);
          }
        }}
      />
    );
  }
}

ConvertHostModal.defaultValues = {
  isVisibleModal: false,
};

ConvertHostModal.propTypes = {
  isVisibleModal: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  clickInConvertHostOption: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(ConvertHostModal);
