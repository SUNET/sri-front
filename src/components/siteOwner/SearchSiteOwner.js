import _SearchEntityParentClass from "../common/_SearchEntityParentClass";

// React imports
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";

// GraphQL imports
import graphql from "babel-plugin-relay/macro";

// Components imports
import SiteOwnerList from "../../containers/siteOwner/SiteOwnerList";
import SiteOwnerDetailsContainer from "../../containers/siteOwner/SiteOwnerDetails";
import CreateSiteOwnerRoute from "./CreateSiteOwnerRoute/CreateSiteOwnerRoute";
// Constants

class SearchSiteOwner extends _SearchEntityParentClass {
    LIST_CONTAINER = SiteOwnerList;
    CREATE_COMPONENT = CreateSiteOwnerRoute;
    DETAIL_CONTAINER = SiteOwnerDetailsContainer;

    MODEL_NAME = "siteOwner";
    MODEL_LIST_NAME = "siteOwners";

    PATH_ENTITY = "/network/site-owners";
    PATH_ENTITY_ID = "siteOwnerId";
    DEFAULT_COLUMNS = [
        { name: "Name", value: "name", filter: "order" },
        { name: "URL", value: "url" },
        { name: "Description", value: "description", filter: "order" }
    ];
    LIST_QUERY = graphql`
        query SearchSiteOwnerAllQuery($count: Int!, $filter: SiteOwnerFilter, $orderBy: SiteOwnerOrderBy) {
            ...SiteOwnerList_siteOwners @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchSiteOwner));
