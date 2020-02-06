import { connect } from "react-redux";

import ModalNewContact from "../components/contact/CreateContactForModal/ModalNewContact";

import { hideNewContactForm } from "../actions/ComponentFormRow";

const mapStateToProps = (state, props) => {
    console.log(state);
    return {
        // is_fetching: state.app.is_fetching,
        // is_app_loaded: state.app.is_app_loaded,
        is_contact_form_visible: state.componentFormRow.show_contact_form
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        // showContact: () => dispatch(saveRow(props.index)),
        // savedContact: () => dispatch(editRow(props.index)),
        // cancelContactModal: () => dispatch(removeRow(props.index))
        hideContactModal: () => dispatch(hideNewContactForm(props.index))
    };
};

const ModalNewContactContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalNewContact);

export default ModalNewContactContainer;
