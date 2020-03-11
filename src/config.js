const dev = {
    API_HOST: window.location.protocol + "//ni.localenv.loc",
    COOKIE_DOMAIN: ".localenv.loc"
};
const prod = {
    API_HOST: window.location.protocol + "//ni.ed-integrations.com/",
    COOKIE_DOMAIN: ".integrations.com"
};
const config = process.env.NODE_ENV === "production" ? prod : dev;

export default {
    ...config,
    ITEMS_PER_PAGE: 10,
    ALL_ITEMS: 100000,
    LIMIT_NEW_CONTACTS: 20
};
