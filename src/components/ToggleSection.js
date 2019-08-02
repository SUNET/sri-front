import React from "react";

export const ToggleHeading = ({ children }) => <div>{children}</div>;

export const TogglePanel = ({ children }) => <div>{children}</div>;

class ToggleSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };
    }

    togglePanel = () => {
        this.setState({ visible: !this.state.visible });
    };

    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <div className="toggle-section">
                <ToggleHeading onClick={this.togglePanel}>{this.props.children[0]}</ToggleHeading>
                {this.state.visible && <TogglePanel>{this.props.children[1]}</TogglePanel>}
            </div>
        );
    }
}

export default ToggleSection;
