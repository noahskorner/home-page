import { reactive, toRefs } from "@vue/reactivity";

const views = {
  register: 0,
  login: 1,
};
const state = reactive({
  showUserModal: false,
  view: views.login,
  errors: [],
});

export default () => {
  const toggleUserModal = () => {
    state.showUserModal = !state.showUserModal;
  };

  const hideUserModal = () => {
    state.showUserModal = false;
  };

  const setView = (newView) => {
    state.view = newView;
  };

  const setErrors = (newErrors) => {
    state.errors = newErrors;
  };

  return {
    views,
    ...toRefs(state),
    toggleUserModal,
    hideUserModal,
    setView,
    setErrors,
  };
};
