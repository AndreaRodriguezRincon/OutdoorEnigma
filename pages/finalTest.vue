<script setup>
import { actions } from "../stores/timerStore";
const router = useRouter();
const activeIndex = ref(11);
const visible = ref(false);
const answer = ref(null);
const isCorrectAnswer = ref(null);
// Función para comprobar la respuesta
const checkAnswer = () => {
  const correctAnswer = "VALLADOLID";
  if (answer.value.toUpperCase() === correctAnswer) {
    // Detiene el temporizador y redirige a la página de ganador
    actions.stopTimer();
    router.push("/winnerEnigma");
  } else {
    // Indica que la respuesta es incorrecta y limpia la respuesta
    isCorrectAnswer.value = false;
    answer.value = "";
  }
};
</script>
<template>
  <div class="enigmas">
    <ConfirmExit v-model:visible="visible" class="w-10 lg:w-6" />
    <TheHeaderEnigmaTest :activeIndex="activeIndex" />
    <div class="ml-3 mr-3 mt-4 flex justify-content-center">
      <PCard class="mt-4 lg:w-4 border-round-3xl border-solid border-green-800">
        <template #title>
          <span class="text-3xl text-orange flex justify-content-center"
            >¡PRUEBA FINAL!</span
          >
        </template>
        <template #content>
          <div class="flex flex-column flex align-items-center">
            <Timekeeper class="mt-2" />
            <span class="mt-4 ml-3 mr-3 text-brown text-center"
              >Introduce la palabra formada con las letras proporcionadas tras
              superar cada una de las pruebas y recuperar los moviles.</span
            >
            <PInputOtp v-model="answer" class="mt-4" :length="10">
              <template #default="{ attrs, events }">
                <input
                  type="text"
                  v-bind="attrs"
                  v-on="events"
                  class="custom-otp-input"
                />
              </template>
            </PInputOtp>
            <span v-if="isCorrectAnswer === false" class="mt-4 text-orange"
              >* Respuesta incorrecta</span
            >
            <PButton
              rounded
              label="Comprobar"
              class="mt-4 bg-orange border-none shadow-3"
              @click="checkAnswer"
            />
          </div>
        </template>
      </PCard>
    </div>
    <div>
      <PButton
        rounded
        text
        icon="pi pi-arrow-left"
        label="Salir"
        class="text-orange mt-6 mb-4 ml-2 lg:ml-4 hover:bg-white focus:bg-white"
        @click="visible = true"
      />
    </div>
  </div>
</template>
<style scoped>
.custom-otp-input {
  color: #783d19;
  width: 30px;
  font-size: 25px;
  border: 0 none;
  appearance: none;
  text-align: center;
  transition: all 0.2s;
  background: transparent;
  border-bottom: 2px solid #a9b388;
}

.custom-otp-input:focus {
  outline: 0 none;
  border-bottom-color: #c4661f;
}
</style>
