import _BasicFormParentClass from "../common/_BasicFormParentClass";
// Common imports
import React from "react";
// components
import Dropdown from "../Dropdown";
import DropdownSearch from "../DropdownSearch";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
// const
import { isBrowser } from "react-device-detect";
// scss
import "../../style/ModelDetails.scss";

const renderFormBlockSection = (editable, data, uniqueKey) => {
    const isPresentState = !editable;
    const presentContent = data.presentContent || "";
    return (
        <div className="form-internal-block__section" key={uniqueKey}>
            <div className="form-internal-block__section__title">{data.title}</div>
            <div
                className={`form-internal-block__section__content ${
                    editable ? "form-internal-block__section__content--edition-mode" : ""
                }`}
            >
                {isPresentState ? presentContent : data.editContent}
            </div>
        </div>
    );
};

class _CableFormParentClass extends _BasicFormParentClass {
    // GLOBAL VARs
    IS_UPDATED_FORM = undefined;
    FORM_ID = "";
    MODEL_NAME = "cable";
    ROUTE_LIST_DIRECTION = "/network/cables";

    handleProviderSearch = (selection) => {
        if (selection !== null) {
            this.props.getProvider(selection.id).then((provider) => {
                console.log("provider: ", provider);
            });
        }
    };

    // Specific toggle sections RENDERS
    renderGeneralInfoToggleSection(editMode = true) {
        const { t, cable_type } = this.props;
        const generalInfoFirstRow = [
            {
                title: t("organization-details.type"),
                presentContent:
                    cable_type,
                editContent: (
                    <Dropdown
                        className={`${isBrowser ? "auto" : "xlg mw-100"}`}
                        emptyLabel="Select type"
                        type="cable_types"
                        name="cable_type"
                        onChange={(e) => {}}
                    />
                )
            },
            {
                title: t("network.cable.details.provider"),
                presentContent: (
                    <DropdownSearch
                        selection={this.handleProviderSearch}
                        placeholder={t("search-filter.search-contact")}
                        model="providers"
                    />
                ),
                editContent: (
                    <DropdownSearch
                        selection={this.handleProviderSearch}
                        placeholder={t("search-filter.search-contact")}
                        model="providers"
                    />
                )
            }
        ];

        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("organization-details.general-information")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    <div>
                        <div className="form-internal-block">
                            {generalInfoFirstRow.map((formData, index) => {
                                return renderFormBlockSection(editMode, formData, index);
                            })}
                        </div>
                    </div>
                </TogglePanel>
            </ToggleSection>
        );
    }
    // Main RENDER
    render() {
        console.error("This method should be overwritten in the child class");
        return <div>This method should be overwritten in the child class</div>;
    }
}
export default _CableFormParentClass;
