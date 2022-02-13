import axios from "axios";

axios.defaults.headers["Content-Type"] = "application/json";

//config interceptors
axios.interceptors.response.use(null, (err) => {
  const expectedError =
    err.response.status &&
    err.response.status >= 400 &&
    err.response.status < 500;
  if (!expectedError) {
    console.log('server Error');
  }
  return Promise.reject();
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
