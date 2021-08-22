import { computed, reactive } from "vue";

export default () => {
  const state = reactive({
    showSidebar: true,
    toggleSidebar: () => {
      state.showSidebar = !state.showSidebar;
    },
  });
  return {
    showSidebar: computed(() => state.showSidebar),
    toggleSidebar: state.toggleSidebar,
  };
};
