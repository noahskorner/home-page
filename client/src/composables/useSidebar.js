import { reactive, toRefs } from "vue";

const sidebars = {
  todoList: 0,
  todoBoard: 1,
};

const state = reactive({
  showSidebar: false,
  currentSidebar: sidebars.todoList,
});

const setShowSidebar = (newShowSidebar) => {
  state.showSidebar = newShowSidebar;
};

const hideSidebar = () => {
  setShowSidebar(false);
};

const setCurrentSidebar = (newSidebar) => {
  state.currentSidebar = newSidebar;
};

export default () => {
  return {
    sidebars,
    ...toRefs(state),
    setShowSidebar,
    hideSidebar,
    setCurrentSidebar,
  };
};
