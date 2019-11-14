import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";

import FieldSwitch from "./FieldSwitch";

import "../style/FilterColumns.scss";

class OrderFilterColumns extends React.Component {
    static propTypes = {
        filterColumns: PropTypes.func,
        type: PropTypes.string
    };

    UNSAFE_componentWillMount() {
        let { orderBy, filterColumn, column } = this.props;
        if (orderBy && orderBy.includes(column)) {
            this.setState({ orderBy: orderBy });
        }
        if (filterColumn) {
            let filter_bak = {};
            filterColumn.forEach((filter_key) => {
                filter_bak[filter_key] = true;
            });
            this.setState({ filters: { ...this.state.filters, ...filter_bak, all_columns: false } });
        }
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        // if all filtes is false, all_columns set true
        if (Object.values(nextState.filters).every((value) => !value)) {
            this.setState({ filters: { all_columns: true } });
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            orderBy: "",
            filters: { all_columns: true }
        };
    }

    handleOrderBy = (orderBy) => {
        this.setState({ orderBy: this.props.column + orderBy });
    };

    handleChangeFilter = (event) => {
        if (event.target.id === "all_columns") {
            this.setState({ filters: { all_columns: event.target.checked } });
        } else {
            this.setState({
                filters: { ...this.state.filters, [event.target.id]: event.target.checked, all_columns: false }
            });
        }
    };

    resetFilterColumn = () => {
        let filterData = {};
        filterData.orderBy = "handle_id_DESC";
        filterData.column = this.props.column;
        filterData.filters = [];
        this.props.orderFilterColumns(filterData);
    };

    applyOrderFilterColumns = () => {
        let filterData = {};
        filterData.orderBy = this.state.orderBy;
        filterData.column = this.props.column;
        filterData.filters = [];
        Object.keys(this.state.filters).forEach((filter_key) => {
            let filter = this.state.filters[filter_key];
            if (filter && filter_key !== "all_columns") {
                filterData.filters.push(filter_key);
            }
        });
        this.props.orderFilterColumns(filterData);
    };

    render() {
        const { t, column } = this.props;
        return (
            <div className={`filter-columns ${this.props.type}`}>
                <Dropdown>
                    <Dropdown.Toggle as="span">
                        {this.props.type === "order" && <i className="icon-filter"></i>}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.props.type === "order" && (
                            <div className="order-by">
                                <div
                                    className={this.state.orderBy.includes(column + "_DESC") ? "selected" : ""}
                                    onClick={() => this.handleOrderBy("_DESC")}
                                >
                                    {t("filter_columns.order_desc")}
                                </div>
                                <div
                                    className={this.state.orderBy.includes(column + "_ASC") ? "selected" : ""}
                                    onClick={() => this.handleOrderBy("_ASC")}
                                >
                                    {t("filter_columns.order_asc")}
                                </div>
                            </div>
                        )}
                        <Dropdown.Divider />
                        <div>
                            {this.props.columns.map((column) => {
                                let defaultValue =
                                    this.state.filters[column.value] !== undefined
                                        ? this.state.filters[column.value]
                                        : false;
                                return (
                                    <FieldSwitch
                                        key={column.value}
                                        type="toggle-icon"
                                        icon="check"
                                        color="p-success-o"
                                        classNames="off-hidden"
                                        label={column.name}
                                        handleChecked={(e) => {
                                            this.handleChangeFilter(e);
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
                                label="All"
                                forcedDefault={true}
                                handleChecked={(e) => {
                                    this.handleChangeFilter(e);
                                }}
                                defaultValue={this.state.filters.all_columns}
                                id="all_columns"
                            />
                            <Dropdown.Divider />
                            <div className="text-center">
                                <button type="button" className="mr-2" onClick={() => this.resetFilterColumn()}>
                                    {t("actions.cancel")}
                                </button>
                                <button
                                    type="button"
                                    className="btn secundary "
                                    onClick={() => this.applyOrderFilterColumns()}
                                >
                                    {t("actions.accept")}
                                </button>
                            </div>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}

export default withTranslation()(OrderFilterColumns);
