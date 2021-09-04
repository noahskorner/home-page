<template>
  <!-- Login -->
  <div class="user-view">
    <div class="input-group">
      <label for="email">Email</label>
      <input type="text" name="email" id="" />
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input type="password" name="password" id="" />
    </div>
    <div class="shadow-btn btn-container">
      <button class="text-btn">Login</button>
      <div class="shadow-btn-bg"></div>
    </div>
    <p class="subscript">
      Need an account?
      <button @click="setView(views.register)">Register here</button>
    </p>
  </div>
</template>

<script>
import useUserModal from "../../composables/useUserModal";
export default {
  setup() {
    const { views, setView } = useUserModal();
    return {
      views,
      setView,
    };
  },
};
</script>

<style></style>
