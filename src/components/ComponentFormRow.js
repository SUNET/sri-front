import React from "react";
import { withTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

class ComponentFormRow extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            is_saved: false,
            is_editing: false,
            mount: true
        };
    }

    saveRow = (event) => {
        this.setState({ is_saved: true, is_editing: false });
    };

    editRow = (event) => {
        this.setState({ is_saved: false, is_editing: true });
    };

    deleteRow = (event) => {
        this.setState({ mount: false });
    };

    render() {
        let { t } = this.props;
        console.log(this.state);
        return (
            <>
                {this.state.mount && (
                    <div>
                        {this.props.children(this.state.is_editing)}
                        {this.props.editable ? (
                            <div className="col-actions">
                                {!this.state.is_editing ? (
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            onClick={(e) => {
                                                this.deleteRow(e);
                                            }}
                                        />
                                        <FontAwesomeIcon icon={faPen} onClick={(e) => this.editRow(e)} />
                                    </div>
                                ) : (
                                    <div className="ok-check" onClick={(e) => this.saveRow(e)}>
                                        {t("actions.save")}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                )}
            </>
        );
    }
}

export default withTranslation()(ComponentFormRow);
