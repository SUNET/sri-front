import { connect } from "react-redux";

import { addRow } from "../actions/ComponentFormRow";
import { CreateOrganization } from "../components/organization";

const mapStateToProps = (state, props) => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addRow: (index) => dispatch(addRow(index)),
    };
};

const CreateOrganizationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateOrganization);

export default CreateOrganizationContainer;
