import _SearchEntityParentClass from "../common/_SearchEntityParentClass";

// React imports
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";

// GraphQL imports
import graphql from "babel-plugin-relay/macro";

// Components imports
import EndUserList from "../../containers/endUser/EndUserList";

// Constants

class SearchEndUser extends _SearchEntityParentClass {
    LIST_CONTAINER = EndUserList;
    CREATE_COMPONENT = undefined;
    DETAIL_CONTAINER = undefined;

    MODEL_NAME = "endUser";
    MODEL_LIST_NAME = "endUsers";

    PATH_ENTITY = "/network/end-users";
    PATH_ENTITY_ID = "";
    DEFAULT_COLUMNS = [
        { name: "Name", value: "name", filter: "order" },
        { name: "URL", value: "url" },
        { name: "Description", value: "description", filter: "order" }
    ];
    LIST_QUERY = graphql`
        query SearchEndUserAllQuery($count: Int!, $filter: EndUserFilter, $orderBy: EndUserOrderBy) {
            ...EndUserList_endUsers @arguments(count: $count, filter: $filter, orderBy: $orderBy)
        }
    `;
    constructor(props) {
        super(props);
        if (isMobile) {
            const visible = true;
            props.showHideColumn("name", visible, this.MODEL_NAME);
        }
    }
}

export default withTranslation()(withRouter(SearchEndUser));
