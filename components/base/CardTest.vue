<script setup>
const router = useRouter();
const props = defineProps({
  test: {
    type: Object,
    required: true,
  },
});
const answer = ref("");
const correctAnswer = ref(null);
const visible = ref(false);
const checkAnswer = () => {
  const normalizedAnswer = answer.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if (Array.isArray(props.test.answer)) {
    correctAnswer.value = props.test.answer.some(
      (option) => option === normalizedAnswer
    );
  } else {
    correctAnswer.value = props.test.answer === normalizedAnswer;
  }

  if (correctAnswer.value) {
    router.push({
      path: "infoTests",
      query: { question: props.test.urlQueryParam },
    });
  } else {
    answer.value = "";
  }
};
</script>
<template>
  <PCard
    class="mt-4 w-full lg:w-4 border-round-3xl border-solid border-green-800 shadow-3"
  >
    <template #content>
      <div class="flex flex-column flex align-items-center">
        <span class="mr-2 text-center text-brown">
          {{ props.test.question }}
        </span>
        <img
          :src="`${props.test.imagePath}`"
          alt="Imagen prueba"
          width="350"
          class="mt-4"
        />
        <PFloatLabel class="mt-6">
          <PInputText
            v-if="props.test.type === 'input'"
            id="answer"
            v-model="answer"
            class="text-brown border-round-xl border-2 shadow-3 w-15rem"
          />
          <PInputMask
            v-else-if="props.test.type === 'code'"
            id="answer"
            v-model="answer"
            mask="99-9"
            class="text-brown border-round-xl border-2 shadow-3 w-15rem"
          />
          <PInputMask
            v-else
            id="answer"
            v-model="answer"
            mask="99-99-9999"
            class="text-brown border-round-xl border-2 shadow-3 w-15rem"
          />
          <label for="answer" class="text-brown">Respuesta</label>
        </PFloatLabel>
        <span v-if="correctAnswer === false" class="mt-2 text-orange"
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
</template>

