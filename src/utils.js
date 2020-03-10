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
        url = "http://" + url;
    }
    return url;
};
