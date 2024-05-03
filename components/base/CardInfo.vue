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
  <PCard class="mt-4 lg:w-4 border-round-3xl border-solid border-green-800">
    <template #title>
      <span class="text-3xl text-green flex justify-content-center"
        >¡CORRECTO!</span
      >
    </template>
    <template #content>
      <div class="flex flex-column flex align-items-center">
        <div class="text-justify">
          <img
            :src="props.info.imageInfoPath"
            alt="Imagen información prueba"
            height="250"
            class="img-float mr-4"
          />
          <span class="text-brown">
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
<style scoped>
.text-brown {
  color: #783d19;
}
.text-green {
  color: #5f6f52;
}
.bg-orange {
  background-color: #c4661f;
}
.img-float {
  float: left;
}
.text-justify {
  text-align: justify;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
