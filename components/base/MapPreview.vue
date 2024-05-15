<script setup>
// Se definen las propiedades del componente
const props = defineProps({
  place: {
    type: Object,
  },
});
//Bandera para controlar la visibilidad del componente
const visible = ref(false);
</script>
<template>
  <div class="flex flex-column mt-4 mr-4 lg:mr-8 flex align-items-center">
    <!-- Imagen de vista previa del mapa -->
    <img
      src="/images/enigma/mapaVistaPrevia.png"
      alt="Vista previa mapa"
      width="120"
      class=""
    />
     <!-- Lugar de la ciudad a la que el usuario tiene que ir para resolver la prueba -->
    <span class="flex justify-content-center text-brown">
      {{ props.place.place }}
    </span>
  </div>
</template>
