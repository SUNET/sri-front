import React from "react";
import { withTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

class ComponentFormRow extends React.PureComponent {

    removeRow = (event) => {
        if (this.props.fields.length !== 1) {
            this.props.fields.remove(this.props.index);
            this.props.removeRow(this.props.index);
        }
    };

    render() {
        let { t, index, saveRow, editRow, is_editing, is_new } = this.props;
        return (
            <div>
                {this.props.children(is_editing, is_new)}
                {this.props.editable ? (
                    <div className="col-actions">
                        {!is_editing && !is_new ? (
                            <div>
                                <FontAwesomeIcon icon={faTrash} onClick={(e) => this.removeRow(e)} />
                                <FontAwesomeIcon icon={faPen} onClick={() => editRow(index)} />
                            </div>
                        ) : (
                            <div className="ok-check" onClick={() => saveRow(index)}>
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
