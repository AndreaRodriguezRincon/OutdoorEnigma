<script setup>
import { computed } from "vue";
import { state, actions } from "../stores/timerStore";

// Inicia el temporizador cuando el componente se monta
onMounted(() => {
  actions.startTimer();
});
// Detiene el temporizador cuando el componente se desmonta para evitar que siga corriendo el tiempo
onUnmounted(() => {
  actions.stopTimer();
});

// Calcula el tiempo formateado en horas, minutos y segundos
const formattedTime = computed(() => {
  const hours = Math.floor(state.time / 3600);
  const minutes = Math.floor((state.time % 3600) / 60);
  const seconds = state.time % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
});

// Función para rellenar con ceros los números menores que 10
const pad = (num) => {
  return num.toString().padStart(2, "0");
};
</script>

<template>
  <div class="block-timer">
    <img src="/images/icons/reloj.png" class="img-timer" alt="Cronómetro" />
    <!-- Muestra el tiempo formateado -->
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
