import React from "react";
import { withTranslation } from "react-i18next";

class AppendChild extends React.Component {
    constructor() {
        super();

        this.state = {
            children: []
        };
    }
    componentWillMount() {
        this.setState({
            children: [...this.state.children, this.props.children]
        });
    }

    appendChild = (event) => {
        event.preventDefault();
        const childrenToCopy = this.state.children[0];
        console.log(childrenToCopy.props.children);
        // delete childrenToCopy.props.children.props.defaultValue;
        this.setState({
            children: [...this.state.children, childrenToCopy]
        });
    };

    render() {
        let { t } = this.props;
        return (
            <div>
                <div>{this.state.children.map((child) => child)}</div>
                <button className="btn btn-add outline" onClick={(e) => this.appendChild(e)}>
                    <span>{t("actions.add-new")}</span>
                </button>
            </div>
        );
    }
}

export default withTranslation()(AppendChild);
