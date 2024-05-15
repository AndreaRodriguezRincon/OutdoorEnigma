<script setup>
// Definición de propiedades del componente
const props = defineProps({
  pucelano: {
    type: Object,
    required: true,
  },
});
//Bandera para controlar la visibilidad del diálogo
const visible = ref(false);
</script>
<template>
  <!-- Componente de dialogo para mostrar las pistas de la prueba -->
  <PDialog
    v-model:visible="visible"
    modal
    header="Pucelano"
    class="text-brown min-w-min text-brown shadow-3"
    :pt="{
      title: {
        class: 'text-orange-700 ',
      },
    }"
  >
    <div class="flex align-items-center gap-4">
      <!-- Imagen del avatar de Pucelano -->
      <img
        src="/images/enigma/pucelano.png"
        alt="Pucelano"
        width="100"
        class="mt-2"
      />
      <span class="text-brown">Hola, ¿necesitas mi ayuda?</span>
    </div>
    <!-- Incluye el componente de acordeon con las pistas -->
    <AccordionTracks :pucelano="props.pucelano" />
  </PDialog>
</template>
