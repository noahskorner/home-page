import { computed, onMounted, reactive } from "vue";

const state = reactive({
  currentTime: new Date(),
});

const setCurrentTime = (newCurrentTime) => {
  state.currentTime = newCurrentTime;
};

const getCurrentTime = computed(() => {
  let hours = state.currentTime.getHours();
  let minutes = state.currentTime.getMinutes();
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const strTime = hours + ":" + minutes;
  return strTime;
});

export default () => {
  onMounted(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  });

  return {
    currentTime: getCurrentTime,
  };
};
