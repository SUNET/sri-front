import React from "react";
import { Button, Dropdown, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import FieldSwitch from "./FieldSwitch";

import "../style/FilterColumns.scss";

class FilterColumns extends React.Component {
    handleChangeColumns = (event) => {
        if (event.target.id === "all_columns") {
            this.props.showAllColumns(this.props.columnsVisible);
        } else {
            this.props.showHideColumn(event.target.id, event.target.checked);
        }
    };

    render() {
        return (
            <div className="filter-columns">
                <Dropdown alignRight>
                    <Dropdown.Toggle as="span">
                        <FontAwesomeIcon icon={faBars} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Header>Show/Hide Columns</Dropdown.Header>
                        <Dropdown.Divider />
                        <div>
                            {this.props.columns.map((column) => {
                                return (
                                    <FieldSwitch
                                        key={column.label}
                                        type="toggle-icon"
                                        icon="check"
                                        color="p-success-o"
                                        classNames="off-hidden"
                                        label={column.label}
                                        handleChecked={(e) => {
                                            this.handleChangeColumns(e);
                                        }}
                                        defaultValue={this.props.columnsVisible[column.label]}
                                        id={column.label}
                                    />
                                );
                            })}

                            <FieldSwitch
                                type="toggle-icon"
                                icon="check"
                                color="p-success-o"
                                classNames="off-hidden"
                                label="All"
                                handleChecked={(e) => {
                                    this.handleChangeColumns(e);
                                }}
                                defaultValue={this.props.all_columns}
                                id="all_columns"
                            />
                        </div>
                        <Dropdown.Divider />
                        <div>
                            <Row>
                                <Col>
                                    <Button>Cancel</Button>
                                </Col>
                                <Col>
                                    <Button>Accept</Button>
                                </Col>
                            </Row>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}

export default FilterColumns;
