import React from "react";
import PropTypes from "prop-types";

import ModelRow from "./ModelRow";

class ModelList extends React.PureComponent {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        total: PropTypes.number.isRequired,
        loading: PropTypes.bool.isRequired,
        search: PropTypes.string.isRequired,
        queried: PropTypes.bool.isRequired
    };

    getData() {
        const repositories = this.props.data.map((model) => {
            return <ModelRow model={model} key={model.id} />;
        });
        return repositories;
    }

    renderTable() {
        if (this.props.loading || this.props.data.length === 0) {
            return null;
        } else {
            return (
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>{this.getData()}</tbody>
                </table>
            );
        }
    }
    render() {
        return <section>{this.renderTable()}</section>;
    }
}

export default ModelList;
