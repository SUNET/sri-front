import { connect } from 'react-redux';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import environment from '../createRelayEnvironment';
import DashBoardContactBlock from './contact/DashBoardContactBlock';
import GeneralSearchContainer from './generalSearch/GeneralSearch';
import DashBoardActivityLogNetworkBlock from './activityLogs/network/DashBoardActivityLogNetworkBlock';
import DashBoardActivityLogCommunityBlock from './activityLogs/community/DashBoardActivityLogCommunityBlock';

import '../style/query-renderer-spinner.scss';

const Home = (filterText) => (
  <section>
    <Col>
      <Row>
        {filterText && (
          <Col xl={12} lg={12} md={12} sm={12}>
            <GeneralSearchContainer environment={environment} />
          </Col>
        )}
      </Row>
      <Row>
        <Col xl={8} lg={8} md={6} sm={12}>
          <DashBoardActivityLogNetworkBlock environment={environment} />
          <DashBoardActivityLogCommunityBlock environment={environment} />
        </Col>
        <Col xl={4} lg={4} md={6} sm={12}>
          <DashBoardContactBlock environment={environment} />
        </Col>
      </Row>
    </Col>
  </section>
);
const mapStateToProps = (state) => {
  return {
    filterText: state.generalSearch.filter,
  };
};

const HomeContainer = connect(mapStateToProps)(Home);

export default withTranslation()(HomeContainer);
