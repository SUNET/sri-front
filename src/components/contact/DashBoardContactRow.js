import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import { Col, Image } from 'react-bootstrap';
import _DashBoardRowParentClass from '../common/_DashBoardRowParentClass';

export class DashBoardContactRow extends _DashBoardRowParentClass {
  constructor(props) {
    super(props);
    this.MAIN_PROP = 'contact';
    this.TIME_PROP = 'modified';
  }

  renderInfo() {
    const element = this.props[this.MAIN_PROP];
    return (
      <>
        <Col className="dash-board-row__image col-auto">
          <div>
            <Image src={require('../../static/img/profile.png')} roundedCircle img-fluid="true" />
          </div>
        </Col>
        <Col className="px-0 dash-board-row__info">
          <div>
            <div className="dash-board-row__info__name">
              {element.first_name} {element.last_name}
            </div>
            {element.roles && (
              <div className="help-text dash-board-row__info__roles">
                {element.roles.map((role, index) => {
                  return (
                    <span className="dash-board-row__info__roles__row" key={index}>
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
      </>
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
