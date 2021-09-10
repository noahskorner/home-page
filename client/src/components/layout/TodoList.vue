<template>
  <div class="sidebar-container">
    <AddTodo />
    <div class="swimlane-controls">
      <button class="btn">
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
          class="ai ai-ChevronLeft"
        >
          <path d="M15 4l-8 8 8 8" />
        </svg>
      </button>
      <h6 class="current-swimlane">Current swimlane</h6>
      <button class="btn">
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
          class="ai ai-ChevronRight"
        >
          <path d="M8 4l8 8-8 8" />
        </svg>
      </button>
    </div>
    <div class="todos">
      <div class="todo-container">
        <div class="todo"></div>
        <div class="todo-bg"></div>
      </div>
      <div class="todo-container">
        <div class="todo"></div>
        <div class="todo-bg"></div>
      </div>
      <div class="todo-container">
        <div class="todo"></div>
        <div class="todo-bg"></div>
      </div>
      <div class="todo-container">
        <div class="todo"></div>
        <div class="todo-bg"></div>
      </div>
      <div class="todo-container">
        <div class="todo"></div>
        <div class="todo-bg"></div>
      </div>
    </div>
  </div>
</template>

<script>
import AddTodo from "../ui/AddTodo.vue";
export default {
  components: {
    AddTodo,
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
}

.swimlane-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.current-swimlane {
  color: white;
}

.todo-container {
  width: 100%;
  height: 25rem;
  margin-top: 1rem;
  position: relative;
}

.todo {
  width: 100%;
  height: 100%;
  border: 1px solid white;
  border-radius: var(--rounded);
  background-color: var(--gray);
  position: relative;
  z-index: 1;
}

.todo-bg {
  background-color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -8px;
  right: -8px;
  border-radius: var(--rounded);
}

.todos {
}
</style>
