export const addRow = (index) => {
    return {
        type: "ADD_ROW",
        index
    };
};

export const saveRow = (index) => {
    return {
        type: "SAVE_ROW",
        index
    };
};

export const editRow = (index) => {
    return {
        type: "EDIT_ROW",
        index
    };
};

export const removeRow = (index) => {
    return {
        type: "REMOVE_ROW",
        index
    };
};
