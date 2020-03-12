let api_host_suffix = process.env.API_HOST ? process.env.API_HOST : "//ni.localenv.loc";
let cookie_domain = process.env.COOKIE_DOMAIN ? process.env.COOKIE_DOMAIN : ".localenv.loc";
const config = {
    API_HOST: window.location.protocol + api_host_suffix,
    COOKIE_DOMAIN: cookie_domain
};

export default {
    ...config,
    ITEMS_PER_PAGE: 10,
    ALL_ITEMS: 100000,
    LIMIT_NEW_CONTACTS: 20
};
