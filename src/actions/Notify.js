
export const NEW = 'NEW_NOTIFICATION';
export const RM = 'RM_NOTIFICATION';
export const RM_ALL = 'RM_ALL_NOTIFICATION';

export function notify (msg, level, values=null) {
  return {
    type: NEW,
    payload: {
      msg: msg,
      level: level,
      values: values
    }
  };
}

export function rmNotification () {
  return {
    type: RM,
  };
}

export function rmAllNotifications () {
  return {
    type: RM_ALL
  };
}
