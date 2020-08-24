import React from 'react';
import { withTranslation } from 'react-i18next';
import graphql from 'babel-plugin-relay/macro';
import DashBoardGeneralSearchList from './DashBoardGeneralSearchList';
import CustomQueryRenderer from '../../components/CustomQueryRenderer';
import _DashBoardBlockParentClass from '../common/_DashBoardBlockParentClass';

const DashBoardGeneralSearchBlockQuery = graphql`
  query DashBoardGeneralSearchBlockQuery($filter: GenericFilter) {
    ...DashBoardGeneralSearchList_search_generalsearch
  }
`;

class DashBoardGeneralSearchBlock extends _DashBoardBlockParentClass {
  constructor(props) {
    super(props);
    this.COMPONENT_LIST = CustomQueryRenderer;
    this.state = {};
  }

  handleChangeOrderBy = (event, type) => {};

  renderListComponent() {
    const { environment } = this.props;
    return (
      <this.COMPONENT_LIST
        environment={environment}
        query={DashBoardGeneralSearchBlockQuery}
        variables={{
          filter: {
            query: this.props.filter,
          },
        }}
        errorMessage={this.props.t('general/error')}
        mainClass={this.MAIN_CLASS}
        componentToRender={{
          Component: DashBoardGeneralSearchList,
          mainProps: ['search_generalsearch'],
          componentProps: {
            filterText: this.props.filter,
            onClickDetails: this.props.onClickDetails,
          },
        }}
      />
    );
  }

  render() {
    return this.renderListComponent();
    // return <div>GENERAL LIST!!!!</div>;
  }
}

export default withTranslation()(DashBoardGeneralSearchBlock);
