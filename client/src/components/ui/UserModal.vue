<template>
  <div class="user-container">
    <button class="btn user-btn" @click="toggleUserModal()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="ai ai-Person"
      >
        <circle cx="12" cy="7" r="5" />
        <path
          d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"
        />
      </svg>
    </button>
    <transition name="user-modal">
      <div class="user-modal" v-if="showUserModal">
        <!-- Login -->
        <div class="user-view" v-if="view === views.login">
          <div class="input-group">
            <label for="email">Email</label>
            <input type="text" name="email" id="" />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="text" name="password" id="" />
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
        <!-- Register -->
        <div class="user-view" v-else-if="view === views.register">
          <div class="input-group">
            <label for="email">Email</label>
            <input type="text" name="email" id="" />
          </div>
          <div class="input-group">
            <label for="password1">Password</label>
            <input type="text" name="password1" id="" />
          </div>
          <div class="input-group">
            <label for="password2">Confirm Password</label>
            <input type="text" name="password2" id="" />
          </div>
          <div class="shadow-btn btn-container">
            <button class="text-btn">Register</button>
            <div class="shadow-btn-bg"></div>
          </div>
          <p class="subscript">
            Already have an account?
            <button @click="setView(views.login)">Login here</button>
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  setup() {
    const views = {
      register: 0,
      login: 1,
    };
    const state = reactive({
      showUserModal: false,
      view: views.login,
    });

    const toggleUserModal = () => {
      state.showUserModal = !state.showUserModal;
    };

    const hideUserModal = () => {
      state.showUserModal = false;
    };

    const setView = (newView) => {
      state.view = newView;
    };

    return {
      views,
      ...toRefs(state),
      toggleUserModal,
      hideUserModal,
      setView,
    };
  },
};
</script>

<style scoped>
.user-container {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.user-modal {
  width: 18rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: var(--rounded);
  margin-top: 0.5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.unauthenticated {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-btn {
  width: 100%;
  background-color: transparent;
  cursor: pointer;
  color: white;
  border: 1px solid white;
  padding: 0.8rem 0;
  font-size: 1rem;
  border-radius: var(--rounded);
}

.text-btn:hover {
  background-color: rgba(0, 0, 0);
}

.shadow-btn {
  position: relative;
  width: 100%;
}

.shadow-btn button {
  position: relative;
  z-index: 10;
  background-color: rgba(35, 35, 35);
}

.shadow-btn button:active {
  position: relative;
  bottom: -4px;
  right: -4px;
}

.shadow-btn-bg {
  background-color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -4px;
  right: -4px;
  border-radius: var(--rounded);
}

.btn-container {
  margin-top: 1rem;
}

.user-view {
  width: 100%;
}

.user-view .header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.input-group {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.input-group:not(:first-child) {
  margin-top: 0.5rem;
}

.input-group label {
  color: white;
  margin-bottom: 0.25rem;
  padding: 0 0.25rem;
  font-size: var(--font-sm);
}

.input-group input {
  background-color: transparent;
  border: 1px solid white;
  padding: 0.75rem;
  color: white;
  border-radius: var(--rounded);
}

.input-group input:active {
  border-radius: 1px solid white;
}

.subscript {
  color: white;
  font-size: var(--font-sm);
  margin-top: 0.5rem;
}

.subscript button {
  background-color: transparent;
  cursor: pointer;
  color: white;
  border: none;
}

.subscript button:hover {
  text-decoration: underline;
}
</style>
