import React from "react";
import { Button, Dropdown, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import FieldSwitch from "./FieldSwitch";

import "../style/FilterColumns.scss";

class FilterColumns extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            columnsVisible: {
                all_col: true
            }
        };
    }

    handleChangeColumns = (event) => {
        let newState = {};
        var name = event.target.id;
        newState = { columnsVisible: { ...this.state.columnsVisible, [name]: event.target.checked } };
        if (event.target.id !== "all_col" && event.target.checked) {
            newState = { columnsVisible: { ...this.state.columnsVisible, all_col: false } };
        }
        this.setState(newState, console.log(this.state));
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
                                        defaultValue={this.state.columnsVisible[column.label]}
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
                                onChange={(e) => {
                                    this.handleChangeColumns(e);
                                }}
                                defaultValue={this.state.columnsVisible["all_col"]}
                                id="all_col"
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
