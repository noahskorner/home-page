<template>
  <div class="sidebar-container">
    <SidebarHeader>Board View</SidebarHeader>
  </div>
</template>

<script>
import SidebarHeader from "../ui/SidebarHeader.vue";
export default {
  components: {
    SidebarHeader,
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
