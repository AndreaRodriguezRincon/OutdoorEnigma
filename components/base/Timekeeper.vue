<script setup>
import { computed } from "vue";

const time = ref(0);

const formattedTime = computed(() => {
  const hours = Math.floor(time.value / 3600);
  const minutes = Math.floor((time.value % 3600) / 60);
  const seconds = time.value % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
});

const pad = (num) => {
  return num.toString().padStart(2, "0");
};

const tick = () => {
  time.value++;
};

onMounted(() => {
  setInterval(tick, 1000);
});

const addMinute = (minutes) => {
  time.value += minutes * 60;
};
</script>

<template>
  <div>
    <span class="text-3xl text-white">{{ formattedTime }}</span>
    <button @click="addMinute(1)">+1 minuto</button>
    <button @click="addMinute(2)">+2 minutos</button>
    <button @click="addMinute(3)">+3 minutos</button>
    <button @click="addMinute(5)">+5 minutos</button>
  </div>
</template>
