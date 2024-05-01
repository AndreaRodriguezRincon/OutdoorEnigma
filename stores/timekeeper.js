import { defineStore } from "pinia";

export const useTimekeeper = defineStore({
  id: "cronometro",
  state: () => ({
    tiempo: 0,
    corriendo: false,
    intervalId: null,
  }),
  actions: {
    iniciarCronometro() {
      if (!this.corriendo) {
        this.corriendo = true;
        this.intervalId = setInterval(() => {
          this.tiempo++;
        }, 1000);
      }
    },
    detenerCronometro() {
      if (this.corriendo) {
        this.corriendo = false;
        clearInterval(this.intervalId);
      }
    },
    reiniciarCronometro() {
      this.tiempo = 0;
      this.detenerCronometro();
    },
  },
});
