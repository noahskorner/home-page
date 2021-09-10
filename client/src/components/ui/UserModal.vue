<template>
  <div class="user-container">
    <button
      class="btn user-btn"
      @click="toggleUserModal"
      :class="userModalClass"
    >
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
      <div v-if="showUserModal" :class="userModalClass">
        <div class="user-modal">
          <div class="errors" v-if="errors.length">
            <p v-for="(error, index) in errors" :key="index">
              {{ error }}
            </p>
          </div>
          <div class="user-view-container">
            <Login v-if="view === views.login" />
            <Register v-else-if="view === views.register" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import useUserModal from "../../composables/useUserModal";
import useSidebar from "../../composables/useSidebar";
import Login from "../ui/Login.vue";
import Register from "../ui/Register.vue";
export default {
  components: {
    Login,
    Register,
  },
  setup() {
    const {
      views,
      showUserModal,
      view,
      errors,
      hideUserModal,
      toggleUserModal,
    } = useUserModal();

    const { sidebars, showSidebar, currentSidebar, hideSidebar } = useSidebar();

    const userModalClass = computed(() => {
      if (showSidebar.value) {
        switch (currentSidebar.value) {
          case sidebars.todoList:
            return ["hide-user-modal"];
          case sidebars.todoBoard:
            return ["hide-user-modal-full"];
          default:
            return ["hide-user-modal"];
        }
      } else return [];
    });

    return {
      views,
      showUserModal,
      view,
      errors,
      hideUserModal,
      toggleUserModal,
      hideSidebar,
      userModalClass,
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 500px) {
  .user-modal {
    width: calc(100vw - 3rem);
  }
}

.user-view-container {
  width: 100%;
}

.errors {
  margin-bottom: 1rem;
  font-size: var(--font-sm);
  background-color: rgba(55, 55, 55, 0.7);
  color: red;
  padding: 0.8rem;
  border: 1px solid red;
  border-radius: var(--rounded);
}

.errors > :not(:first-child) {
  margin-top: 0.5rem;
}

@media (max-width: 800px) {
  .hide-user-modal {
    display: none;
  }
}
@media (max-width: 1980px) {
  .hide-user-modal-full {
    display: none;
  }
}
</style>
