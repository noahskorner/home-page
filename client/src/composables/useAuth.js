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
  localStorage.setItem("refreshToken", newRefreshToken);
  state.refreshToken = newRefreshToken;
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
        console.log(error.response.data.errors);
      } else {
        console.log(error.response.data.errors);
      }
    } else if (error.request) {
      console.log(error.response.data.errors);
    } else {
      console.log(error.response.data.errors);
    }
  }
};

const logout = async () => {
  try {
    const response = await API.logout({
      token: state.refreshToken,
    });
    console.log(response);

    setView(views.login);
    Object.assign(state, defaultState);
  } catch (error) {
    if (error.response) {
      if (error.response.data.errors) {
        console.log(error.response.data.errors);
      } else {
        console.log(error.response.data.errors);
      }
    } else if (error.request) {
      console.log(error.response.data.errors);
    } else {
      console.log(error.response.data.errors);
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
