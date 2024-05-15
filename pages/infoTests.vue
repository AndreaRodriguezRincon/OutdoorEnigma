<script setup>
// Define la seguridad de la página con el middleware "info-tests-url"
definePageMeta({
  middleware: "info-tests-url",
});
// Importación de los datos de los tests
import { tests } from "~/data/data";
const { query } = useRoute();
// Obtiene los datos de la pregunta actual basados en la query de la ruta
const questionData = tests[query.question];
const visible = ref(false);
</script>
<template>
  <div class="enigmas">
    <ConfirmExit v-model:visible="visible" />
    <TheHeaderEnigmaTest :activeIndex="questionData.activeIndex" />
    <div class="ml-3 mr-3 flex justify-content-center">
      <CardInfo :info="questionData" class="mt-4 border-round-3xl" />
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
