let api_host_suffix = process.env.REACT_APP_API_HOST ? process.env.REACT_APP_API_HOST : "sri.localenv.loc/api";
let cookie_domain = process.env.REACT_APP_COOKIE_DOMAIN ? process.env.REACT_APP_COOKIE_DOMAIN : "sri.localenv.loc";
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
