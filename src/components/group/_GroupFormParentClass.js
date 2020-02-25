import React from "react";
import { arrayPush, FieldArray, Field, reduxForm } from "redux-form";
import EditField from "../EditField";

import uuidv4 from "uuid/v4";

import InfoCreatorModifier from "../InfoCreatorModifier";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import FieldInput from "../FieldInput";
import FieldArrayMembersGroup from "./FieldArrayMembersGroup";
import Worklog from "../Worklog";

import BackCTA from "../common/BackCTA";
import SaveCancelCTAs from "../common/SaveCancelCTAs";
import { isBrowser, isMobile } from "react-device-detect";

import "../../style/ModelDetails.scss";

class _GroupFormParentClass extends React.Component {
    IS_UPDATED_FORM = false;
    FORM_ID;
    refetch = () => {
        throw new Error("This method should be overwritten in the child class");
    };
    handleSubmit = () => {
        throw new Error("This method should be overwritten in the child class");
    };
    onClickDelete = () => {
        this.props.onDelete();
    };
    onClickCancel = () => {
        this.props.history.push("/community/groups");
    };
    _hasBeenAdded = (newMember) => {
        if (this.props.memberValues) {
            return this.props.memberValues.some((member) => member.id === newMember.id);
        }
        return false;
    };
    handleSelectedMember = (selection) => {
        if (selection !== null) {
            this.props.getContact(selection.id).then((member) => {
                const newMember = {
                    name: member.name,
                    first_name: member.first_name,
                    last_name: member.last_name,
                    id: member.id,
                    contact_type: member.contact_type,
                    organization: member.roles,
                    organization_obj: member.roles.length ? member.roles.map((elem) => elem.end) : [],
                    organization_label: member.roles.length ? member.roles.map((elem) => elem.end) : [],
                    email: member.emails,
                    email_obj: member.emails,
                    phone: member.phones,
                    phone_obj: member.phones,
                    created: true,
                    origin: "new",
                    status: "saved",
                    key: uuidv4()
                };
                if (!this._hasBeenAdded(newMember)) {
                    this.props.dispatch(arrayPush(this.props.form, "members", newMember));
                }
            });
        }
    };
    renderHeaderName(editMode = true) {
        const { t, name } = this.props;
        return (
            <div className="title-section">
                <BackCTA onClick={() => this.props.history.goBack()} />
                <div className="vertical-separator"></div>
                <EditField
                    error={this.props.formSyncErrors.name}
                    meta={this.props.fields.name}
                    form={this.props.form}
                    dispatch={this.props.dispatch}
                    editable={editMode}
                    placeholder={t("contact-details.new")}
                >
                    <h1>{name}</h1>
                </EditField>
            </div>
        );
    }
    renderSaveCancelButtons() {
        const { t, shown_in_modal, hideContactModal, history } = this.props;
        const textToButtons = this.IS_UPDATED_FORM ? t("actions.delete") : t("actions.cancel");
        const functionToCancel = this.IS_UPDATED_FORM ? this.onClickDelete : this.onClickCancel;
        return <SaveCancelCTAs formId={this.FORM_ID} cancelText={textToButtons} onCancel={functionToCancel} />;
    }
    renderHeaderRight() {
        const { t, group } = this.props;
        return (
            <div className="title-section__right-block">
                <div className="title-section__right-block__buttons with-vertical-separator with-vertical-separator--right">
                    <button
                        type="button"
                        onClick={() => {
                            this.setState({ editMode: !this.state.editMode });
                        }}
                        className="btn outline btn-edit"
                    >
                        <i className="icon-pencil"></i>
                        <span>{t("actions.edit")}</span>
                    </button>
                </div>
                <InfoCreatorModifier model={group} />
            </div>
        );
    }
    renderDescriptionToggleSection(editMode = true) {
        const { t, description } = this.props;
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("organization-details.description")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    {editMode ? (
                        <Field
                            name="description"
                            component={FieldInput}
                            as="textarea"
                            rows="3"
                            placeholder={t("group-details.add-description")}
                        ></Field>
                    ) : (
                        <span className="pre-text">{description}</span>
                    )}
                </TogglePanel>
            </ToggleSection>
        );
    }
    renderContactsToggleSection(editMode = true) {
        const { t } = this.props;
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("organization-details.contacts")}</h2>
                </ToggleHeading>

                <TogglePanel>
                    <FieldArray
                        name="members"
                        component={FieldArrayMembersGroup}
                        editable={editMode}
                        dispatch={this.props.dispatch}
                        errors={this.props.formSyncErrors.members}
                        metaFields={this.props.fields}
                        handleContactSearch={this.handleSelectedMember}
                        handleAddContactRow={() => {
                            this.props.dispatch(this.props.showNewContactForm());
                        }}
                    />
                </TogglePanel>
            </ToggleSection>
        );
    }
    renderWorklogToggleSection() {
        const { t, group } = this.props;
        return (
            <section className="model-section">
                {this.IS_UPDATED_FORM ? (
                    <Worklog model={group} refetch={this.refetch} />
                ) : (
                    <ToggleSection defaultEditable={false}>
                        <ToggleHeading>
                            <h2>{t("contact-details.worklog")}</h2>
                        </ToggleHeading>
                        <TogglePanel>
                            <Field
                                name="comment"
                                component={FieldInput}
                                as="textarea"
                                rows="3"
                                placeholder={t("worklog.add-comment")}
                                onBlur={(e) => {
                                    this.setState({ comment: e.target.value });
                                }}
                            />
                        </TogglePanel>
                    </ToggleSection>
                )}
            </section>
        );
    }

    render() {
        console.error("This method should be overwritten in the child class");
        return <div>This method should be overwritten in the child class</div>;
    }
}
export default _GroupFormParentClass;
