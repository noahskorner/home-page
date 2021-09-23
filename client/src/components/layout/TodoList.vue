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
    <div class="todos" :style="{ height: `calc(${height}px - 14rem)` }">
      <div class="todo-container" v-for="todo in todos" :key="todo.id">
        <div class="todo">
          {{ todo.id }} {{ todo.title }} {{ todo.swimlane }} {{ todo.status }}
          {{ todo.date_created }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddTodo from "../ui/AddTodo.vue";
import useWindowSize from "../../composables/useWindowSize";
import useTodos from "../../composables/useTodos";
export default {
  components: {
    AddTodo,
  },
  setup() {
    const { height } = useWindowSize();
    const { todos } = useTodos();

    return {
      height,
      todos,
    };
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
  height: 5rem;
  position: relative;
}

.todo-container:not(:last-child) {
  margin-bottom: 1rem;
}

.todo {
  width: 100%;
  height: 100%;
  border: 1px solid white;
  border-radius: var(--rounded);
  position: relative;
  z-index: 1;
  background-color: var(--gray);
}

.todo:hover {
  cursor: grab;
}

.todos {
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 7px;
  margin-top: 1rem;
}

/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 10px;
}
</style>
