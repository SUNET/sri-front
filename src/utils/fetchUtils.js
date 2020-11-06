import CONFIG from '../config';

const { API_HOST, LOGIN_URL } = CONFIG;

const urlWhoAmi = `${API_HOST}/userprofile/whoami/`;
const urlUpdateProfile = `${API_HOST}/api/v1/userprofile/`;
const urlLogin = `${API_HOST}${LOGIN_URL}`;

export default async function requestWhoami() {
  try {
    console.log('Getting user id from', urlWhoAmi);
    return await getRequest(urlWhoAmi);
  } catch (error) {
    console.log('Error getting user id', error);
    redirectToLogin();
  }
}

export async function updateProfile(newProfileData) {
  return await putRequest(`${urlUpdateProfile}${newProfileData.id}/`, newProfileData);
}

export async function getCsrfToken() {
  const response = await fetch(`${API_HOST}/csrf/`, {
    credentials: 'include',
  });
  const data = await response.json();
  return data.csrfToken;
}

export function redirectToLogin() {
  document.location.href = urlLogin;
}

async function getRequest(url) {
  return window
    .fetch(url, { ...(await getGetConfig()) })
    .then(checkStatus)
    .then((response) => response.json());
}

// async function postRequest(url, data) {
//   const postConfig = await getPostRequest();
//   return window
//     .fetch(url, {
//       ...postConfig,
//       body: JSON.stringify(data),
//     })
//     .then(checkStatus)
//     .then((response) => response.json());
// }

async function putRequest(url, data) {
  const putConfig = await getPutConfig();
  return window
    .fetch(url, {
      ...putConfig,
      body: JSON.stringify(data),
    })
    .then(checkStatus)
    .then((response) => ({ success: true }));
}

async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    console.log('SCHEMA_VERSION: ', CONFIG.SCHEMA_VERSION);
    return response;
  }
  fetch(`${API_HOST}${CONFIG.LOGIN_URL}`, {
    method: 'GET',
  }).then((response) => {
    document.location.href = response.url;
  });
  throw new Error(response.statusText);
}

async function getHeaders() {
  return {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    'Accept-Encoding': 'gzip,deflate',
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRFToken': await getCsrfToken(),
  };
}

async function getPutConfig() {
  return {
    method: 'put',
    redirect: 'manual',
    credentials: 'include',
    headers: await getHeaders(),
  };
}

// async function getPostRequest() {
//   return {
//     method: 'post',
//     redirect: 'manual',
//     credentials: 'include',
//     headers: await getHeaders(),
//   };
// }

async function getGetConfig() {
  return {
    method: 'get',
    redirect: 'manual',
    credentials: 'include',
    headers: await getHeaders(),
  };
}
