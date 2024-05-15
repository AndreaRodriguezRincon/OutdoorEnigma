<script setup>
const props = defineProps({
  activeIndex: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <!-- Componente una vez iniciada las pruebas con timeline de las pruebas-->
  <div
    class="flex flex-column flex align-items-center bg-green p-2 border-round-bottom-2xl"
  >
    <img src="/images/base/logo.png" alt="Image" width="250px" />
    <TestLine class="w-12 lg:w-4" :activeIndex="props.activeIndex" />
  </div>
</template>
