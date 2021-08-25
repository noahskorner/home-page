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
        <div class="unauthenticated" v-if="view === views.unauthenticated">
          <button class="text-btn" @click="setView(views.login)">Login</button>
          <button class="text-btn">{{ view }}</button>
        </div>
        <div class="login" v-else-if="view === views.login"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  setup() {
    const views = {
      unauthenticated: 0,
      register: 1,
      login: 2,
    };
    const state = reactive({
      showUserModal: false,
      view: views.unauthenticated,
    });

    const toggleUserModal = () => {
      state.showUserModal = !state.showUserModal;
    };

    const setView = (newView) => {
      state.view == newView;
    };

    return {
      views,
      ...toRefs(state),
      toggleUserModal,
      setView,
    };
  },
};
</script>

<style scoped>
.user-container {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.user-modal {
  width: 20rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
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
  padding: 0.75rem 0;
  margin: 0.5rem;
  border-radius: 0.5rem;
}

.text-btn:hover {
  background-color: rgba(0, 0, 0);
}
</style>
