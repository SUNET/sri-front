import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Cookies from 'js-cookie';
import { Logout } from '../../components/Logout';

let LogoutWrapper;
let LogoutComponent;

const CreateLogoutWrapper = () => {
  return (
    <div>
      <Logout />
    </div>
  );
};

const mountLogoutWrapper = (props) => mount(<CreateLogoutWrapper {...props} />);

beforeEach(() => {
  jest.clearAllMocks();
  LogoutWrapper = mountLogoutWrapper();
  LogoutComponent = LogoutWrapper.find('Logout');
  delete window.location;
  window.location = { replace: jest.fn() };
  Cookies.remove = jest.fn();
});
afterEach(() => {
  LogoutWrapper.unmount();
});

describe('Logout', () => {
  it('Renders correctly', () => {
    expect(toJson(LogoutWrapper)).toMatchSnapshot();
    expect(LogoutComponent.find('.icon-logout')).toHaveLength(1);
  });
});

describe('Actions', () => {
  it('Click in Logout', () => {
    LogoutComponent.simulate('click');
    expect(window.location.replace).toHaveBeenCalled();
    expect(Cookies.remove).toHaveBeenCalled();
  });
});
