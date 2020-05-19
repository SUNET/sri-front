import React from 'react';
import { withTranslation } from 'react-i18next';
import graphql from 'babel-plugin-relay/macro';
import DashBoardContactList from './DashBoardContactList';
import CustomQueryRenderer from '../../components/CustomQueryRenderer';
import _DashBoardBlockParentClass from '../common/_DashBoardBlockParentClass';

const DashBoardContactBlockQuery = graphql`
  query DashBoardContactBlockQuery($count: Int!, $orderBy: ContactOrderBy) {
    ...DashBoardContactList_contacts @arguments(count: $count, orderBy: $orderBy)
  }
`;

class DashBoardContactBlock extends _DashBoardBlockParentClass {
  constructor(props) {
    super(props);
    this.COMPONENT_LIST = CustomQueryRenderer;
    this.QUERY = CustomQueryRenderer;
    this.state = {
      orderBy: 'modified_DESC',
    };
  }

  handleChangeOrderBy = (event, type) => {
    let orderBy = '';
    if (type === 'contacts') {
      if (event.target.checked) {
        orderBy = 'modified_ASC';
      } else {
        orderBy = 'modified_DESC';
      }
      this.setState({ orderBy: orderBy });
    }
  };

  renderListComponent() {
    const { environment } = this.props;
    return (
      <this.COMPONENT_LIST
        environment={environment}
        query={DashBoardContactBlockQuery}
        variables={{
          count: this.NUMBER_MAX_ROWS,
          orderBy: this.state.orderBy,
        }}
        errorMessage={this.props.t('general.error')}
        mainClass={this.MAIN_CLASS}
        componentToRender={{
          Component: DashBoardContactList,
          mainProps: ['contacts'],
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

export default withTranslation()(DashBoardContactBlock);
