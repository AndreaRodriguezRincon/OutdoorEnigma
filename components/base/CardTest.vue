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
  if (props.test.answer === answer.value) {
    correctAnswer.value = true;
    router.push({
      path: "infoTests",
      query: { question: props.test.urlQueryParam },
    });
  } else {
    correctAnswer.value = false;
    answer.value = "";
  }
};
</script>
<template>
  <PCard class="mt-4 lg:w-6 border-green border-round-3xl">
    <template #content>
      <div class="flex flex-column flex align-items-center">
        <span class="mr-2 text-center text-brown">
          {{ props.test.question }}
        </span>
        <img
          :src="`${props.test.imagePath}`"
          alt="Imagen prueba"
          width="250"
          class="mt-4"
        />
        <PFloatLabel class="mt-6">
          <PInputText
            id="answer"
            v-model="answer"
            class="border-round-xl border-2 shadow-3"
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
<style scoped>
.text-brown {
  color: #783d19;
}
.text-orange {
  color: #c4661f;
}
.bg-orange {
  background-color: #c4661f;
}
.bg-green {
  background-color: #5f6f52;
}
</style>
