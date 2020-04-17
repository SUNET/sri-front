import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Field } from "redux-form";
import Select from "react-select";

import FieldSelect from "./FieldSelect";

import environment from "../createRelayEnvironment";

const DropdownQuery = graphql`
    query DropdownQuery($name: String!) {
        getChoicesForDropdown(name: $name) {
            name
            value
        }
    }
`;

const DropdownOrganizationsAllQuery = graphql`
    query DropdownOrganizationsAllQuery {
        all_organizations {
            id
            node_name
            organization_id
        }
    }
`;

const DropdownRolesQuery = graphql`
    query DropdownRolesQuery {
        roles(orderBy: name_ASC) {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`;

const DropdownRolesGroupDefaultQuery = graphql`
    query DropdownRolesGroupDefaultQuery {
        getRolesFromRoleGroup {
            id
            name
        }
    }
`;

class Dropdown extends React.PureComponent {
    static propTypes = {
        type: PropTypes.string,
        name: PropTypes.string.isRequired,
        model: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        label: PropTypes.string,
        emptyLabel: PropTypes.string,
        defaultValue: PropTypes.string
    };
    // for real backend dropdowns
    renderOptions = (options) => {
        return options.map((option) => {
            return (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            );
        });
    };
    // dropdwons custom from a query
    renderOptionsModel = (options) => {
        return options.edges.map((option) => {
            return (
                <option key={option.node.id} value={option.node.id}>
                    {option.node.name}
                </option>
            );
        });
    };
    // dropdowns optimized by the backend to improve performance
    renderOptionsModelOptimized = (options) => {
        return options.map((option) => {
            return (
                <option key={option.id} value={option.id}>
                    {option.node_name}
                </option>
            );
        });
    };

    renderComboSelect(organizationsList) {
        const { organization_parent_id } = this.props;
        const formattedOrganizationList = organizationsList.all_organizations.map((org) => {
            return {
                value: org.organization_id,
                label: `${org.node_name} - ${org.organization_id}`,
                id: org.id
            };
        });

        const currentValue = formattedOrganizationList.find((org) => org.value === organization_parent_id);
        return (
            <Select
                value={currentValue}
                onChange={(newValue) => {
                    console.log('newValue: ', newValue);
                    this.props.onChange(newValue);
                }}
                options={formattedOrganizationList}
                placeholder={this.props.placeholder}
                className="combo-select-container"
                classNamePrefix="combo-select"
            />
        );
    }

    renderField(options) {
        return (
            <Field
                className={this.props.className}
                component={FieldSelect}
                onChange={(e) => this.props.onChange(e)}
                name={this.props.name}
                value={this.props.defaultValue || ""}
            >
                {this.props.emptyLabel && (
                    <option value="" default>
                        {this.props.emptyLabel}
                    </option>
                )}
                {this.props.model === "organization" && this.renderOptionsModelOptimized(options)}
                {(this.props.model === "roles" || this.props.model === "default_roles") &&
                    this.renderOptionsModel(options)}
                {this.props.model === undefined && this.renderOptions(options)}
            </Field>
        );
    }

    render() {
        let dropdownQuery = undefined;
        // TODO: Refactor get query depends of model
        switch (this.props.model) {
            case "organization":
                dropdownQuery = DropdownOrganizationsAllQuery;
                break;
            case "roles":
                dropdownQuery = DropdownRolesQuery;
                break;
            case "default_roles":
                dropdownQuery = DropdownRolesGroupDefaultQuery;
                break;
            default:
                dropdownQuery = DropdownQuery;
                break;
        }
        const variables =
            this.props.model === undefined
                ? {
                      name: this.props.type
                  }
                : null;
        return (
            <Form.Group className="d-inline">
                {this.props.label && <Form.Label>{this.props.label}</Form.Label>}
                <QueryRenderer
                    environment={environment}
                    query={dropdownQuery}
                    variables={variables}
                    render={({ error, props }) => {
                        if (error) {
                            return <div>{error.message}</div>;
                        } else if (props) {
                            let options = undefined;
                            if (this.props.model !== undefined) {
                                options = props[Object.keys(props)[0]];
                            } else {
                                options = props.getChoicesForDropdown;
                            }

                            return this.props.type === "organization_combo_list"
                                ? this.renderComboSelect(props)
                                : this.renderField(options);
                        }
                        return (
                            <select className={this.props.className}>
                                <option value="">{this.props.emptyLabel}</option>
                            </select>
                        );
                    }}
                />
            </Form.Group>
        );
    }
}

export default Dropdown;
