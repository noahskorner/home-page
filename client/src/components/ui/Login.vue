<template>
  <!-- Login -->
  <div class="user-view">
    <div class="input-group">
      <label for="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Enter email"
        v-model="email"
        @input="validateLogin"
        @blur="validateLogin"
      />
      <p class="error" v-for="(error, index) in errors.email" :key="index">
        {{ error }}
      </p>
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter password"
        v-model="password"
        @input="validateLogin"
        @blur="validateLogin"
      />
      <p class="error" v-for="(error, index) in errors.password" :key="index">
        {{ error }}
      </p>
    </div>
    <div class="shadow-btn btn-container">
      <button class="text-btn" @click="loginUser()">Login</button>
      <div class="shadow-btn-bg"></div>
    </div>
    <p class="subscript">
      Need an account?
      <button @click="setView(views.register)">Register here</button>
    </p>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import useUserModal from "../../composables/useUserModal";
import useAuth from "../../composables/useAuth";
import { emailRegex } from "../../common/constants";
import API from "../../services/api";
export default {
  setup() {
    const { views, setView, setErrors } = useUserModal();
    const { setAccessToken, setRefreshToken, setIsAuthenticated } = useAuth();
    const state = reactive({
      email: "",
      password: "",
      errors: {
        email: [],
        password: [],
      },
    });
    const setEmail = (newEmail) => {
      state.email = newEmail;
    };
    const setPassword = (newPassword) => {
      state.password = newPassword;
    };
    const validateLogin = () => {
      state.errors = {
        email: [],
        password: [],
      };
      if (!emailRegex.test(state.email))
        state.errors.email.push("Please enter a valid email.");
      if (!state.password.length)
        state.errors.password.push("Please enter your password");
    };
    const loginUser = async () => {
      setErrors([]);
      validateLogin();
      if (state.errors.email.length || state.errors.password.length) return;
      else {
        try {
          const response = await API.login({
            email: state.email,
            password: state.password,
          });
          const { accessToken, refreshToken } = response.data;
          setAccessToken(accessToken);
          setRefreshToken(refreshToken);
          setIsAuthenticated(true);
          setView(views.authenticated);
        } catch (error) {
          if (error.response) {
            if (error.response.data.errors) {
              setErrors(error.response.data.errors);
            } else {
              setErrors(["An unexpected error has occured. Please try again."]);
            }
          } else if (error.request) {
            setErrors(["An unexpected error has occured. Please try again."]);
          } else {
            setErrors(["An unexpected error has occured. Please try again."]);
          }
        }
      }
    };

    return {
      views,
      setView,
      ...toRefs(state),
      setEmail,
      setPassword,
      validateLogin,
      loginUser,
    };
  },
};
</script>

<style></style>
