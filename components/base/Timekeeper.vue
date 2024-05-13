<script setup>
import { computed } from "vue";
import { state, actions } from "../stores/timerStore";

onMounted(() => {
  actions.startTimer();
});

onUnmounted(() => {
  actions.stopTimer();
});

const formattedTime = computed(() => {
  const hours = Math.floor(state.time / 3600);
  const minutes = Math.floor((state.time % 3600) / 60);
  const seconds = state.time % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
});

const pad = (num) => {
  return num.toString().padStart(2, "0");
};
</script>

<template>
  <div class="block-timer">
    <img src="/images/icons/reloj.png" class="img-timer" alt="Cronómetro" />

    <span class="text-3xl text-white timer">{{ formattedTime }}</span>
  </div>
</template>
<style scoped>
.block-timer {
  position: relative;
  background-color: #5f6f52;
  padding: 8px 32px;
  border-radius: 12px;
}
.timer {
  border-top: 3px solid #a9b388;
  border-bottom: 3px solid #a9b388;
}

.img-timer {
  position: absolute;
  top: -27px;
  left: -26px;
  width: 60px;
  height: 60px;
}
</style>
