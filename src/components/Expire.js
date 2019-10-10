import React from "react";

class Expire extends React.Component {
    constructor(props) {
        super(props);

        this.timer = null;

        this.state = {
            delay: 1000,
            visible: true
        };
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        // reset the timer if children are changed
        if (nextProps.children !== this.props.children) {
            this.setTimer();
            this.setState({ visible: true });
        }
    }

    componentDidMount() {
        this.setTimer();
    }

    setTimer() {
        // clear any existing timer
        this._timer = this._timer !== null ? clearTimeout(this._timer) : null;

        // hide after `delay` milliseconds
        this._timer = setTimeout(() => {
            this.setState({ visible: false });
            this._timer = null;
        }, this.props.delay);
    }
    componentWillUnmount() {
        clearTimeout(this._timer);
    }
    render() {
        return this.state.visible && <div>{this.props.children}</div>;
    }
}

export default Expire;
