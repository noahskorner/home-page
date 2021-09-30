import { reactive, toRefs } from "@vue/reactivity";

const views = {
  register: 0,
  login: 1,
  authenticated: 2,
};

const state = reactive({
  showUserModal: false,
  view: views.login,
  errors: [],
});

const toggleUserModal = () => {
  state.showUserModal = !state.showUserModal;
};

const displayUserModal = () => {
  state.showUserModal = true;
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

export default () => {
  return {
    views,
    ...toRefs(state),
    displayUserModal,
    toggleUserModal,
    hideUserModal,
    setView,
    setErrors,
  };
};
