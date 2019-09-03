import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

class ComponentFormRow extends React.Component {
    constructor() {
        super();

        this.state = {
            is_saved: false
        };
    }

    static propTypes = {
        position: PropTypes.string.isRequired
    };

    saveRow = (event) => {
        this.setState({ is_saved: true });
    };

    editRow = (event) => {
        this.setState({ is_saved: false });
    };

    deleteRow = (event) => {};

    render() {
        let { t } = this.props;
        return (
            <div>
                {this.props.children}
                {this.props.editable && (
                    <div className="col-actions">
                        {!this.state.is_saved ? (
                            <div>
                                <FontAwesomeIcon icon={faTrash} onClick={(e) => {}} />
                                <FontAwesomeIcon icon={faPen} onClick={(e) => this.editRow(e)} />
                            </div>
                        ) : (
                            <div onClick={(e) => this.saveRow(e)}>{t("actions.save")}</div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default withTranslation()(ComponentFormRow);
