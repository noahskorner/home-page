<template>
  <div class="add-todo">
    <div class="input-group">
      <input
        type="text"
        name="todo-input"
        id="todo-input"
        placeholder="Add a todo"
        v-model="title"
      />
    </div>
    <div class="shadow-btn btn-container">
      <button class="text-btn" @click="addNewTodo">Add todo</button>
      <div class="shadow-btn-bg"></div>
    </div>
    <hr />
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import useTodos from "../../composables/useTodos";
export default {
  props: {
    swimlaneId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { addTodo } = useTodos();
    const state = reactive({
      title: "",
    });

    const addNewTodo = async () => {
      if (state.title !== "" && props.swimlaneId !== -1) {
        await addTodo(props.swimlaneId, state.title);
        state.title = "";
      }
    };

    return {
      ...toRefs(state),
      addNewTodo,
    };
  },
};
</script>

<style></style>
