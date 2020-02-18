import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";

import FieldSwitch from "./FieldSwitch";

import "../style/FilterColumns.scss";

class FilterColumns extends React.Component {
    static propTypes = {
        filterColumns: PropTypes.func,
        type: PropTypes.string
    };

    // cancelFilterColumns = () => {
    //     this.props.cancelFilterColumns(this.props.columns_visible);
    // };
    //
    // applyFilterColumns = () => {
    //     this.props.filterColumns && this.props.filterColumns();
    // };

    handleChangeColumns = (event) => {
        if (event.target.id === "all_columns") {
            this.props.showAllColumns(this.props.columns_visible, this.props.model);
        } else {
            this.props.showHideColumn(event.target.id, event.target.checked, this.props.model);
        }
    };
    renderMenu() {
        const { t, columns, columns_visible, type, all_columns } = this.props;

        return (
            <div className={`${this.props.classContainer ? this.props.classContainer : ""}`}>
                <div>
                    {columns.map((column) => {
                        let defaultValue = columns_visible !== undefined ? columns_visible[column.value] : false;
                        // console.log(column.value);
                        //
                        // console.log(columns_visible);
                        return (
                            <FieldSwitch
                                key={column.value}
                                type="toggle-icon"
                                icon="check"
                                color="p-success-o"
                                classNames="off-hidden"
                                label={column.name}
                                handleChecked={(e) => {
                                    this.handleChangeColumns(e);
                                }}
                                defaultValue={defaultValue}
                                id={column.value}
                            />
                        );
                    })}

                    <FieldSwitch
                        type="toggle-icon"
                        icon="check"
                        color="p-success-o"
                        classNames="off-hidden"
                        label={t("filter_columns.all")}
                        forcedDefault={true}
                        handleChecked={(e) => {
                            this.handleChangeColumns(e);
                        }}
                        defaultValue={all_columns}
                        id="all_columns"
                    />
                </div>
            </div>
        );
    }

    render() {
        return <div>{this.renderMenu()}</div>;
    }
}

export default withTranslation()(FilterColumns);
