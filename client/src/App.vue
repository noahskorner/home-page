<template>
  <div
    id="root"
    class="font-primary"
    :style="{ width: `${width}px`, height: `${height}px` }"
  >
    <UserModal />
    <Sidebar />
    <div class="current-time"></div>
  </div>
</template>

<script>
import useAuth from "./composables/useAuth";
import useCurrentTime from "./composables/useCurrentTime";
import useWindowSize from "./composables/useWindowSize";
import Sidebar from "./components/layout/Sidebar.vue";
import UserModal from "./components/ui/UserModal.vue";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "Home",
  components: {
    Sidebar,
    UserModal,
  },
  setup() {
    const { loadUser } = useAuth();
    const { width, height } = useWindowSize();
    const { currentTime } = useCurrentTime();

    onMounted(async () => {
      await loadUser();
    });

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
  border-radius: 50%;
  border: 1px solid white;
  width: 50rem;
  height: 50rem;
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
