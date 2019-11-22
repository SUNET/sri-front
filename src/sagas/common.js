import Cookies from "js-cookie";

export const ajaxHeaders = {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
    "Accept-Encoding": "gzip,deflate",
    "X-Requested-With": "XMLHttpRequest",
    "X-CSRFToken": Cookies.get("csrftoken")
};

export const putRequest = {
    method: "put",
    redirect: "manual",
    credentials: "include",
    headers: ajaxHeaders
};

export const postRequest = {
    method: "post",
    redirect: "manual",
    credentials: "include",
    headers: ajaxHeaders
};

export const getRequest = {
    method: "get",
    redirect: "manual",
    credentials: "include",
    headers: ajaxHeaders
};

export const checkStatus = function(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        throw new Error(response.statusText);
    }
};
