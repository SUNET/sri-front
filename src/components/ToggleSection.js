import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import "../style/ToggleSection.scss";

export const PanelEditable = React.createContext(false);

class ToggleSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            editable: false
        };
    }

    handleTogglePanel = (event) => {
        this.setState({ visible: !this.state.visible });
    };

    handleEditPanel = (event) => {
        event.stopPropagation();
        this.setState({ editable: !this.state.editable });
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
                                handleEditPanel={this.handleEditPanel}
                                aria-expanded={this.state.visible}
                            >
                                {child.props.children}
                            </ToggleHeading>
                        )}
                        {index === 1 && (
                            <PanelEditable.Provider value={this.state.editable}>
                                <TogglePanel {...child.props} show={this.state.visible} editable={this.state.editable}>
                                    {child.props.children}
                                </TogglePanel>
                            </PanelEditable.Provider>
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

    handleEditPanel = (event) => {
        this.props.handleEditPanel(event);
    };

    render() {
        return (
            <div className="toggle-header" {...this.props} onClick={(e) => this.handleTogglePanel(e)}>
                {this.props.children}
                <span className="icon-action" onClick={(e) => this.handleEditPanel(e)}>
                    <FontAwesomeIcon icon={faPen} />
                </span>
            </div>
        );
    }
}

export class TogglePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editable: false
        };
    }

    componentWillUpdate(prevProps) {
        if (this.props.editable !== prevProps.editable) {
            this.setState({ editable: prevProps.editable });
        }
    }

    render() {
        return this.props.show && <div className="toggle-panel">{this.props.children}</div>;
    }
}

export default ToggleSection;
