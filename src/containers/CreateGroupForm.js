import { connect } from "react-redux";
import { getFormMeta, getFormSyncErrors, formValueSelector } from "redux-form";

import CreateGroupForm from "../components/group/CreateGroupForm";

const mapStateToProps = (state, props) => {
    const updateGroupSelector = formValueSelector("createGroup");
    return {
        fields: getFormMeta("createGroup")(state),
        formSyncErrors: getFormSyncErrors("createGroup")(state),
        memberValues: updateGroupSelector(state, "members"),
        name: updateGroupSelector(state, "name"),
        refreshFields: state.refreshFields
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const CreateGroupFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateGroupForm);

export default CreateGroupFormContainer;
