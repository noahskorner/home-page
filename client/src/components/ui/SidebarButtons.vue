<template>
  <div class="sidebar-btns">
    <!-- Back Button -->
    <button class="btn" @click="setSidebar(false)" v-if="showSidebar">
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
        class="ai ai-ArrowLeft"
      >
        <path d="M11 5l-7 7 7 7" />
        <path d="M4 12h16" />
      </svg>
    </button>
    <!-- Apps Button -->
    <button class="btn" @click="setSidebar(true)" v-if="!showSidebar">
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
    <!-- Todos Button -->
    <button
      class="btn"
      @click="setCurrentSidebar(sidebars.todos)"
      :class="showSidebar ? ['slide-down'] : ['slide-up']"
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
        class="ai ai-DoubleCheck"
      >
        <path d="M2 12l5.25 5 2.625-3" />
        <path d="M8 12l5.25 5L22 7" />
        <path d="M16 7l-3.5 4" />
      </svg>
    </button>
  </div>
</template>

<script>
import useSidebar from "../../composables/useSidebar";
export default {
  components: {},
  setup() {
    const {
      sidebars,
      showSidebar,
      currentSidebar,
      setSidebar,
      setCurrentSidebar,
    } = useSidebar();

    return {
      sidebars,
      showSidebar,
      currentSidebar,
      setSidebar,
      setCurrentSidebar,
    };
  },
};
</script>

<style scoped>
.sidebar-btns {
  position: absolute;
  top: 0.5rem;
  left: calc(100% + 0.5rem);
  display: flex;
  flex-direction: column;
}

.sidebar-btns > button {
  margin-bottom: 0.5rem;
}
</style>
