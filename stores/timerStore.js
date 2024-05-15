import { reactive } from "vue";
// Definición del estado de la aplicación
export const state = reactive({
  // Tiempo actual en segundos
  time: 0,
  // Identificador del intervalo para el temporizador
  intervalId: null,
});

// Mutaciones que modifican el estado de la aplicación de manera síncrona
export const mutations = {
  // Establece el tiempo actual
  setTime(time) {
    state.time = time;
  },
  // Establece el identificador del intervalo
  setIntervalId(id) {
    state.intervalId = id;
  },
};

export const actions = {
  // Inicia el temporizador
  startTimer() {
    // Crea un nuevo intervalo y actualiza el estado cada 1 segundo
    mutations.setIntervalId(
      setInterval(() => {
        mutations.setTime(state.time + 1);
      }, 1000)
    );
  },
  // Detiene el temporizador
  stopTimer() {
    // Limpia el intervalo actual
    clearInterval(state.intervalId);
    // Establece el identificador del intervalo a null
    mutations.setIntervalId(null);
  },
  // Agrega una cantidad específica de minutos al temporizador, segun la pista abierta o solución
  addMinutes(minute) {
    mutations.setTime(state.time + minute * 60);
  },
  // Reinicia el temporizador
  resetTime() {
    mutations.setTime(0);
  },
};
