import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import CustomQueryRenderer from '../../components/CustomQueryRenderer';
import _DashBoardBlockParentClass from '../common/_DashBoardBlockParentClass';
import { ACTIVITY_LOGS_PARAMS } from '../../utils/constants';

const DashBoardActivityLogBlockQuery = graphql`
  query DashBoardActivityLogBlockQuery($filter: ActionFilter!, $orderBy: ActionOrderBy, $first: Int) {
    ...DashBoardActivityLogList_getContextActivity @arguments(filter: $filter, orderBy: $orderBy, first: $first)
  }
`;

class DashBoardActivityLogBlock extends _DashBoardBlockParentClass {
  constructor(props) {
    super(props);
    this.typeActivityLog = '';
    this.COMPONENT_LIST = CustomQueryRenderer;
    this.QUERY = DashBoardActivityLogBlockQuery;
    this.state = {
      orderBy: 'timestamp_DESC',
    };
  }

  handleChangeOrderBy = (event, type) => {
    let orderBy = '';
    if (type === 'getContextActivity') {
      if (event.target.checked) {
        orderBy = 'timestamp_ASC';
      } else {
        orderBy = 'timestamp_DESC';
      }
      this.setState({ orderBy: orderBy });
    }
  };

  renderListComponent(activityParams) {
    const { environment } = this.props;
    return (
      <this.COMPONENT_LIST
        environment={environment}
        query={this.QUERY}
        variables={{
          count: activityParams.maxNumberRows,
          orderBy: this.state.orderBy,
          filter: {
            context: activityParams.filterContext,
          },
          first: activityParams.maxNumberRows,
        }}
        errorMessage={this.props.t('general.error')}
        mainClass={this.MAIN_CLASS}
        componentToRender={{
          Component: this.DASH_BOARD_LIST_COMPONENT,
          mainProps: ['getContextActivity'],
          componentProps: {
            changeOrderBy: this.handleChangeOrderBy,
            orderBy: this.state.orderBy,
            typeActivityLog: this.typeActivityLog,
          },
        }}
      />
    );
  }

  render() {
    return this.renderListComponent(ACTIVITY_LOGS_PARAMS[this.typeActivityLog]);
  }
}

export default DashBoardActivityLogBlock;
