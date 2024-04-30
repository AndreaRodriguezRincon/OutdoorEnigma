<script setup>
const visible = ref(false);
</script>
<template>
  <PDialog
    v-model:visible="visible"
    modal
    header="Plaza Mayor"
    class="text-brown min-w-min text-brown shadow-3"
    :pt="{
      title: {
        class: 'text-orange-700 ',
      },
    }"
  >
    <img
      src="../../assets/images/base/mapaVistaPrevia.png"
      alt="Pucelano"
      width="120"
  /></PDialog>
</template>

