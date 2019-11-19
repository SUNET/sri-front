import { connect } from "react-redux";
import Profile from "../components/Profile";
import { formValueSelector, getFormMeta, getFormSyncErrors } from "redux-form";

const mapStateToProps = (state, props) => {
    const updateGroupSelector = formValueSelector("profile");
    const initialValues = {};
    return {
        initialValues,
        name: updateGroupSelector(state, "name"),
        email: updateGroupSelector(state, "email"),
        formSyncErrors: getFormSyncErrors("profile")(state),
        fields: getFormMeta("profile")(state),
        user: state.app.user
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);

export default ProfileContainer;
