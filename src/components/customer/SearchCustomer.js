import _SearchEntityParentClass from "../common/_SearchEntityParentClass";

// React imports
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";

// GraphQL imports
import graphql from "babel-plugin-relay/macro";

// Components imports
import CustomerList from "../../containers/customer/CustomerList";
import CustomerDetailsContainer from "../../containers/customer/CustomerDetails";
// Constants

class SearchCustomer extends _SearchEntityParentClass {
    LIST_CONTAINER = CustomerList;
    CREATE_COMPONENT = undefined;
    DETAIL_CONTAINER = CustomerDetailsContainer;

    MODEL_NAME = "customer";
    MODEL_LIST_NAME = "customers";

    PATH_ENTITY = "/network/customers";
    PATH_ENTITY_ID = "customerId";
    DEFAULT_COLUMNS = [
        { name: "Name", value: "name", filter: "order" },
        { name: "URL", value: "url" },
        { name: "Description", value: "description", filter: "order" }
    ];
    LIST_QUERY = graphql`
        query SearchCustomerAllQuery($count: Int!, $filter: CustomerFilter, $orderBy: CustomerOrderBy) {
            ...CustomerList_customers @arguments(count: $count, filter: $filter, orderBy: $orderBy)
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

export default withTranslation()(withRouter(SearchCustomer));
