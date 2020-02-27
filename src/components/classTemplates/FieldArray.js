class FieldArray extends React.Component {
    state = {
        showModal: false, // DEFAULT: false
        selectedRowKey: null // DEFAULT: null
    };

    // lifecycle
    UNSAFE_componentWillUpdate(nextProps, nextState) {
    }
    // methods onClick
    onClickAccept() {
    }
    // methods state
    showDataModal(key) {
        this.setState({
        });
    }

    hideDataModal() {
        this.setState({
        });
    }

    // methods getData
    getValueByKey(key) {
        return {
        };
    }
    getRowsData(selectedRowKey) {

        return []
    }

    getRowsMobileData() {
    }

    // methods validation
    validate = (field, index) => {
    };

    // methods rows
    addRow = (event) => {
    };

    removeRow = (key) => {
    };

    saveLabel = (event, key) => {
    };

    // common Renders
    renderModal() {
        return (
            <></>
        );
    }

    renderInternalModalForm(fieldKey) {
        return (
            <></>
        );
    }

    renderFormBlockSection = (editable, data, index) => {
        return (
            <></>
        );
    };

    renderButtonsMobile(key) {
        return (
            <></>
        );
    }

    renderMoreInfoButton(key) {
        return (
            <></>
        );
    }

    renderRemoveCtaCross(key) {
        return (
            <></>
        );
    }

    renderMobileFooterModalButtons(key) {
        return (
            <></>
        );
    }

    renderAcceptModalButton() {
        return (
            <></>
        );
    }

    renderRemoveCtaButton(key) {
        return (
            <></>
        );
    }

    renderRowsData() {
        return (
            <></>
        );
    }

    render() {
        const { meta, t, editable } = this.props;
        return (
            <div className="organizations-contacts">
                {this.renderRowsData()}
                {meta.error && <div>{meta.error}</div>}
                {editable && (
                    <button type="button" className="btn btn-add outline" onClick={(e) => this.addRow(e)}>
                        {t("actions.add-new")}
                    </button>
                )}
                {this.state.showModal && this.renderModal()}
            </div>
        );
    }

}

export default withTranslation()(FieldArray);+
