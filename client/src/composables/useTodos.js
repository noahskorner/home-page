import API from "../services/api";
import { toRefs, reactive, watchEffect } from "vue";
import useAuth from "./useAuth";

const { accessToken } = useAuth();

const state = reactive({
  todos: [],
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
  };
};
