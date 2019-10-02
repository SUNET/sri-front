import React from "react";
import PropTypes from "prop-types";
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

    static propTypes = {
        defaultEditable: PropTypes.bool,
        handleTogglePanel: PropTypes.func,
        handleEditPanel: PropTypes.func,
    };

    static defaultProps = {
        defaultEditable: true,
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
                                togglePanel={this.handleTogglePanel}
                                editPanel={this.handleEditPanel}
                                defaultEditable={this.props.defaultEditable}
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
        this.props.togglePanel(event);
    };

    handleEditPanel = (event) => {
        this.props.editPanel(event);
    };

    static propTypes = {
        togglePanel: PropTypes.func,
        editPanel: PropTypes.func
    };

    render() {
        return (
            <div className="toggle-header" aria-expanded={this.props['aria-expanded']} onClick={(e) => this.handleTogglePanel(e)}>
                {this.props.children}
                {this.props.defaultEditable && (
                    <span className="icon-action" onClick={(e) => this.handleEditPanel(e)}>
                        <FontAwesomeIcon icon={faPen} />
                    </span>
                )}
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

    UNSAFE_componentWillUpdate(prevProps) {
        if (this.props.editable !== prevProps.editable) {
            this.setState({ editable: prevProps.editable });
        }
    }

    render() {
        return this.props.show && <div className="toggle-panel">{this.props.children}</div>;
    }
}

export default ToggleSection;
