<script setup>
// Definición de propiedades del componente
const props = defineProps({
  localizacion: {
    type: Object,
    required: true,
  },
});
// Bandera para controlar la visibilidad del diálogo
const visible = ref(false);
</script>
<template>
  <!-- Componente PDialog para mostrar el mapa con la ruta  -->
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
    <!-- Incluye el componente Map  -->
    <Map class="mt-4 flex align-items-center" :localizacion="localizacion" />
  </PDialog>
</template>
