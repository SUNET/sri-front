import React from 'react';
import { withTranslation } from 'react-i18next';
import graphql from 'babel-plugin-relay/macro';
import DashBoardActivityNetworkList from './DashBoardActivityNetworkList';
import CustomQueryRenderer from '../../../components/CustomQueryRenderer';
import _DashBoardBlockParentClass from '../../common/_DashBoardBlockParentClass';

const DashBoardActivityNetworkBlockQuery = graphql`
  query DashBoardActivityNetworkBlockQuery($filter: ActionFilter!, $orderBy: ActionOrderBy, $first: Int) {
    ...DashBoardActivityNetworkList_getContextActivity @arguments(filter: $filter, orderBy: $orderBy, first: $first)
  }
`;

class DashBoardActivityNetworkBlock extends _DashBoardBlockParentClass {
  constructor(props) {
    super(props);
    this.COMPONENT_LIST = CustomQueryRenderer;
    this.QUERY = CustomQueryRenderer;
    this.state = {
      orderBy: 'timestamp_DESC',
      filter: {
        context: 'Network',
      },
      first: 3,
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

  renderListComponent() {
    const { environment } = this.props;
    return (
      <this.COMPONENT_LIST
        environment={environment}
        query={DashBoardActivityNetworkBlockQuery}
        variables={{
          count: this.NUMBER_MAX_ROWS,
          orderBy: this.state.orderBy,
          filter: {
            context: 'Network',
          },
          first: 3,
        }}
        errorMessage={this.props.t('general.error')}
        mainClass={this.MAIN_CLASS}
        componentToRender={{
          Component: DashBoardActivityNetworkList,
          mainProps: ['getContextActivity'],
          componentProps: {
            changeOrderBy: this.handleChangeOrderBy,
            orderBy: this.state.orderBy,
          },
        }}
      />
    );
  }

  render() {
    return this.renderListComponent();
  }
}

export default withTranslation()(DashBoardActivityNetworkBlock);
