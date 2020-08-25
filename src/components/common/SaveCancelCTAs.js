import React from 'react';
import { withTranslation } from 'react-i18next';

class SaveCancelCTAs extends React.Component {
  onClickCancel() {
    this.props.onCancel();
  }
  render() {
    const { t, formId } = this.props;
    return (
      <div className="save-cancel-ctas text-right mt-4">
        <button type="button" className="save-cancel-ctas__cancel mr-2 btn link" onClick={() => this.onClickCancel()}>
          {this.props.cancelText}
        </button>
        <button form={formId} className="save-cancel-ctas__save btn primary lg" type="submit">
          {t('actions/save')}
        </button>
      </div>
    );
  }
}

export default withTranslation()(SaveCancelCTAs);
