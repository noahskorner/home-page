<template>
  <div class="user-view">
    <div class="input-group">
      <label for="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        v-model="email"
        @input="validateNewUser"
        @blur="validateNewUser"
      />
      <p class="error" v-for="(error, index) in errors.email" :key="index">
        {{ error }}
      </p>
    </div>
    <div class="input-group">
      <label for="password1">Password</label>
      <input
        type="password"
        name="password1"
        id="password1"
        v-model="password1"
        @input="validateNewUser"
        @blur="validateNewUser"
      />
      <p class="error" v-for="(error, index) in errors.password1" :key="index">
        {{ error }}
      </p>
    </div>
    <div class="input-group">
      <label for="password2">Confirm Password</label>
      <input
        type="password"
        name="password2"
        id="password2"
        v-model="password2"
        @input="validateNewUser"
        @blur="validateNewUser"
      />
      <p class="error" v-for="(error, index) in errors.password2" :key="index">
        {{ error }}
      </p>
    </div>
    <div class="shadow-btn btn-container">
      <button class="text-btn" @click="registerUser()">Register</button>
      <div class="shadow-btn-bg"></div>
    </div>
    <p class="subscript">
      Already have an account?
      <button @click="setView(views.login)">Login here</button>
    </p>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { emailRegex } from "../../common/constants";
import API from "../../services/api";
import useUserModal from "../../composables/useUserModal";
export default {
  setup() {
    const { views, setView, setErrors } = useUserModal();
    const state = reactive({
      email: "",
      password1: "",
      password2: "",
      errors: {
        email: [],
        password1: [],
        password2: [],
      },
    });
    const validateNewUser = () => {
      state.errors = {
        email: [],
        password1: [],
        password2: [],
      };

      if (!emailRegex.test(state.email))
        state.errors.email.push("Email must be valid.");
      if (state.password1 !== state.password2)
        state.errors.password2.push("Passwords do not match.");
      if (state.password1.length < 8)
        state.errors.password1.push("Password must be at least 8 characters.");
      if (!/\d/.test(state.password1))
        state.errors.password1.push("Password must contain at least 1 number.");
      if (!/[A-Z]/.test(state.password1))
        state.errors.password1.push(
          "Password must contain at least 1 uppercase letter."
        );
    };
    const registerUser = async () => {
      setErrors([]);
      validateNewUser();
      if (
        state.errors.email.length ||
        state.errors.password1.length ||
        state.errors.password2.length
      )
        return;
      else {
        try {
          const response = await API.register({
            email: state.email,
            password1: state.password1,
            password2: state.password2,
          });
          const newUserEmail = response.data.email;
          setErrors([
            `PLACEHOLDER User ${newUserEmail} successfully created. Login now!`,
          ]);
          setView(views.login);
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
      validateNewUser,
      registerUser,
    };
  },
};
</script>

<style></style>
