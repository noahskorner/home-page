<template>
  <div class="sidebar-container">
    <AddTodo
      :swimlaneId="swimlanes.length ? swimlanes[currentSwimlane].id : -1"
    />
    <div class="swimlane" v-if="swimlanes.length">
      <div class="swimlane-controls">
        <button class="btn" @click="previousSwimlane">
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
        <h6 class="current-swimlane">
          {{ swimlanes[currentSwimlane].name }}
        </h6>
        <button class="btn" @click="nextSwimlane">
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
        <div
          class="todo-container"
          v-for="todo in sortedTodos[swimlanes[currentSwimlane].id]"
          :key="todo.id"
        >
          <div class="todo">
            {{ todo.title }} {{ timeSince(todo.date_created) }}
          </div>
        </div>
      </div>
    </div>
    <div class="empty-swimlane" v-else>You currently have no todos.</div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { timeSince } from "../../common/functions";
import useWindowSize from "../../composables/useWindowSize";
import useTodos from "../../composables/useTodos";
import AddTodo from "../ui/AddTodo.vue";
export default {
  components: {
    AddTodo,
  },
  setup() {
    const { height } = useWindowSize();
    const { sortedTodos, swimlanes } = useTodos();
    const state = reactive({
      currentSwimlane: 0,
    });

    const previousSwimlane = () => {
      state.currentSwimlane =
        state.currentSwimlane > 0
          ? state.currentSwimlane - 1
          : swimlanes.value.length - 1;
    };
    const nextSwimlane = () => {
      state.currentSwimlane =
        state.currentSwimlane < swimlanes.value.length - 1
          ? state.currentSwimlane + 1
          : 0;
    };

    return {
      height,
      sortedTodos,
      swimlanes,
      ...toRefs(state),
      previousSwimlane,
      nextSwimlane,
      timeSince,
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
  margin-bottom: 0.75rem;
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
