<template>
  <div class="apps">
    <h2 class="apps-header">My Apps</h2>
    <div class="app-grid">
      <div class="app" v-for="(app, index) in apps" :key="index">
        <div class="app-logo">
          <img :src="`http://www.google.com/s2/favicons?domain=${app.url}`" />
        </div>
        <h6>{{ app.name }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import useApps from "../composables/useApps";
export default {
  setup() {
    const { apps } = useApps();
    return {
      apps,
    };
  },
};
</script>

<style scoped>
.apps {
  width: calc(100% - 2rem);
  padding: 1rem;
}

.apps-header {
  width: 75%;
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  border-bottom: 2px solid white;
}

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
  line-height: 1.5rem;
  font-size: 1rem;
  color: white;
  max-width: 5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.app-logo {
  padding: 0;
  margin: 0.15rem;
  width: 4rem;
  height: 4rem;
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
