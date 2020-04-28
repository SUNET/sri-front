import React from 'react';
import { mount } from 'enzyme';
import { GroupRow } from '../../../components/group/GroupRow';

let RowGroupWrapper;
const defaultProps = {
  group: {
    id: 'R3JvdXA6MjczOQ==',
    name: 'refac211111e',
    description: 'refac21e',
  },
  columns_visible: {},
  columnsVisible: {},
  showAllColumns: true,
  onClick: jest.fn(),
};

const CreateRowWrapper = (props) => {
  const allProps = { ...defaultProps, ...props };
  return (
    <div>
      <table>
        <tbody>
          <GroupRow {...allProps} />
        </tbody>
      </table>
    </div>
  );
};

const mountRowWrapper = (props) => mount(<CreateRowWrapper {...props} />);

beforeEach(() => {
  RowGroupWrapper = mountRowWrapper();
});
afterEach(() => {
  RowGroupWrapper.unmount();
});

describe('Row Group Component', () => {
  it('Render Row Component', () => {
    const tdElements = RowGroupWrapper.find('td');
    expect(RowGroupWrapper.find('tr').length).toBe(1);
    expect(tdElements.length).toBe(3);
    expect(RowGroupWrapper.find('[data-name="name"]').length).toBe(1);
    expect(RowGroupWrapper.find('[data-name="description"]').length).toBe(1);
    expect(RowGroupWrapper.find('[data-name="empty-for-space"]').length).toBe(1);
  });
  it('Render Row only name', () => {
    const RowWrapperNewProps = mountRowWrapper({
      columnsVisible: {
        name: true,
      },
      showAllColumns: false,
    });
    expect(RowWrapperNewProps.find('td').length).toBe(2);
    expect(RowWrapperNewProps.find('[data-name="name"]').length).toBe(1);
    expect(RowWrapperNewProps.find('[data-name="description"]').length).toBe(0);
    expect(RowGroupWrapper.find('[data-name="empty-for-space"]').length).toBe(1);
  });
  it('Render Row only description', () => {
    const RowWrapperNewProps = mountRowWrapper({
      columnsVisible: {
        description: true,
      },
      showAllColumns: false,
    });
    expect(RowWrapperNewProps.find('td').length).toBe(2);
    expect(RowWrapperNewProps.find('[data-name="name"]').length).toBe(0);
    expect(RowWrapperNewProps.find('[data-name="description"]').length).toBe(1);
    expect(RowGroupWrapper.find('[data-name="empty-for-space"]').length).toBe(1);
  });
  it('Click in row calls the onClickProps', () => {
    const rowElement = RowGroupWrapper.find('tr');
    rowElement.simulate('click');
    expect(defaultProps.onClick.mock.calls.length).toBe(1);
  });
});
