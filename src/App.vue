<template>
  <div
    id="root"
    class="font-primary"
    :style="{ width: `${width}px`, height: `${height}px` }"
  >
    <Sidebar />
    <div class="current-time">
      <h1>{{ currentTime }}</h1>
      <h2>Welcome home, Noah</h2>
    </div>
  </div>
</template>

<script>
import useCurrentTime from "./composables/useCurrentTime";
import Sidebar from "./components/layout/Sidebar.vue";
import useWindowSize from "./composables/useWindowSize";
export default {
  name: "Home",
  components: {
    Sidebar,
  },
  setup() {
    const { width, height } = useWindowSize();
    const { currentTime } = useCurrentTime();

    return {
      width,
      height,
      currentTime,
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
  font-size: var(--font-xl);
  text-align: center;
  padding: 2rem 1rem;
  border-radius: 1rem;
  margin: 1rem;
}

.current-time > h2 {
  font-size: 2rem;
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
