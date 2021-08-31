<template>
  <div class="sidebar-container">
    <SidebarHeader>My Apps</SidebarHeader>
    <div class="app-grid">
      <a
        class="app"
        v-for="(app, index) in apps"
        :key="index"
        :href="app.url"
        target="_blank"
      >
        <div class="app-logo">
          <img
            :src="`http://www.google.com/s2/favicons?domain=${getFaviconUrl(
              app.url
            )}`"
          />
        </div>
        <h6>{{ app.name }}</h6>
      </a>
    </div>
  </div>
</template>

<script>
import SidebarHeader from "../ui/SidebarHeader.vue";
import useApps from "../../composables/useApps";
export default {
  components: {
    SidebarHeader,
  },
  setup() {
    const { apps, getFaviconUrl } = useApps();
    return {
      apps,
      getFaviconUrl,
    };
  },
};
</script>

<style scoped>
.app-grid {
  margin-top: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.app > h6 {
  line-height: 1rem;
  font-size: 0.75rem;
  color: white;
  max-width: 5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.app-logo {
  padding: 0;
  margin: 0.15rem;
  width: 3rem;
  height: 3rem;
  background-color: rgba(1, 1, 1, 0.8);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app:hover > .app-logo {
  margin: 0;
  padding: 0.15rem;
}

.app-logo > img {
  height: 20px;
  width: 20px;
}
</style>
