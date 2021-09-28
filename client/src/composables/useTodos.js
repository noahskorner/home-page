import API from "../services/api";
import { toRefs, reactive, watchEffect, computed } from "vue";
import useAuth from "./useAuth";

const { accessToken } = useAuth();

const state = reactive({
  todos: [],
});

const sortedTodos = computed(() => {
  return state.todos.reduce((dict, todo) => {
    if (!dict[todo.swimlane_id]) dict[todo.swimlane_id] = [todo];
    else dict[todo.swimlane_id].push(todo);

    return dict;
  }, {});
});

const swimlanes = computed(() => {
  return state.todos.reduce((arr, todo) => {
    const findSwimlane = arr.find(
      (swimlane) => swimlane.id === todo.swimlane_id
    );
    if (!findSwimlane) arr.push({ id: todo.swimlane_id, name: todo.swimlane });

    return arr;
  }, []);
});

const setTodos = (newTodos) => {
  state.todos = newTodos;
};

const loadTodos = async () => {
  try {
    const response = await API.getTodos(accessToken.value);
    const todos = response.data.data;
    setTodos(todos);
  } catch (error) {
    // TODO: Check for 403 and refresh token
    if (error.response) {
      if (error.response.data.data) {
        console.log(error.response);
      } else {
        console.log(error.response);
      }
    } else if (error.request) {
      console.log(error.message);
    } else {
      console.log(error.message);
    }
  }
};

const addTodo = async (swimlaneId, title) => {
  try {
    const response = await API.postTodos(
      { swimlaneId, title },
      accessToken.value
    );
    const newTodo = response.data.data;
    state.todos.push(newTodo);
  } catch (error) {
    // TODO: Check for 403 and refresh token
    if (error.response) {
      if (error.response.data.data) {
        console.log(error.response);
      } else {
        console.log(error.response);
      }
    } else if (error.request) {
      console.log(error.message);
    } else {
      console.log(error.message);
    }
  }
};

watchEffect(async () => {
  if (accessToken.value) {
    await loadTodos();
  } else {
    setTodos([]);
  }
});

export default () => {
  return {
    sortedTodos,
    swimlanes,
    ...toRefs(state),
    addTodo,
  };
};
