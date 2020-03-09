import _SearchEntityParentClass from "../common/_SearchEntityParentClass";

// React imports
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";

// GraphQL imports
import graphql from "babel-plugin-relay/macro";

// Components imports
import ProviderList from "../../containers/provider/ProviderList";

// Constants

class SearchProvider extends _SearchEntityParentClass {
    LIST_CONTAINER = ProviderList;
    CREATE_COMPONENT = undefined;
    DETAIL_CONTAINER = undefined;

    MODEL_NAME = "provider";
    MODEL_LIST_NAME = "providers";

    PATH_ENTITY = "/network/providers";
    PATH_ENTITY_ID = "";
    DEFAULT_COLUMNS = [
        { name: "Name", value: "name", filter: "order" },
        { name: "URL", value: "url" },
        { name: "Description", value: "description", filter: "order" }
    ];
    LIST_QUERY = graphql`
        query SearchProviderAllQuery($count: Int!, $filter: ProviderFilter, $orderBy: ProviderOrderBy) {
            ...ProviderList_providers @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchProvider));
