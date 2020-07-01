import { connect } from "react-redux";
import { getFormMeta, getFormSyncErrors, formValueSelector } from "redux-form";

import * as actions from "../../actions/Notify";
import Create__EntityClassName__Form from "../../components/__entityName__/Create__EntityClassName__Form";

const mapStateToProps = (state, props) => {
    const update__EntityClassName__Selector = formValueSelector("create__EntityClassName__");
    return {
        fields: getFormMeta("create__EntityClassName__")(state),
        formSyncErrors: getFormSyncErrors("create__EntityClassName__")(state),
        name: update__EntityClassName__Selector(state, "name"),
        url: update__EntityClassName__Selector(state, "url")
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        notify: (msg, level) => {
            dispatch(actions.notify(msg, level));
        },
        showNewContactForm
    };
};

const Create__EntityClassName__FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Create__EntityClassName__Form);

export default Create__EntityClassName__FormContainer;
