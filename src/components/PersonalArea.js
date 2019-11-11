import React from "react";
import { Route } from "react-router-dom";
import ProfileContainer from "../containers/Profile";

class PersonalArea extends React.Component {
    render() {
        return <Route path="/personal-area/profile-settings" component={ProfileContainer} />;
    }
}
export default PersonalArea;
