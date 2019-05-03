import React from "react";
import PropTypes from "prop-types";

class ModelRow extends React.PureComponent {
    static propTypes = {
        model: PropTypes.object.isRequired
    };

    render() {
        let model = this.props.model;

        return (
            <tr>
				<td>{model.id}</td>
                <td>{model.name}</td>
            </tr>
        );
    }
}

export default ModelRow;
