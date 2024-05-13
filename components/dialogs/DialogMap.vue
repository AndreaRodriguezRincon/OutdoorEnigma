<script setup>
const props = defineProps({
  localizacion: {
    type: Object,
    required: true,
  },
});
const visible = ref(false);
</script>
<template>
  <PDialog
    v-model:visible="visible"
    modal
    :header="`${props.localizacion.place}`"
    class="text-brown min-w-min text-brown shadow-3"
    :pt="{
      title: {
        class: 'text-orange-700 ',
      },
    }"
  >
    <Map class="mt-4 flex align-items-center" :localizacion="localizacion" />
  </PDialog>
</template>
