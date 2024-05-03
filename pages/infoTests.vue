<script setup>
import { tests } from "~/data/data";
const { query } = useRoute();
const questionData = tests[query.question];
const visible = ref(false);
</script>
<template>
  <div class="enigmas">
    <ConfirmExit v-model:visible="visible" />
    <TheHeaderEnigmaTest :activeIndex="questionData.activeIndex" />
    <div class="ml-3 mr-3 flex justify-content-center">
      <CardInfo :info="questionData" class="mt-4 lg:w-6 border-round-3xl" />
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
</style>
