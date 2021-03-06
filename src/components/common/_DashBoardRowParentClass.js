import React from 'react';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return moment(date)
    .locale('en')
    .fromNow();
};

class _DashBoardRowParentClass extends React.Component {
  constructor(props) {
    super(props);
    this.MAIN_PROP = '';
    this.TIME_PROP = '';
  }

  renderInfo() {
    return <div>This method should be overwritten in the child class</div>;
  }

  renderModifiedDate() {
    const element = this.props[this.MAIN_PROP];
    return (
      <Col className="col-md-auto dash-board-row__modified_time">
        <span>{formatDate(element[this.TIME_PROP])}</span>
      </Col>
    );
  }

  render() {
    const element = this.props[this.MAIN_PROP];
    return (
      <article className="dash-board-row" onClick={(e) => this.props.onClick(e, element)}>
        <Row>
          {this.renderInfo()}
          {this.renderModifiedDate()}
        </Row>
      </article>
    );
  }
}

export default _DashBoardRowParentClass;
