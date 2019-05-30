import React from "react";
import { Form } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import Dropdown from "./Dropdown";

import "../style/Filter.scss";

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterValue: "",
            contact_type: ""
        };
    }

    render() {
        const t = this.props.t;
        return (
            <section>
                <Form className="filter">
                    <div>
                        <Form.Control
                            placeholder="Filter"
                            defaultValue={this.state.filterValue}
                            onChange={(e) => this.props.handleOnChangeFilter(e)}
                        />
                    </div>
                    <div className="mt-1">
                        <header>
                            <span>
                                {t("Filters")}
                            </span>
                            <FontAwesomeIcon
                                icon={faFilter}
                                className="pullRight"
                            />
                        </header>
                        <Dropdown
                            label="Role"
                            type="contact_type"
                            onChange={(e) =>
                                this.setState({
                                    contact_type: e.target.value
                                })
                            }
                        />
                    </div>
                </Form>
            </section>
        );
    }
}

export default withTranslation()(Filter);
