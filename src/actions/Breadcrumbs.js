export const MOVE_TO_DETAILS = 'MOVE_TO_DETAILS';
export const GET_OUT_OF_DETAILS = 'GET_OUT_OF_DETAILS';

export function moveToDetails(detailsEntity) {
  return {
    type: MOVE_TO_DETAILS,
    payload: {
      detailsEntity,
    },
  };
}

export function getOutOfDetails() {
  return {
    type: GET_OUT_OF_DETAILS,
  };
}
