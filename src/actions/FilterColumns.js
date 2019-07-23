export const showHideColumn = (column, visible) => {
    return {
        type: "SHOW_HIDE_COLUMN",
        column,
        visible
    };
};

export const showAllColumns = (columns) => {
    return {
        type: "SHOW_ALL_COLUMNS",
        columns
    };
};
