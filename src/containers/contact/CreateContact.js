import { connect } from "react-redux";

import CreateContact from "../../components/contact/CreateContact";

const mapStateToProps = (state, props) => {
    return {
        show_contact_form: state.componentFormRow.show_contact_form
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const CreateContactContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateContact);

export default CreateContactContainer;
