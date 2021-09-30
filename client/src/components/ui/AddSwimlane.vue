<template>
  <div class="add-todo">
    <div class="input-group">
      <input
        type="text"
        name="todo-input"
        id="todo-input"
        v-model="name"
        placeholder="Add new swimlane"
      />
    </div>
    <div class="actions-wrapper">
      <div class="btn-container">
        <button class="text-btn" @click="$emit('cancel')">Cancel</button>
      </div>

      <div class="shadow-btn btn-container">
        <button class="text-btn" @click="addNewSwimlane">Add swimlane</button>
        <div class="shadow-btn-bg"></div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import useTodos from "../../composables/useTodos";
export default {
  emits: ["cancel", "addedSwimlane"],
  setup(_, { emit }) {
    const { addSwimlane } = useTodos();
    const state = reactive({
      name: "",
    });

    const addNewSwimlane = async () => {
      if (state.name !== "") {
        await addSwimlane(state.name);
        state.name = "";
        emit("addedSwimlane");
      }
    };

    return {
      ...toRefs(state),
      addNewSwimlane,
    };
  },
};
</script>

<style scoped>
.actions-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 0.5rem;
}
</style>
