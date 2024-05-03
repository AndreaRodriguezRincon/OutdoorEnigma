<script setup>
const router = useRouter();
const activeIndex = ref(11);
const visible = ref(false);
const value = ref(null);
const correctAnswer = ref("VALLADOLID");
const isCorrectAnswer = ref(null);
const checkAnswer = () => {
  const correctAnswer = "VALLADOLID";
  if (value.value === correctAnswer) {
    router.push("/pucelano");
  } else {
    isCorrectAnswer.value = false;
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
            <PInputOtp v-model="value" class="mt-4" :length="10">
              <template #default="{ attrs, events }">
                <input
                  type="text"
                  v-bind="attrs"
                  v-on="events"
                  class="custom-otp-input"
                />
              </template>
            </PInputOtp>
            <span v-if="isCorrectAnswer === false">* Respuesta incorrecta</span>
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
.enigmas {
  background: linear-gradient(
    rgba(169, 179, 136, 100%),
    rgba(201, 137, 88, 30%)
  );
  height: 100vh;
}

.text-brown {
  color: #783d19;
}
.text-green {
  color: #5f6f52;
}
.text-orange {
  color: #c4661f;
}
.bg-orange {
  background-color: #c4661f;
}
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
