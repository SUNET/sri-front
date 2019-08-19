import React from "react";

class AppendChild extends React.Component {
    constructor() {
        super();

        this.state = {
            children: []
        };
    }
    componentWillMount() {
        this.setState({
            children: [this.props.children]
        });
    }

    appendChild = (event) => {
        event.preventDefault();
        this.setState({
            children: [...this.state.children, this.props.children[0]]
        });
    };

    render() {
        console.log(this.props.children);
        return (
            <div>
                <div>{this.state.children.map((child) => child)}</div>
                <button onClick={(e) => this.appendChild(e)}>Add New</button>
            </div>
        );
    }
}

export default AppendChild;
