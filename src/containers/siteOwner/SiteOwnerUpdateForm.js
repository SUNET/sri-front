import { connect } from "react-redux";
import SiteOwnerUpdateForm from "../../components/siteOwner/SiteOwnerUpdateForm";
import { formValueSelector, getFormMeta, getFormSyncErrors } from "redux-form";
import uuidv4 from "uuid/v4";
import * as actions from "../../actions/Notify";
// import { showNewContactForm } from "../../actions/ComponentFormRow";

const mapStateToProps = (state, props) => {
    const updateSiteOwnerSelector = formValueSelector("updateSiteOwner");
    const siteOwner = props.siteOwner;

    const initialValues = {
        id: siteOwner.id,
        name: siteOwner.name,
        description: siteOwner.description,
        url: siteOwner.url
    };
    return {
        initialValues,
        name: updateSiteOwnerSelector(state, "name"),
        description: updateSiteOwnerSelector(state, "description"),
        url: updateSiteOwnerSelector(state, "url"),
        formSyncErrors: getFormSyncErrors("updateSiteOwner")(state),
        fields: getFormMeta("updateSiteOwner")(state)
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        notify: (msg, level) => {
            dispatch(actions.notify(msg, level));
        }
        // ,showNewContactForm
    };
};

const SiteOwnerUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(SiteOwnerUpdateForm);

export default SiteOwnerUpdateFormContainer;
