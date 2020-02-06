import types from '../types/componentFormRow';

export const showNewContactForm = () => {
    return {
        type: types.SHOW_NEW_CONTACT_FORM
    };
};

export const hideNewContactForm = () => {
    return {
        type: types.HIDE_NEW_CONTACT_FORM
    };
};

// export const saveNewContact = (index) => {
//     return {
//         type: "SAVE_ROW",
//         index
//     };
// };

// export const editContact = (index) => {
//     return {
//         type: "EDIT_ROW",
//         index
//     };
// };
