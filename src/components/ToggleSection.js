import React from "react";

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
        console.log(this.props);
        console.log(this.state);
        return (
            <div className="toggle-section">
                    {React.Children.map(this.props.children, child =>
                            React.cloneElement(child, { handleTogglePanel: this.handleTogglePanel })
                        )
                    }
            </div>
        );
    }
}

export class TogglePanel extends React.Component {

    handleTogglePanel = (event) => {
        this.props.handleTogglePanel(event);
    }

    render() {
        return <div onClick={(e) => this.handleTogglePanel(e)}>{this.props.children}</div>;
    }
}


export class ToggleHeading extends React.Component {

    handleTogglePanel = (event) => {
        this.props.handleTogglePanel(event);
    }

    render() {
        return <div onClick={(e) => this.handleTogglePanel(e)}>{this.props.children}</div>;
    }
}

export default ToggleSection;
