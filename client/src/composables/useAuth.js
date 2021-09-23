import { reactive, toRefs } from "@vue/reactivity";
import useUserModal from "./useUserModal";
import jwt_decode from "jwt-decode";
import API from "../services/api";

const { setView, views } = useUserModal();

const defaultState = {
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  id: null,
  email: null,
};

const state = reactive({});
Object.assign(state, defaultState);

const loadUser = async () => {
  // TODO: Get refresh token from cookie
  const localRefreshToken = localStorage.getItem("refreshToken");

  if (localRefreshToken) {
    setRefreshToken(localRefreshToken);
    await refreshToken();
  }
};

const setAccessToken = (newAccessToken) => {
  const { id, email } = jwt_decode(newAccessToken);
  state.id = id;
  state.email = email;
  state.accessToken = newAccessToken;
};

const setRefreshToken = (newRefreshToken) => {
  // TODO: Remove this -> token will be stored in SET-COOKIE
  localStorage.setItem("refreshToken", newRefreshToken);
  state.refreshToken = newRefreshToken;
};

const removeTokens = () => {
  state.accessToken = null;
  state.refreshToken = null;
  localStorage.removeItem("refreshToken");
};

const setIsAuthenticated = (newIsAuthenticated) => {
  state.isAuthenticated = newIsAuthenticated;
};

const refreshToken = async () => {
  try {
    const response = await API.refreshToken({
      token: state.refreshToken,
    });

    const { accessToken, refreshToken } = response.data;

    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setIsAuthenticated(true);
    setView(views.authenticated);
  } catch (error) {
    if (error.response) {
      if (error.response.data.errors) {
        console.log(error.response);
      } else {
        console.log(error.response);
      }
    } else if (error.request) {
      console.log(error.message);
    } else {
      console.log(error.message);
    }
  }
};

const logout = async () => {
  try {
    const response = await API.logout({
      token: state.refreshToken,
    });
    const { success, message } = response.data;
    console.log(success, message);

    removeTokens();
    setView(views.login);
    Object.assign(state, defaultState);
  } catch (error) {
    if (error.response) {
      if (error.response.data.errors) {
        console.log(error.response);
      } else {
        console.log(error.response);
      }
    } else if (error.request) {
      console.log(error.message);
    } else {
      console.log(error.message);
    }
  }
};

export default () => {
  return {
    ...toRefs(state),
    loadUser,
    setAccessToken,
    setRefreshToken,
    setIsAuthenticated,
    refreshToken,
    logout,
  };
};
