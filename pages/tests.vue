<script setup>
// Define la seguridad de la página con el middleware "tests-url"
definePageMeta({
  middleware: "tests-url",
});
import { tests } from "~/data/data";
const { query } = useRoute();
const questionData = tests[query.question];
const visible = ref(false);
const visiblePucelano = ref(false);
const visibleMap = ref(false);
// Se ejecuta al montar el componente para cargar los scripts de Leaflet y Targomo para que cuando se abra el dialogo ya esten cargados previamente y no genere errores
onMounted(() => {
  const script1 = document.createElement("script");
  script1.src = "https://unpkg.com/leaflet@1.0.3/dist/leaflet-src.js";
  script1.crossOrigin = "";
  document.body.appendChild(script1);

  const script2 = document.createElement("script");
  script2.src = "https://releases.targomo.com/leaflet/latest-full.min.js";
  document.body.appendChild(script2);
});
</script>
<template>
  <div class="enigmas">
    <DialogPucelano
      v-model:visible="visiblePucelano"
      :pucelano="questionData.pucelano"
      class="w-10 lg:w-4"
    />
    <DialogMap
      v-model:visible="visibleMap"
      class="w-10 lg:w-2 md:w-2"
      :localizacion="questionData"
    />
    <ConfirmExit v-model:visible="visible" />
    <TheHeaderEnigmaTest :activeIndex="questionData.activeIndex" />
    <div class="ml-3 mr-3 flex flex-column flex align-items-center">
      <div class="flex flex-row gap-6 flex align-items-center">
        <Pucelano @click="visiblePucelano = true" />
        <Timekeeper class="mt-6 mr-4 shadow-5" />
      </div>
      <CardTest :test="questionData" class="border-green" />
    </div>
    <div class="flex flex-row flex justify-content-between pb-6">
      <div class="mt-8">
        <PButton
          rounded
          text
          icon="pi pi-arrow-left"
          label="Salir"
          class="text-orange ml-2 lg:ml-4 hover:bg-white focus:bg-white"
          @click="visible = true"
        />
      </div>
      <MapPreview @click="visibleMap = true" :place="questionData" />
    </div>
  </div>
</template>
