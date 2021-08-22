import { onBeforeMount, reactive, toRefs } from "vue";
const state = reactive({
  apps: [],
});
export default () => {
  const loadApps = async () => {
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
              name: "noahskorner",
              url: "https://mail.google.com/mail/u/0/#inbox",
            },
            {
              id: 4,
              name: "8080",
              url: "http://localhost:8080/",
            },
            {
              id: 3,
              name: "FNBO",
              url: "https://www.fnbo.com/",
            },
            {
              id: 3,
              name: "FNBO",
              url: "https://www.fnbo.com/",
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
  };
  const setApps = (newApps) => {
    state.apps = newApps;
  };
  const getFaviconUrl = (url) => {
    const re = /\/([^/,\s]+\.[^/,\s]+?)(?=\/|,|\s|$|\?|#)/;
    console.log(re.exec(url));
    const faviconUrl = re.exec(url);
    return faviconUrl && faviconUrl.length > 1 ? faviconUrl[1] : url;
  };

  onBeforeMount(async () => {
    const { apps } = await loadApps();
    setApps(apps);
  });

  return {
    ...toRefs(state),
    getFaviconUrl,
  };
};
