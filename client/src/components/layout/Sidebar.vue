<template>
  <div class="sidebar" :class="sidebarClass">
    <TodoList v-if="currentSidebar === sidebars.todoList" />
    <TodoBoard v-else-if="currentSidebar === sidebars.todoBoard" />
    <SidebarButtons />
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import useSidebar from "../../composables/useSidebar";
import SidebarButtons from "../ui/SidebarButtons.vue";
import TodoList from "./TodoList.vue";
import TodoBoard from "./TodoBoard.vue";

export default {
  components: {
    SidebarButtons,
    TodoList,
    TodoBoard,
  },
  setup() {
    const { sidebars, showSidebar, currentSidebar, hideSidebar } = useSidebar();

    const sidebarClass = computed(() => {
      switch (currentSidebar.value) {
        case sidebars.todoList:
          return [showSidebar.value ? "slide-in" : "slide-out"];
        case sidebars.todoBoard:
          return ["sidebar-full", showSidebar.value ? "slide-in" : "slide-out"];
        default:
          return [showSidebar.value ? "slide-in" : "slide-out"];
      }
    });

    return {
      sidebars,
      showSidebar,
      currentSidebar,
      hideSidebar,
      sidebarClass,
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
  width: calc(100% - 4rem);
  max-width: 25rem;
  background-color: rgba(1, 1, 1, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.sidebar-full {
  max-width: 75%;
}

@media only screen and (max-width: 500px) {
  .sidebar {
    max-width: calc(100% - 4rem);
  }

  .sidebar-full {
    max-width: calc(100% - 4rem);
  }
}
</style>
