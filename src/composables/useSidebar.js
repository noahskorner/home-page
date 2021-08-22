import { reactive, toRefs } from "vue";

const sidebars = {
  apps: 1,
  todos: 2,
};

const state = reactive({
  showSidebar: false,
  currentSidebar: sidebars.apps,
});

export default () => {
  const toggleSidebar = (showSidebar) => {
    state.showSidebar = showSidebar;
  };

  const setCurrentSidebar = (newSidebar) => {
    state.currentSidebar = newSidebar;
  };

  return {
    sidebars,
    ...toRefs(state),
    toggleSidebar,
    setCurrentSidebar,
  };
};
