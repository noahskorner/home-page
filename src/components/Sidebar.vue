<template>
  <div class="apps" :class="show ? ['slide-in'] : ['slide-out']">
    <button
      class="apps-btn"
      @click="$emit('toggleSidebar')"
      :class="show ? ['rotate-90'] : ['-rotate-90']"
    >
      <svg
        style="background: transparent"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke-width="5"
        class="ai ai-DotGridFill"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM4 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm6-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM6 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm6-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"
        />
      </svg>
    </button>
    <div class="app-grid">
      <div class="app">
        <div class="app-logo">
          <img src="https://www.google.com/favicon.ico" />
        </div>
        <h6>Google</h6>
      </div>
      <div class="app">
        <div class="app-logo">
          <img src="https://www.google.com/favicon.ico" />
        </div>
        <h6>Google</h6>
      </div>
      <div class="app">
        <div class="app-logo">
          <img src="https://www.google.com/favicon.ico" />
        </div>
        <h6>Google</h6>
      </div>
      <div class="app">
        <div class="app-logo">
          <img src="https://www.google.com/favicon.ico" />
        </div>
        <h6>Google</h6>
      </div>
      <div class="app">
        <div class="app-logo">
          <img src="https://www.google.com/favicon.ico" />
        </div>
        <h6>Google</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["toggleSidebar"],
};
</script>

<style scoped>
.apps {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: calc(100% - 4.5rem);
  max-width: 25rem;
  background-color: rgba(1, 1, 1, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.apps-btn {
  position: absolute;
  top: 0.5rem;
  right: -4rem;
  background-color: rgba(1, 1, 1, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  color: white;
  cursor: pointer;
}

.apps-btn:hover {
  background-color: rgba(1, 1, 1, 0.7);
}

.app-grid {
  width: calc(100% - 2rem);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.app > h6 {
  font-size: 1rem;
  color: white;
  margin: 0.5rem 0;
}

.app-logo {
  padding: 0;
  margin: 0.25rem;
  width: 4rem;
  height: 4rem;
  background-color: rgba(1, 1, 1, 0.8);

  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app:hover > .app-logo {
  margin: 0;
  padding: 0.25rem;
}

.app:hover > h6 {
  font-weight: 600;
}

.app-logo > img {
  height: 32px;
  width: 32px;
}
</style>
