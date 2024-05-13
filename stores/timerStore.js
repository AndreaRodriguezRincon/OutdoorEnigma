import { reactive } from "vue";

export const state = reactive({
  time: 0,
  intervalId: null,
});

export const mutations = {
  setTime(time) {
    state.time = time;
  },
  setIntervalId(id) {
    state.intervalId = id;
  },
};

export const actions = {
  startTimer() {
    mutations.setIntervalId(
      setInterval(() => {
        mutations.setTime(state.time + 1);
      }, 1000)
    );
  },
  stopTimer() {
    clearInterval(state.intervalId);
    mutations.setIntervalId(null);
  },
  addMinutes(minute) {
    mutations.setTime(state.time + minute * 60);
  },
  resetTime() {
    mutations.setTime(0);
  },
};
