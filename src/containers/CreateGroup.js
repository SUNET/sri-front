import { connect } from "react-redux";

import { addRow } from "../actions/ComponentFormRow";
import { CreateContact } from "../components/contact";

const mapStateToProps = (state, props) => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addRow: (index) => dispatch(addRow(index)),
    };
};

const CreateContactContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateContact);

export default CreateContactContainer;
