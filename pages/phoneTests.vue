<script setup>
import { tests } from "~/assets/data";
const { query } = useRoute();
const router = useRouter();
const questionData = tests[query.question];
const nextTest = () => {
  router.push({
    path: "tests",
    query: { question: questionData.urlQueryParamNextTest },
  });
};
const visible = ref(false);
</script>
<template>
  <div class="enigmas">
    <ConfirmExit v-model:visible="visible" />
    <TheHeaderEnigmaTest :activeIndex="questionData.activeIndex" />
    <div class="ml-3 mr-3 flex justify-content-center">
      <PCard class="mt-4 lg:w-6 border-round-3xl">
        <template #title>
          <span class="text-3xl text-green flex justify-content-center"
            >¡ENHORABUENA!</span
          >
          <span class="mt-2 text-base text-green flex justify-content-center"
            >Has recuperado el {{ questionData.index }} móvil</span
          >
        </template>
        <template #content>
          <div class="flex flex-column flex align-items-center">
            <img
              :src="questionData.imagePhone"
              alt="Imagen móvil con letra"
              width="125"
            />
            <PButton
              rounded
              label="Continuar"
              class="mt-4 bg-orange border-none shadow-3"
              @click="nextTest"
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
</style>
