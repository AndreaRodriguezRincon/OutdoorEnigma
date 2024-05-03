<script setup>
const { query } = useRoute();
const router = useRouter();
const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
});
const showPhone = () => {
  router.push({
    path: "phoneTests",
    query: { question: props.info.urlQueryParam },
  });
};
</script>
<template>
  <PCard class="mt-4 lg:w-6 border-round-3xl">
    <template #title>
      <span class="text-3xl text-green flex justify-content-center"
        >¡CORRECTO!</span
      >
    </template>
    <template #content>
      <div class="flex flex-column flex align-items-center">
        <div class="flex flex-row gap-4">
          <img
            :src="props.info.imageInfoPath"
            alt="Imagen información prueba"
            width="125"
          />
          <span class="ml-3 mr-3 text-brown text-justify">
            {{ props.info.textInfo }}
          </span>
        </div>
        <PButton
          rounded
          label="Continuar"
          class="mt-4 bg-orange border-none shadow-3"
          @click="showPhone"
        />
      </div>
    </template>
  </PCard>
</template>
