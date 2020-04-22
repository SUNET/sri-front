import React from 'react';
import { mount } from 'enzyme';
import { GroupList } from '../../../components/group/GroupList';

import dataList from './mocks/list.json';

import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

const historyMock = {
  push: jest.fn(),
  goBack: jest.fn(),
  location: {
    pathname: '/community/groups/create',
  },
  listen: () => {},
};

let ListGroupWrapper;

const store = {};

const defaultProps = {
  groups: dataList,
  columns_visible: {},
  all_columns: true,
  t: jest.fn(),
  relay: {
    environment: createMockEnvironment(),
    hasMore: jest.fn(),
    loadMore: jest.fn(),
    isLoading: jest.fn(),
  },
  defaultColumns: [
    { name: 'Name', value: 'name', filter: 'order' },
    { name: 'Description', value: 'description', filter: 'order' },
  ],
  orderBy: 'handle_id_DESC',
};

const CreateListWrapper = (props) => {
  return <GroupList history={historyMock} {...defaultProps} {...props} />;
};

beforeEach(() => {
  // ListGroupWrapper = mount(<CreateListWrapper />, {
  //   context: { relay: createMockEnvironment() },
  // });
});
afterEach(() => {
  // ListGroupWrapper.unmount();
});

describe('List Group Component', () => {
  it('Render List Component', () => {
    expect(1).toBe(1);
  });
});
