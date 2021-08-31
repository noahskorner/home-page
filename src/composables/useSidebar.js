import { reactive, toRefs } from "vue";

const sidebars = {
  apps: 1,
  todos: 2,
};

const state = reactive({
  showSidebar: false,
  currentSidebar: sidebars.todos,
});

export default () => {
  const setSidebar = (newShowSidebar) => {
    state.showSidebar = newShowSidebar;
    state.showSidebar;
  };

  const setCurrentSidebar = (newSidebar) => {
    state.currentSidebar = newSidebar;
  };

  return {
    sidebars,
    ...toRefs(state),
    setSidebar,
    setCurrentSidebar,
  };
};
