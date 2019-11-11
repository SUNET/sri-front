import React from "react";
import { Route, Switch } from "react-router-dom";
import ProfileContainer from "../containers/Profile";

class PersonalArea extends React.Component {
    render() {
        return <ProfileContainer />;
    }
}
export default PersonalArea;
