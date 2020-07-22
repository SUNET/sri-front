let api_host_suffix = "__API_HOST__";
let cookie_domain = "__COOKIE_DOMAIN__";
const config = {
    API_HOST: window.location.protocol + '//' + api_host_suffix,
    COOKIE_DOMAIN: cookie_domain
};

export default {
    ...config,
    ITEMS_PER_PAGE: 10,
    ALL_ITEMS: 100000,
    LIMIT_NEW_CONTACTS: 20
};
