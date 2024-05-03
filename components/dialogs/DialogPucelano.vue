<script setup>
const props = defineProps({
  pucelano: {
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
    header="Pucelano"
    class="text-brown min-w-min text-brown shadow-3"
    :pt="{
      title: {
        class: 'text-orange-700 ',
      },
    }"
  >
    <div class="flex align-items-center gap-4">
      <img
        src="/images/enigma/pucelano.png"
        alt="Pucelano"
        width="120"
        class="mt-2"
      />
      <span class="text-brown">Hola, ¿necesitas mi ayuda?</span>
    </div>
    <AccordionTracks :pucelano="props.pucelano" />
  </PDialog>
</template>
<style scoped>
.text-brown {
  color: #783d19;
}
</style>
