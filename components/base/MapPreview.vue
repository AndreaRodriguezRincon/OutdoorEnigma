<script setup>
const props = defineProps({
  place: {
    type: Object,
  },
});
const visible = ref(false);
</script>
<template>
  <div class="flex flex-column mt-4 mr-4 mb-4">
    <img
      src="../../assets/images/base/mapaVistaPrevia.png"
      alt="Vista previa mapa"
      width="120"
    />
    <span class="flex justify-content-center text-brown">
      {{ props.place.place }}
    </span>
  </div>
</template>
<style scoped>
.text-brown {
  color: #783d19;
}
</style>
