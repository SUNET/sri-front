export const showHideColumn = (column, visible, model) => {
  return {
    type: 'SHOW_HIDE_COLUMN',
    column,
    visible,
    model,
  };
};

export const showAllColumns = (columns, model) => {
  return {
    type: 'SHOW_ALL_COLUMNS',
    columns,
    model,
  };
};

export const cancelFilterColumns = (columns, model) => {
  return {
    type: 'CANCEL_FILTER_COLUMNS',
    columns,
    model,
  };
};
