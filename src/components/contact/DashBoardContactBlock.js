import React from 'react';
import { withTranslation } from 'react-i18next';
import graphql from 'babel-plugin-relay/macro';
import DashBoardContactList from './DashBoardContactList';
import CustomQueryRenderer from '../../components/CustomQueryRenderer';

const DashBoardContactBlockQuery = graphql`
  query DashBoardContactBlockQuery($count: Int!, $orderBy: ContactOrderBy) {
    ...DashBoardContactList_contacts @arguments(count: $count, orderBy: $orderBy)
  }
`;

class DashBoardContactBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderBy: 'modified_DESC',
      count: 6,
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

  render() {
    const { environment } = this.props;
    return (
      <CustomQueryRenderer
        environment={environment}
        query={DashBoardContactBlockQuery}
        variables={{
          count: this.state.count,
          orderBy: this.state.orderBy,
        }}
        errorMessage={this.props.t('general.error')}
        mainClass="dashboard-block"
        componentToRender={{
          Component: DashBoardContactList,
          mainProps: ['contacts'],
          componentProps: {
            title: this.props.title,
            changeOrderBy: this.handleChangeOrderBy,
            orderBy: this.state.orderBy,
            footer: this.props.footer,
          },
        }}
      />
    );
  }
}

export default withTranslation()(DashBoardContactBlock);
