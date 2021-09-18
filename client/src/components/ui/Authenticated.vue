<template>
  <div class="user-view">
    <div class="shadow-btn btn-container mt-0">
      <button class="text-btn" @click="logout">Logout</button>
      <div class="shadow-btn-bg"></div>
    </div>
  </div>
</template>

<script>
import useAuth from "../../composables/useAuth";
export default {
  setup() {
    const { logout } = useAuth();
    return {
      logout,
    };
  },
};
</script>

<style></style>
