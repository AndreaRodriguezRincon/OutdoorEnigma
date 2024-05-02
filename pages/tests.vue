<script setup>
import { tests } from "~/data/data";
const { query } = useRoute();
const questionData = tests[query.question];
const visible = ref(false);
const visiblePucelano = ref(false);
const visibleMap = ref(false);
</script>
<template>
  <div class="enigmas">
    <DialogPucelano
      v-model:visible="visiblePucelano"
      :pucelano="questionData.pucelano"
    />
    <DialogMap v-model:visible="visibleMap" />
    <ConfirmExit v-model:visible="visible" />
    <TheHeaderEnigmaTest :activeIndex="questionData.activeIndex" />
    <div class="ml-3 mr-3 flex flex-column flex align-items-center">
      <div class="flex flex-row gap-8 flex align-items-center">
        <Pucelano @click="visiblePucelano = true" />
        <Timekeeper />
      </div>
      <CardTest :test="questionData" />
    </div>
    <div class="flex flex-row flex justify-content-between">
      <PButton
        rounded
        text
        icon="pi pi-arrow-left"
        label="Salir"
        class="text-orange mt-6 mb-4 ml-2 lg:ml-4 hover:bg-white focus:bg-white"
        @click="visible = true"
      />
      <MapPreview @click="visibleMap = true" :place="questionData" />
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
.text-orange {
  color: #c4661f;
}
</style>
