import types from '../types/componentFormRow';

export const showNewContactForm = () => {
  return {
    type: types.SHOW_NEW_CONTACT_FORM,
  };
};

export const showContactDetailForm = (contactId) => {
  return {
    type: types.SHOW_CONTACT_DETAIL_FORM,
    payload: {
      contact_details_id: contactId,
    },
  };
};

export const hideNewContactForm = () => {
  return {
    type: types.HIDE_NEW_CONTACT_FORM,
  };
};

export const deleteContact = (contactId) => ({
  type: types.DELETE_CONTACT,
  payload: {
    contact_removed_id: contactId,
  },
});

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
