<script setup>
// Importación de utilidades de enrutamiento
const router = useRouter();
// Definición de las propiedades del componente
const props = defineProps({
  test: {
    type: Object,
    required: true,
  },
});
// Respuesta ingresada por el usuario
const answer = ref("");
// Indicador de visibilidad del mensaje de respuesta incorrecta
const correctAnswer = ref(null);
const visible = ref(false);

// Función para verificar la respuesta ingresada por el usuario
const checkAnswer = () => {
  // Covertir la respuesta ingresada por el usuario a minúsculas y sin acentos para la comparación
  const normalizedAnswer = answer.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  //Si la solución tiene varias opciones posibles en un array, comprobar todas
  if (Array.isArray(props.test.answer)) {
    correctAnswer.value = props.test.answer.some(
      (option) => option === normalizedAnswer
    );
    // Si es una respuesta única, se compara directamente
  } else {
    correctAnswer.value = props.test.answer === normalizedAnswer;
  }
  // Si la respuesta es correcta, se redirige a la página de información de la prueba
  if (correctAnswer.value) {
    router.push({
      path: "infoTests",
      query: { question: props.test.urlQueryParam },
    });
    // Si la respuesta es incorrecta, se limpia el campo de entrada de respuesta
  } else {
    answer.value = "";
  }
};
</script>
<template>
  <!-- Componente de tarjeta para la pregunta -->
  <PCard
    class="mt-4 w-full lg:w-4 border-round-3xl border-solid border-green-800 shadow-3"
  >
    <!-- Contenido de la tarjeta -->
    <template #content>
      <div class="flex flex-column flex align-items-center">
        <!-- Pregunta de la prueba -->
        <span class="mr-2 text-center text-brown">
          {{ props.test.question }}
        </span>
        <!-- Imagen asociada a la pregunta -->
        <img
          :src="`${props.test.imagePath}`"
          alt="Imagen prueba"
          class="mt-4"
        />
        <!-- Campo de respuesta según el tipo de prueba -->
        <PFloatLabel class="mt-6">
          <PInputText
            v-if="props.test.type === 'input'"
            id="answer"
            autocomplete="off"
            v-model="answer"
            class="text-brown border-round-xl border-2 shadow-3 w-15rem"
          />
          <PInputMask
            v-else-if="props.test.type === 'code'"
            id="answer"
            v-model="answer"
            autocomplete="off"
            mask="99-9"
            class="text-brown border-round-xl border-2 shadow-3 w-15rem"
          />
          <PInputMask
            v-else
            id="answer"
            v-model="answer"
            autocomplete="off"
            mask="99-99-9999"
            class="text-brown border-round-xl border-2 shadow-3 w-15rem"
          />
          <label for="answer" class="text-brown">Respuesta</label>
        </PFloatLabel>
        <!-- Mensaje de respuesta incorrecta (si corresponde) -->
        <span v-if="correctAnswer === false" class="mt-2 text-orange"
          >* Respuesta incorrecta</span
        >
        <!-- Botón para comprobar la respuesta -->
        <PButton
          rounded
          label="Comprobar"
          class="mt-4 bg-orange border-none shadow-3"
          @click="checkAnswer"
        />
      </div>
    </template>
  </PCard>
</template>
<style scoped>
img {
  max-width: 90%;
  height: auto;
}
</style>
