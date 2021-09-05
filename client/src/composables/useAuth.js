import { reactive, toRefs } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const state = reactive({
  accessToken: null,
  refreshToken: null,
});

export default () => {
  const setAccessToken = (newAccessToken) => {
    localStorage.setItem("accessToken", newAccessToken);
    state.accessToken = newAccessToken;
  };
  const setRefreshToken = (newRefreshToken) => {
    localStorage.setItem("refreshToken", newRefreshToken);
    state.refreshToken = newRefreshToken;
  };

  onMounted(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    }
  });

  return {
    ...toRefs(state),
    setAccessToken,
    setRefreshToken,
  };
};
