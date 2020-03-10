// Common imports
import React from "react";
import { arrayPush, FieldArray, Field } from "redux-form";
import uuidv4 from "uuid/v4";
import { Form, Col } from "react-bootstrap";
// components
import BackCTA from "../common/BackCTA";
import EditField from "../EditField";
import FieldInput from "../FieldInput";
import InfoCreatorModifier from "../InfoCreatorModifier";
import SaveCancelCTAs from "../common/SaveCancelCTAs";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import Worklog from "../Worklog";
// const
import { isBrowser, isMobile } from "react-device-detect";
// scss
import "../../style/ModelDetails.scss";

class ___EntityClassName__FormParentClass extends React.Component {
    // GLOBAL VARs
    IS_UPDATED_FORM = false;
    FORM_ID;
    MODEL_NAME = "__entityName__";
    ROUTE_LIST_DIRECTION = "/__entityBlock__/__entityInternalRoutePath__s";

    // Methods
    refetch = () => {
        throw new Error("This method should be overwritten in the child class");
    };
    handleSubmit = () => {
        throw new Error("This method should be overwritten in the child class");
    };
    // onClickDelete = () => {
    //     this.props.onDelete();
    // };
    onClickCancel = () => {
        this.props.history.push(this.ROUTE_LIST_DIRECTION);
    };

    // Common sections RENDERS
    renderEditButton() {
        const { t } = this.props;
        const desktopClass = isBrowser ? "with-vertical-separator with-vertical-separator--right" : "";
        return (
            <div className={`title-section__right-block__buttons ${desktopClass} mr-3`}>
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
        );
    }
    renderSaveCancelButtons() {
        const { t } = this.props;
        const textToButtons = this.IS_UPDATED_FORM ? t("actions.delete") : t("actions.cancel");
        const functionToCancel = this.IS_UPDATED_FORM ? this.onClickDelete : this.onClickCancel;
        return <SaveCancelCTAs formId={this.FORM_ID} cancelText={textToButtons} onCancel={functionToCancel} />;
    }
    renderHeader(editMode = true, showBackButton = true) {
        return (
            <Form.Row>
                <Col className={`d-inline-flex align-items-center ${isMobile ? "mb-3" : ""}`}>
                    {this.renderHeaderName(editMode, showBackButton)}
                </Col>
                {this.IS_UPDATED_FORM && <Col>{this.renderHeaderRight()}</Col>}
            </Form.Row>
        );
    }
    renderHeaderName(editMode = true, showBackButton = true) {
        const editionModeClass = editMode ? "title-section__name-inputs--edition-mode" : "";
        return (
            <div className="title-section">
                {showBackButton && <BackCTA onClick={() => this.props.history.goBack()} />}
                {this.IS_UPDATED_FORM && isMobile && this.renderEditButton()}
                <div className="vertical-separator"></div>
                <div className={`title-section__name-inputs ${editionModeClass}`}>
                    {this.renderInputName("name", editMode)}
                </div>
            </div>
        );
    }
    renderHeaderRight() {
        return (
            <div className="title-section__right-block">
                {isBrowser && this.renderEditButton()}
                <InfoCreatorModifier model={this.props[this.MODEL_NAME]} />
            </div>
        );
    }
    renderInputName(kindOfName, editMode = true) {
        // INFO: kindOfName = 'first_name' || 'last_name' || 'name'
        const { t, formSyncErrors, fields, form, dispatch } = this.props;
        let placeHolderString = t("contact-details.name");
        if (kindOfName === "last_name") {
            placeHolderString = t("contact-details.lastName");
        }
        return (
            <EditField
                error={formSyncErrors[kindOfName]}
                meta={fields[kindOfName]}
                form={form}
                dispatch={dispatch}
                editable={editMode}
                placeholder={placeHolderString}
                name={kindOfName}
            >
                <h1>{this.props[kindOfName]}</h1>
            </EditField>
        );
    }
    renderWorkLog() {
        const { t, __entityName__ } = this.props;
        return (
            <section className="model-section">
                {this.IS_UPDATED_FORM ? (
                    <Worklog model={__entityName__} refetch={this.refetch} />
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

    // Specific toggle sections RENDERS
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
                            placeholder={t("__entityName__-details.add-description")}
                        ></Field>
                    ) : (
                        <span className="pre-text">{description}</span>
                    )}
                </TogglePanel>
            </ToggleSection>
        );
    }
    renderModelMainSection(editMode = true) {
        return (
            <section className="model-section">
                <Form.Row>
                    <Col>
                        <Col>{this.renderDescriptionToggleSection(editMode)}</Col>
                    </Col>
                </Form.Row>
            </section>
        );
    }

    // Main RENDER
    render() {
        console.error("This method should be overwritten in the child class");
        return <div>This method should be overwritten in the child class</div>;
    }
}
export default ___EntityClassName__FormParentClass;
