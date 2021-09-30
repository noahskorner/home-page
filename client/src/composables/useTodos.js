import API from "../services/api";
import { toRefs, reactive, watchEffect } from "vue";
import useAuth from "./useAuth";

const { accessToken } = useAuth();

const state = reactive({
  todos: [],
  swimlanes: [],
});

const setTodos = (todos) => {
  state.todos = todos;
};

const setSwimlanes = (swimlanes) => {
  state.swimlanes = swimlanes;
};

const loadTodos = async () => {
  try {
    const response = await API.getTodos(accessToken.value);
    const { swimlanes, todos } = response.data.data;
    setSwimlanes(swimlanes);
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

const addSwimlane = async (name) => {
  try {
    const response = await API.postSwimlanes({ name }, accessToken.value);
    const { swimlane } = response.data.data;
    state.swimlanes.push(swimlane);
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
    ...toRefs(state),
    addTodo,
    addSwimlane,
  };
};
