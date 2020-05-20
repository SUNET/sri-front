import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Breadcrumbs from '../../components/Breadcrumbs';

const mockMath = Object.create(global.Math);
mockMath.random = () => {
  return 1;
};
global.Math = mockMath;

let BreadcrumbsWrapper;
let BreadcrumbsComponent;
const defaultProps = {
  isDetailsEntity: false,
  entityDetails: {},
  history: {
    location: {
      pathname: '/community/contacts',
    },
  },
};

const CreateBreadcrumbsWrapper = (props) => {
  const allProps = { ...defaultProps, ...props };
  return (
    <div>
      <Breadcrumbs {...allProps} />
    </div>
  );
};

const mountComponentNameWrapper = (props) => mount(<CreateBreadcrumbsWrapper {...props} />);

beforeEach(() => {
  jest.clearAllMocks();
});
afterEach(() => {
  BreadcrumbsWrapper.unmount();
});

describe('Some Component', () => {
  beforeEach(() => {
    BreadcrumbsWrapper = mountComponentNameWrapper();
    BreadcrumbsComponent = BreadcrumbsWrapper.find('Breadcrumbs');
  });
  it('Renders correctly', () => {
    expect(toJson(BreadcrumbsWrapper)).toMatchSnapshot();
    expect(BreadcrumbsComponent.find('.breadcrumbs')).toHaveLength(1);
  });
});
describe('Elements', () => {
  beforeEach(() => {
    BreadcrumbsWrapper = mountComponentNameWrapper({
      isDetailsEntity: true,
      entityDetails: {
        id: 'id-mock',
        name: 'name-mock',
      },
      history: {
        location: {
          pathname: '/community/contacts/id-mock',
        },
      },
    });
    BreadcrumbsComponent = BreadcrumbsWrapper.find('Breadcrumbs');
  });
  it('Appears Some Text in some context', () => {
    expect(toJson(BreadcrumbsWrapper)).toMatchSnapshot();
  });
});
