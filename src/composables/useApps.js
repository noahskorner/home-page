import { computed, onBeforeMount, reactive } from "vue";

export default () => {
  const state = reactive({
    apps: [],
    loadApps: async () => {
      return new Promise((resolve) => {
        setTimeout(
          resolve({
            apps: [
              {
                id: 1,
                name: "Google",
                url: "https://www.google.com/",
              },
              {
                id: 2,
                name: "YouTube",
                url: "https://www.youtube.com/",
              },
              {
                id: 3,
                name: "FNBO",
                url: "https://www.fnbo.com/",
              },
            ],
          }),
          Math.random() * 1000
        );
      });
    },
    setApps: (newApps) => {
      state.apps = newApps;
    },
  });

  onBeforeMount(async () => {
    const { apps } = await state.loadApps();
    state.setApps(apps);
  });

  return {
    apps: computed(() => state.apps),
  };
};
