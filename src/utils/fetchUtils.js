import CONFIG from '../config';

const { API_HOST, LOGIN_URL } = CONFIG;

const urlWhoAmi = `${API_HOST}/userprofile/whoami/`;
const urlUpdateProfile = `${API_HOST}/api/v1/userprofile/`;
const urlLogin = `${API_HOST}${LOGIN_URL}`;

export default async function requestWhoami() {
  try {
    console.log('Getting user id from', urlWhoAmi);
    const user = await getRequest(urlWhoAmi);
    console.log('user: ', user);
    return user;
  } catch (error) {
    console.log('Error getting user id', error);
    redirectToLogin();
  }
}

export async function updateProfile(newProfileData) {
  console.log('newProfileData: ', newProfileData);
  const updatedProfile = await putRequest(urlUpdateProfile, newProfileData);
  console.log('updatedProfile: ', updatedProfile);
  // const data = {
  //   email: state.app.user.email,
  //   display_name: state.app.user.display_name,
  //   landing_page: state.app.user.landing_page,
  //   id: state.app.user.userid,
  //   user_id: state.app.user.userid,
  //   view_community: state.app.user.view_community,
  //   view_network: state.app.user.view_network,
  //   view_services: state.app.user.view_services,
  // };
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
  const postConfig = await getPutConfig();
  return window
    .fetch(url, {
      ...postConfig,
      body: JSON.stringify(data),
    })
    .then(checkStatus)
    .then((response) => response.json());
}

async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    console.log('SCHEMA_VERSION: ', CONFIG.SCHEMA_VERSION);
    return response;
  }
  fetch(`${API_HOST}${CONFIG.LOGIN_URL}`, {
    method: 'GET',
  }).then((response) => {
    console.log('response: ', response);
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

async function getPostRequest() {
  return {
    method: 'post',
    redirect: 'manual',
    credentials: 'include',
    headers: await getHeaders(),
  };
}

async function getGetConfig() {
  return {
    method: 'get',
    redirect: 'manual',
    credentials: 'include',
    headers: await getHeaders(),
  };
}
