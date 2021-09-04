<template>
  <div class="sidebar-btns">
    <!-- Menu / Back Button -->
    <button class="btn menu-btn" @click="setShowSidebar(!showSidebar)">
      <svg
        v-if="showSidebar"
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
      <svg
        v-else
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
    <!-- Todo List Button -->
    <button
      class="btn"
      @click="setCurrentSidebar(sidebars.todoList)"
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
        class="ai ai-Clipboard"
      >
        <path
          d="M15.5 4H18a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.5"
        />
        <path
          d="M8.621 3.515A2 2 0 0 1 10.561 2h2.877a2 2 0 0 1 1.94 1.515L16 6H8l.621-2.485z"
        />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
      </svg>
    </button>
    <!-- Todo Board Button -->
    <button
      class="btn"
      @click="setCurrentSidebar(sidebars.todoBoard)"
      :class="showSidebar ? ['slide-down-1'] : ['slide-up-1']"
    >
      <svg
        width="24"
        height="24"
        role="presentation"
        focusable="false"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z"
          fill="currentColor"
        ></path>
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
      setShowSidebar,
      setCurrentSidebar,
    } = useSidebar();

    return {
      sidebars,
      showSidebar,
      currentSidebar,
      setShowSidebar,
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
