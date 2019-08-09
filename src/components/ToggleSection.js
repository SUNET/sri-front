import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import "../style/ToggleSection.scss";

class ToggleSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };
    }

    handleTogglePanel = (event) => {
        this.setState({ visible: !this.state.visible });
    };

    render() {
        return (
            <div className="toggle-section">
                {React.Children.map(this.props.children, (child, index) => (
                    <>
                        {index === 0 && (
                            <ToggleHeading
                                {...child.props}
                                handleTogglePanel={this.handleTogglePanel}
                                aria-expanded={this.state.visible}
                            >
                                {child.props.children}
                            </ToggleHeading>
                        )}
                        {index === 1 && (
                            <TogglePanel {...child.props} show={this.state.visible}>
                                {child.props.children}
                            </TogglePanel>
                        )}
                    </>
                ))}
            </div>
        );
    }
}

export class ToggleHeading extends React.Component {
    handleTogglePanel = (event) => {
        this.props.handleTogglePanel(event);
    };

    render() {
        return (
            <div className="toggle-header" {...this.props} onClick={(e) => this.handleTogglePanel(e)}>
                {this.props.children}
                <FontAwesomeIcon icon={faPen} />
            </div>
        );
    }
}

export class TogglePanel extends React.Component {
    render() {
        return this.props.show && <div className="toggle-panel">{this.props.children}</div>;
    }
}

export default ToggleSection;
