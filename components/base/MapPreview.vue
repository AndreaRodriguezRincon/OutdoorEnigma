<script setup>
const props = defineProps({
  place: {
    type: Object,
  },
});
const visible = ref(false);
</script>
<template>
  <div class="flex flex-column mt-4 mr-4 lg:mr-8 flex align-items-center">
    <img
      src="/images/enigma/mapaVistaPrevia.png"
      alt="Vista previa mapa"
      width="120"
      class=""
    />
    <span class="flex justify-content-center text-brown">
      {{ props.place.place }}
    </span>
  </div>
</template>
