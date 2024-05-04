<script setup>
definePageMeta({
  middleware: "tests-url",
});
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
      class="w-10 lg:w-4"
    />
    <DialogMap v-model:visible="visibleMap" class="w-10 lg:w-4" />
    <ConfirmExit v-model:visible="visible"/>
    <TheHeaderEnigmaTest :activeIndex="questionData.activeIndex" />
    <div class="ml-3 mr-3 flex flex-column flex align-items-center">
      <div class="flex flex-row gap-6 flex align-items-center">
        <Pucelano @click="visiblePucelano = true" />
        <Timekeeper class="mt-6 mr-8 shadow-5" />
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
<style scoped>
.enigmas {
  background: linear-gradient(
    rgba(169, 179, 136, 100%),
    rgba(201, 137, 88, 30%)
  );
}
.text-orange {
  color: #c4661f;
}
</style>
