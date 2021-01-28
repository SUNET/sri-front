const PROTOCOL = window.location.protocol;
const API_HOST_SUFFIX = '__API_HOST__';
const COOKIE_DOMAIN = '__COOKIE_DOMAIN__';
const SCHEMA_VERSION = '__SCHEMA_VERSION__';
const LOGIN_URL = '__LOGIN_URL__';
const IS_SUNET_VERSION = SCHEMA_VERSION === 'sunet';
const IS_NORDUNI_VERSION = SCHEMA_VERSION === 'norduni';

export default {
  API_HOST: `${PROTOCOL}//${API_HOST_SUFFIX}`,
  COOKIE_DOMAIN,
  SCHEMA_VERSION,
  LOGIN_URL,
  ITEMS_PER_PAGE: 10,
  ALL_ITEMS: 100000,
  LIMIT_NEW_CONTACTS: 20,
  IS_SUNET_VERSION,
  IS_NORDUNI_VERSION,
};
