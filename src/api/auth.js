import axios from "axios";
const url = "https://userdetailbackend.onrender.com";
const instance = axios.create({
  baseURL: url,
  headers: { "Content-Type": "application/json" },
});

const instance1 = axios.create({
  baseURL: url,
  headers: { "Content-Type": "multipart/form-data" },
});

const genericError = {
  message: "Something went wrong",
  status: 500,
};

function defaultCatch(error, resolve) {
  if (error.response) {
    resolve(error.response);
  } else if (error.request) {
    resolve(error.request);
  } else {
    resolve(genericError);
  }
}

export default class Auth {
  //signup
  static signup(values) {
    let payload = values;

    return new Promise((resolve) => {
      instance
        .post("/api/auth/register", payload.data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => defaultCatch(error, resolve));
    });
  }
  //log in
  static login(values) {
    let payload = values;

    return new Promise((resolve) => {
      instance
        .post("/api/auth/login", payload.data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => defaultCatch(error, resolve));
    });
  }
}
