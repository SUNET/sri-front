import { connect } from 'react-redux';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import environment from '../createRelayEnvironment';

import DashBoardContactBlock from './contact/DashBoardContactBlock';

import GeneralSearchContainer from './generalSearch/GeneralSearch';

import DashBoardActivityNetworkBlock from './activityLogs/network/DashBoardActivityNetworkBlock';

import '../style/query-renderer-spinner.scss';

const Home = (filterText) => (
  <section>
    <Row>
      {filterText && (
        <Col xl={12} lg={12} md={12} sm={12}>
          <GeneralSearchContainer environment={environment} />
        </Col>
      )}
      <Col xl={8} lg={8} md={6} sm={12}>
        <DashBoardActivityNetworkBlock environment={environment} />
      </Col>
      <Col xl={4} lg={4} md={6} sm={12}>
        <DashBoardContactBlock environment={environment} />
      </Col>
    </Row>
  </section>
);
const mapStateToProps = (state, props) => {
  return {
    filterText: state.generalSearch.filter,
  };
};

const HomeContainer = connect(mapStateToProps)(Home);

export default withTranslation()(HomeContainer);
