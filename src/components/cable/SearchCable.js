import _SearchEntityParentClass from "../common/_SearchEntityParentClass";

// React imports
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";

// GraphQL imports
import graphql from "babel-plugin-relay/macro";

// Components imports
import CableList from "../../containers/cable/CableList";
import CableDetailsContainer from "../../containers/cable/CableDetails";
import CreateCable from "./CreateCable";
// Constants

class SearchCable extends _SearchEntityParentClass {
    LIST_CONTAINER = CableList;
    CREATE_COMPONENT = CreateCable;
    DETAIL_CONTAINER = CableDetailsContainer;

    MODEL_NAME = "cable";
    MODEL_LIST_NAME = "cables";

    PATH_ENTITY = `/network/cables`;
    PATH_ENTITY_ID = "cableId";
    DEFAULT_COLUMNS = [
        { name: "Name", value: "name", filter: "order" },
        { name: "Cable Type", value: "cable_type" },
        { name: "Description", value: "description", filter: "order" }
    ];
    LIST_QUERY = graphql`
        query SearchCableAllQuery($count: Int!, $filter: CableFilter, $orderBy: CableOrderBy) {
            ...CableList_cables @arguments(count: $count, filter: $filter, orderBy: $orderBy)
        }
    `;
    constructor(props) {
        console.log('props: ', props);
        super(props);
        if (isMobile) {
            const visible = true;
            props.showHideColumn("name", visible, this.MODEL_NAME);
        }
    }
}

export default withTranslation()(withRouter(SearchCable));
