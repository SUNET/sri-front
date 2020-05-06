import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { Row, Col, Image } from 'react-bootstrap';
import moment from 'moment';

export class DashBoardContactRow extends React.PureComponent {
  formatDate = (dateString) => {
    let date = new Date(dateString);
    return moment(date)
      .locale('en')
      .fromNow();
  };

  renderLogo() {
    return (
      <Col className="dash-board-contact-row__image col-auto">
        <div>
          <Image src={require('../../static/img/profile.png')} roundedCircle img-fluid="true" />
        </div>
      </Col>
    );
  }
  renderContactInfo() {
    const { contact } = this.props;
    return (
      <Col className="px-0 dash-board-contact-row__contact-info">
        <div>
          <div className="dash-board-contact-row__contact-info__name">
            {contact.first_name} {contact.last_name}
          </div>
          {contact.roles && (
            <div className="help-text dash-board-contact-row__contact-info__roles">
              {contact.roles.map((role, index) => {
                return (
                  <span className="dash-board-contact-row__contact-info__roles__row" key={index}>
                    {role.end && (
                      <>
                        {role.name} - {role.end.name}
                      </>
                    )}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </Col>
    );
  }
  renderModifiedDate() {
    const { contact } = this.props;
    return (
      <Col className="col-md-auto dash-board-contact-row__modified_time">
        <span>{this.formatDate(contact.modified)}</span>
      </Col>
    );
  }
  render() {
    const { contact } = this.props;
    return (
      <article className="dash-board-contact-row" onClick={(e) => this.props.onClick(e, contact)}>
        <Row>
          {this.renderLogo()}
          {this.renderContactInfo()}
          {this.renderModifiedDate()}
        </Row>
      </article>
    );
  }
}

DashBoardContactRow.propTypes = {
  contact: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

const ContactRowFragment = createFragmentContainer(DashBoardContactRow, {
  contact: graphql`
    fragment DashBoardContactRow_contact on Contact {
      id
      first_name
      last_name
      modified
      roles {
        name
        end {
          name
        }
      }
      member_of_groups {
        name
      }
    }
  `,
});

export default ContactRowFragment;
