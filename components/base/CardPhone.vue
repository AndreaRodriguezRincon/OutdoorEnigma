<script setup>
const router = useRouter();
const props = defineProps({
  phone: {
    type: Object,
    required: true,
  },
});
const nextTest = () => {
  router.push({
    path: "tests",
    query: { question: props.phone.urlQueryParamNextTest },
  });
};
</script>
<template>
  <PCard class="mt-4 lg:w-6 border-round-3xl">
    <template #title>
      <span class="text-3xl text-green flex justify-content-center"
        >¡ENHORABUENA!</span
      >
      <span class="mt-2 text-base text-lightGreen flex justify-content-center"
        >Has recuperado el {{ props.phone.index }} móvil</span
      >
    </template>
    <template #content>
      <div class="flex flex-column flex align-items-center">
        <img
          :src="`${props.phone.imagePhone}`"
          alt="Imagen móvil con letra"
          width="300"
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
</template>
<style scoped>
.text-brown {
  color: #783d19;
}
.text-green {
  color: #5f6f52;
}
.text-lightGreen {
  color: #a9b388;
}
.text-orange {
  color: #c4661f;
}
.bg-orange {
  background-color: #c4661f;
}
</style>
