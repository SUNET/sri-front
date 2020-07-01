import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { DashBoardContactRow } from '../../../components/contact/DashBoardContactRow';

let DashBoardContactRowWrapper;
let DashBoardContactRowComponent;

const FIRST_NAME = 'Nonnah';
const LAST_NAME = 'Bottini';
const ROLE = 'Senior Editor';
const ORG = 'Tavu';
const MODIFIED_DATE_STRING = '2020-05-05T14:53:50.620447+00:00';
const SINCE_TIME_STRING = '18 hours ago';
const defaultProps = {
  onClick: jest.fn(),
  contact: {
    id: 'Q29udGFjdDo4NTU=',
    first_name: FIRST_NAME,
    last_name: LAST_NAME,
    modified: MODIFIED_DATE_STRING,
    roles: [
      {
        name: ROLE,
        end: {
          name: ORG,
        },
      },
    ],
    member_of_groups: [],
  },
};

jest.mock('moment', () => {
  const mMoment = {
    locale: jest.fn().mockReturnThis(),
    fromNow: () => '18 hours ago',
  };
  return jest.fn(() => mMoment);
});

const CreateDashBoardContactRowWrapper = (props) => {
  const allProps = { ...defaultProps, ...props };
  return (
    <div>
      <DashBoardContactRow {...allProps} />
    </div>
  );
};

const mountDashBoardContactRowWrapper = (props) => mount(<CreateDashBoardContactRowWrapper {...props} />);

beforeEach(() => {
  jest.clearAllMocks();
  DashBoardContactRowWrapper = mountDashBoardContactRowWrapper();
  DashBoardContactRowComponent = DashBoardContactRowWrapper.find('DashBoardContactRow');
});
afterEach(() => {
  DashBoardContactRowWrapper.unmount();
});

describe('DashBoardContactRow Component', () => {
  it('Renders correctly', () => {
    expect(toJson(DashBoardContactRowWrapper)).toMatchSnapshot();
    expect(DashBoardContactRowComponent.find('.dash-board-row')).toHaveLength(1);
  });
});
describe('Elements', () => {
  it('Appears Logo Contact in fist COL', () => {
    const wrapper = DashBoardContactRowComponent.find('.dash-board-row');
    const logoContainer = wrapper.find('.dash-board-row__image.col');
    expect(logoContainer).toHaveLength(1);
    const imgElement = logoContainer.find('img');
    expect(imgElement.prop('src')).toBe('profile.png');
  });
  it('Appears First Name and Last Name', () => {
    const wrapperCol = DashBoardContactRowComponent.find('.dash-board-row__info');
    const nameElement = wrapperCol.find('.dash-board-row__info__name');
    expect(nameElement).toHaveLength(1);
    expect(nameElement.text()).toEqual(`${FIRST_NAME} ${LAST_NAME}`);
  });
  it('Appears Role and Organization', () => {
    const wrapperCol = DashBoardContactRowComponent.find('.dash-board-row__info__roles');
    const rolesElements = wrapperCol.find('.dash-board-row__info__roles__row');
    expect(rolesElements).toHaveLength(1);
    expect(rolesElements.find('span').text()).toEqual(`${ROLE} - ${ORG}`);
  });
  it('Appears time since modification', () => {
    const wrapperCol = DashBoardContactRowComponent.find('div.dash-board-row__modified_time');
    expect(wrapperCol).toHaveLength(1);
    expect(wrapperCol.find('div').text()).toEqual(`${SINCE_TIME_STRING}`);
  });
});

describe('Events', () => {
  it('When we click it launches the right method', () => {
    const wrapper = DashBoardContactRowComponent.find('.dash-board-row');
    wrapper.simulate('click');
    expect(defaultProps.onClick.mock.calls).toHaveLength(1);
  });
});
