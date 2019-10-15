import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import "../../style/ModelRow.scss";

class OrganizationRow extends React.PureComponent {
    static propTypes = {
        organization: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    formatDate = (dateString) => {
        let date = new Date(dateString);
        return date.toISOString("YYYY-MM-DD");
    };

    render() {
        let organization = this.props.organization;
        return (
            <article onClick={(e) => this.props.onClick(e, organization)}>
                {(this.props.columnsVisible["name"] || this.props.showAllColumns) && <div>{organization.name}</div>}
                {(this.props.columnsVisible["organization_id"] || this.props.showAllColumns) && (
                    <div>{organization.handle_id}</div>
                )}
                {(this.props.columnsVisible["type"] || this.props.showAllColumns) && <div>{organization.type}</div>}
                {(this.props.columnsVisible["afffiliation"] || this.props.showAllColumns) && (
                    <div>
                        TEST
                        {/* {organization.afffiliations.map((afffiliation, index) => {
                            return (
                                <span key={index}>
                                    {role.end && (
                                        <>
                                            {role.end.name}
                                            {contact.roles[index + 1] ? ", " : ""}
                                        </>
                                    )}
                                </span>
                            );
                        })} */}
                    </div>
                )}
                {(this.props.columnsVisible["parent_organization_id"] || this.props.showAllColumns) && (
                    <div>
                        {organization.incoming.map((relation) => {
                            if (relation.name === "Parent_of") {
                                return relation.start.handle_id;
                            } else {
                                return "No has parent";
                            }
                        })}
                    </div>
                )}
            </article>
        );
    }
}

const OrganizationRowFragment = createFragmentContainer(OrganizationRow, {
    organization: graphql`
        fragment OrganizationRow_organization on Organization {
            handle_id
            name
            type
            incoming {
                name
                relation {
                    type
                    start {
                        handle_id
                        node_name
                    }
                }
            }
        }
    `
});

export default OrganizationRowFragment;
