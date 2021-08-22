import { computed, onMounted, onUnmounted, ref } from "vue";

export default function () {
  let windowWidth = ref(window.innerWidth);
  let windowHeight = ref(window.innerHeight);

  const onWidthChange = () => (windowWidth.value = window.innerWidth);
  const onHeightChange = () => (windowHeight.value = window.innerHeight);

  onMounted(() => window.addEventListener("resize", onWidthChange));
  onMounted(() => window.addEventListener("resize", onHeightChange));

  onUnmounted(() => window.removeEventListener("resize", onWidthChange));
  onUnmounted(() => window.removeEventListener("resize", onHeightChange));

  const width = computed(() => windowWidth.value);
  const height = computed(() => windowHeight.value);

  return { width, height };
}
