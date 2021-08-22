<template>
  <h2 class="sidebar-header">
    <slot></slot>
  </h2>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar-header {
  width: 75%;
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  border-bottom: 1px solid white;
}
</style>
