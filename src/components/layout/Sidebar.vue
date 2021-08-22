<template>
  <div class="sidebar" :class="showSidebar ? ['slide-in'] : ['slide-out']">
    <SidebarButtons />
    <Apps v-if="currentSidebar === sidebars.apps" />
    <Todos v-else-if="currentSidebar === sidebars.todos" />
  </div>
</template>

<script>
import useSidebar from "../../composables/useSidebar";
import SidebarButtons from "../ui/SidebarButtons.vue";
import Apps from "./Apps.vue";
import Todos from "./Todos.vue";

export default {
  components: {
    SidebarButtons,
    Apps,
    Todos,
  },
  setup() {
    const { sidebars, showSidebar, currentSidebar } = useSidebar();

    return { sidebars, showSidebar, currentSidebar };
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
</style>
