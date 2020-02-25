import React from "react";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import EditField from "../EditField";
import InfoCreatorModifier from "../InfoCreatorModifier";
import FieldInput from "../FieldInput";
import { FieldArray, Field, reduxForm } from "redux-form";

import Worklog from "../Worklog";
import FieldArrayMembersGroup from "./FieldArrayMembersGroup";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import BackCTA from "../common/BackCTA";

import UpdateGroupMutation from "../../mutations/group/UpdateGroupMutation";

import ValidationsGroupForm from "./ValidationsGroupForm";

import _GroupFormParentClass from "./_GroupFormParentClass";

import { UPDATE_GROUP_FORM } from "../../utils/constants";

class GroupUpdateForm extends _GroupFormParentClass {
    IS_UPDATED_FORM = true;
    FORM_ID = UPDATE_GROUP_FORM;
    state = {
        editMode: false
    };
    refetch = () => {
        this.props.relay.refetch(
            { groupId: this.props.group.id }, // Our refetchQuery needs to know the `groupID`
            null, // We can use the refetchVariables as renderVariables
            () => {
                console.log("Refetch done");
            },
            { force: true }
        );
    };
    handleSubmit = (group) => {
        this.setState({ editMode: !this.state.editMode });
        UpdateGroupMutation(group, this);
    };
    render() {
        let { group, handleSubmit } = this.props;
        return (
            <form id={this.FORM_ID} onSubmit={handleSubmit(this.handleSubmit)}>
                {this.renderSaveCancelButtons()}
                <Form.Row>
                    <Col>{this.renderHeaderName(this.state.editMode)}</Col>
                    <Col>{this.renderHeaderRight()}</Col>
                </Form.Row>
                <section className="model-section">
                    <Form.Row>
                        <Col>{this.renderDescriptionToggleSection(this.state.editMode)}</Col>
                    </Form.Row>
                    <hr />
                    <Form.Row>
                        <Col>{this.renderContactsToggleSection(this.state.editMode)}</Col>
                    </Form.Row>
                    {this.renderWorklogToggleSection()}
                </section>
                {this.renderSaveCancelButtons()}
            </form>
        );
    }
}

GroupUpdateForm = reduxForm({
    form: "updateGroup",
    validate: ValidationsGroupForm.validate,
    enableReinitialize: true,
    onSubmitSuccess: (result, dispatch, props) => {
        document.documentElement.scrollTop = 0;
    }
})(GroupUpdateForm);

const GroupUpdateFragment = createRefetchContainer(
    withTranslation()(GroupUpdateForm),
    {
        group: graphql`
            fragment GroupUpdateForm_group on Group {
                id
                name
                description
                contacts {
                    id
                    first_name
                    last_name
                    contact_type
                    emails {
                        id
                        name
                        type
                    }
                    phones {
                        id
                        name
                        type
                    }
                    roles {
                        role_data {
                            id
                            name
                        }
                        end {
                            id
                            name
                        }
                    }
                    outgoing {
                        name
                        relation {
                            relation_id
                            type
                            end {
                                id
                                node_name
                            }
                        }
                    }
                }
                comments {
                    id
                    user {
                        first_name
                        last_name
                    }
                    comment
                    submit_date
                }
                created
                creator {
                    email
                }
                modified
                modifier {
                    email
                }
            }
        `
    },

    graphql`
        # Refetch query to be fetched upon calling 'refetch'.
        # Notice that we re-use our fragment and the shape of this query matches our fragment spec.
        query GroupUpdateFormRefetchQuery($groupId: ID!) {
            getGroupById(id: $groupId) {
                ...GroupUpdateForm_group
            }
        }
    `
);

export default GroupUpdateFragment;
