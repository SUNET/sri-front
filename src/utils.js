import { AFFILIATION_ORGANIZATION_NAMES } from './utils/constants';

export const isEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

export const debounce = (fn, time) => {
  let timeout;

  return function() {
    const functionCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

export const generateURL = (url) => {
  if (!/^(?:f|ht)tps?:\/\//.test(url)) {
    url = 'http://' + url;
  }
  return url;
};

export const formatAffiliationOrganizationData = (organizationData) => {
  let formatOrganizationData = Object.assign({}, organizationData);
  let affiliationArray = [];
  Object.keys(AFFILIATION_ORGANIZATION_NAMES).forEach((affiliation) => {
    if (organizationData[affiliation]) {
      affiliationArray.push(AFFILIATION_ORGANIZATION_NAMES[affiliation]);
    }
  });
  formatOrganizationData.affiliationFormatted = affiliationArray.join(', ');
  return formatOrganizationData;
};

export const camelize = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};

export const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
