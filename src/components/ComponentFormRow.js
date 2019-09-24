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
            is_new: true
        };
    }

    saveRow = (event) => {
        this.setState({ is_saved: true, is_editing: false, is_new: false });
    };

    editRow = (event) => {
        this.setState({ is_saved: false, is_editing: true, is_new: false });
    };

    render() {
        let { t } = this.props;
        return (
            <div>
                {this.props.children(this.state.is_editing && this.state.is_new)}
                {this.props.editable ? (
                    <div className="col-actions">
                        {!this.state.is_editing && !this.state.is_new ? (
                            <div>
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    onClick={() => this.props.fields.remove(this.props.index)}
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
        );
    }
}

export default withTranslation()(ComponentFormRow);
