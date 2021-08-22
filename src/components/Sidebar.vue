<template>
  <div class="sidebar" :class="showSidebar ? ['slide-in'] : ['slide-out']">
    <div class="sidebar-btns">
      <button
        class="btn"
        @click="toggleSidebar()"
        :class="showSidebar ? ['rotate-90'] : ['-rotate-90']"
      >
        <svg
          style="background: transparent"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke-width="5"
          class="ai ai-DotGridFill"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM4 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm6-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM6 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm6-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"
          />
        </svg>
      </button>
    </div>

    <Apps />
  </div>
</template>

<script>
import Apps from "./Apps.vue";
import useSidebar from "../composables/useSidebar";
export default {
  components: {
    Apps,
  },
  setup() {
    const { showSidebar, toggleSidebar } = useSidebar();

    return {
      showSidebar,
      toggleSidebar,
    };
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: calc(100% - 4.5rem);
  max-width: 25rem;
  background-color: rgba(1, 1, 1, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.sidebar-btns {
  position: absolute;
  top: 0.5rem;
  right: -3.5rem;
  display: flex;
  flex-direction: column;
}

.sidebar-btns > button {
  margin-bottom: 0.5rem;
}

.btn {
  background-color: rgba(1, 1, 1, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  color: white;
  cursor: pointer;
}

.btn:hover {
  background-color: rgba(1, 1, 1, 0.7);
}
</style>
