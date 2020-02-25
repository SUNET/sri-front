import React from "react";
import { withTranslation } from "react-i18next";

class SaveCancelCTAs extends React.Component {
    onClickCancel() {
        this.props.onCancel();
        // if (this.props.shown_in_modal) {
        //     this.props.hideContactModal();
        // } else {
        //     this.props.history.goBack();
        // }
    }
    render() {
        const { t, formId } = this.props;
        return (
            <div className="text-right mt-4">
                <button type="button" className="mr-2 btn link" onClick={() => this.onClickCancel()}>
                    {t("actions.cancel")}
                </button>
                <button
                    form={formId}
                    className="btn primary lg"
                    type="submit"
                >
                    {t("actions.save")}
                </button>
            </div>
        );
    }
}

export default withTranslation()(SaveCancelCTAs);
