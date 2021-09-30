<template>
  <div class="sidebar-container">
    <AddTodo
      v-if="currentState === todoListStates.addTodo"
      :swimlaneId="swimlanes.length ? swimlanes[currentSwimlane].id : -1"
    />
    <AddSwimlane
      v-else-if="currentState === todoListStates.addSwimlane"
      @cancel="setCurrentState(todoListStates.addTodo)"
      @addedSwimlane="setLastSwimlane"
    />
    <!-- Swimlane -->
    <div class="swimlane">
      <!-- Header -->
      <div class="swimlane-header">
        <!-- Controls -->
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
            {{ swimlanes.length ? swimlanes[currentSwimlane].name : "" }}
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
        <!-- Add Swimlane -->
        <button
          class="btn"
          id="add-swimlane-btn"
          @click="setCurrentState(todoListStates.addSwimlane)"
        >
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
            class="ai ai-Plus"
          >
            <path d="M12 20v-8m0 0V4m0 8h8m-8 0H4" />
          </svg>
        </button>
      </div>
      <!-- Todos -->
      <div
        class="todos"
        :style="{ height: `calc(${height}px - 14rem)` }"
        v-if="swimlanes.length && todos.length"
      >
        <div class="todo-container" v-for="todo in todos" :key="todo.id">
          <div class="todo">
            {{ todo.title }} {{ timeSince(todo.date_created) }}
          </div>
        </div>
      </div>
    </div>
    <!-- No Swimlanes / Todos -->
    <div
      class="empty-swimlane"
      v-if="!isAuthenticated || !swimlanes.length || !todos.length"
    >
      <p class="subscript" v-if="!isAuthenticated">
        You currently have no todos.
        <a @click="displayUserModal">Login or register now</a>
      </p>
      <p class="subscript" v-else-if="!swimlanes.length">
        You currently have no todos.
        <a @click="setCurrentState(todoListStates.addSwimlane)"
          >Click here to add a swimlane</a
        >
      </p>
      <p class="subscript" v-else-if="!todos.length">
        You currently have no todos. Add a todo to '{{
          swimlanes[currentSwimlane].name
        }}' above!
      </p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { timeSince } from "../../common/functions";
import useWindowSize from "../../composables/useWindowSize";
import useTodos from "../../composables/useTodos";
import useAuth from "../../composables/useAuth";
import useUserModal from "../../composables/useUserModal";
import AddTodo from "../ui/AddTodo.vue";
import AddSwimlane from "../ui/AddSwimlane.vue";
export default {
  components: {
    AddTodo,
    AddSwimlane,
  },
  setup() {
    const { height } = useWindowSize();
    const { swimlanes, todos } = useTodos();
    const { isAuthenticated } = useAuth();
    const { displayUserModal } = useUserModal();
    const todoListStates = {
      addTodo: 0,
      addSwimlane: 1,
    };
    const state = reactive({
      currentSwimlane: 0,
      currentState: todoListStates.addTodo,
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
    const setLastSwimlane = () => {
      setCurrentState(todoListStates.addTodo);
      state.currentSwimlane = swimlanes.value.length - 1;
    };
    const setCurrentState = (currentState) => {
      state.currentState = currentState;
    };

    return {
      height,
      swimlanes,
      todos,
      todoListStates,
      isAuthenticated,
      ...toRefs(state),
      previousSwimlane,
      nextSwimlane,
      timeSince,
      setCurrentState,
      displayUserModal,
      setLastSwimlane,
    };
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
}

.swimlane-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.swimlane-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-right: 1rem;
}

.current-swimlane {
  color: white;
}

#add-swimlane-btn {
  flex-shrink: 0;
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
