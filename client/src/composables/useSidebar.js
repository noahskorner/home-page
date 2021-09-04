import { reactive, toRefs } from "vue";

const sidebars = {
  todoList: 0,
  todoBoard: 1,
};

const state = reactive({
  showSidebar: false,
  currentSidebar: sidebars.todoList,
});

export default () => {
  const setShowSidebar = (newShowSidebar) => {
    state.showSidebar = newShowSidebar;
  };

  const setCurrentSidebar = (newSidebar) => {
    state.currentSidebar = newSidebar;
  };

  return {
    sidebars,
    ...toRefs(state),
    setShowSidebar,
    setCurrentSidebar,
  };
};
