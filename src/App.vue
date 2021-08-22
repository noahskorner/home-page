<template>
  <div
    id="root"
    class="font-primary"
    :style="{ width: `${width}px`, height: `${height}px` }"
  >
    <Sidebar :show="showSidebar" @toggleSidebar="toggleSidebar()" />
    <div class="current-time">
      <h1>{{ currentTime }}</h1>
      <h2>Welcome home, Noah</h2>
    </div>
  </div>
</template>

<script>
import useCurrentTime from "./composables/useCurrentTime";
import Sidebar from "./components/Sidebar.vue";
import useSidebar from "./composables/useSidebar";
import useWindowSize from "./composables/useWindowSize";
export default {
  name: "Home",
  components: {
    Sidebar,
  },
  setup() {
    const { width, height } = useWindowSize();
    const { currentTime } = useCurrentTime();
    const { showSidebar, toggleSidebar } = useSidebar();

    return {
      width,
      height,
      currentTime,
      showSidebar,
      toggleSidebar,
    };
  },
};
</script>

<style scoped>
#root {
  background: url("https://picsum.photos/3840/2160?query=nature");
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.current-time {
  color: white;
  font-size: 7rem;
  text-align: center;
  padding: 5rem;
  border-radius: 0.5rem;
}

.current-time > h2 {
  font-size: 3rem;
}

@media (min-width: 640px) {
  .current-time {
    font-size: 12rem;
  }

  .current-time > h2 {
    font-size: 3rem;
  }
}
</style>
