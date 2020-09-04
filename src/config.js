const PROTOCOL = window.location.protocol;
const API_HOST_SUFFIX = 'sri.localenv.loc/api';
const COOKIE_DOMAIN = 'sri.localenv.loc';
const SCHEMA_VERSION = 'common';

export default {
  API_HOST: `${PROTOCOL}//${API_HOST_SUFFIX}`,
  COOKIE_DOMAIN,
  SCHEMA_VERSION,
  ITEMS_PER_PAGE: 10,
  ALL_ITEMS: 100000,
  LIMIT_NEW_CONTACTS: 20,
};
