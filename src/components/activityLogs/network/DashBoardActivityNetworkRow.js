import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import { Col, Image } from 'react-bootstrap';
import _DashBoardRowParentClass from '../../common/_DashBoardRowParentClass';

export class DashBoardActivityNetworkRow extends _DashBoardRowParentClass {
  constructor(props) {
    super(props);
    this.MAIN_PROP = 'log';
    this.TIME_PROP = 'timestamp';
  }

  renderInfo() {
    const element = this.props[this.MAIN_PROP];
    const { text, actorname, verb, action_object } = element;
    return (
      <>
        <Col className="px-0 dash-board-row__info">
          <div>
            <div className="dash-board-row__info__name">
              {`${actorname} ${verb} ${action_object.__typename} ${action_object.name}`}
            </div>
          </div>
        </Col>
      </>
    );
  }

  render() {
    const element = this.props[this.MAIN_PROP];
    return (
      <article className="dash-board-row" onClick={(e) => this.props.onClick(e, element)}>
        <div className="d-flex">
          {this.renderInfo()}
          {this.renderModifiedDate()}
        </div>
      </article>
    );
  }
}

DashBoardActivityNetworkRow.propTypes = {};

const ActivityNetworkRowFragment = createFragmentContainer(DashBoardActivityNetworkRow, {
  log: graphql`
    fragment DashBoardActivityNetworkRow_log on Action {
      id
      text
      actorname
      actor {
        id
        username
        first_name
        last_name
        email
      }
      verb
      action_object {
        id
        name
        __typename
      }
      target_object {
        id
        name
        __typename
      }
      description
      timestamp
    }
  `,
});

export default ActivityNetworkRowFragment;
