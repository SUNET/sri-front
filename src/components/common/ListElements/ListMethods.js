import CONFIG from '../../../config';

const { ITEMS_PER_PAGE, ALL_ITEMS } = CONFIG;

const loadMore = (type, listElement) => {
  let itemsPerLoad = ITEMS_PER_PAGE;
  if (type === 'all') {
    itemsPerLoad = ALL_ITEMS;
  }
  if (!listElement.props.relay.hasMore()) {
    return;
  } else if (listElement.props.relay.isLoading()) {
    return;
  }
  listElement.countRows = listElement.countRows + itemsPerLoad;

  listElement.props.changeCount(listElement.countRows);
  listElement.props.relay.refetchConnection(listElement.countRows, null, { filter: listElement.props.currentFilters });
};

const loadLess = (listElement) => {
  listElement.countRows = ITEMS_PER_PAGE;
  listElement.props.changeCount(listElement.countRows);
  listElement.props.relay.refetchConnection(listElement.countRows, null, { filter: listElement.props.currentFilters });
};

export default {
  loadMore,
  loadLess,
};
