<script setup>
// Definición de las propiedades del componente
const props = defineProps({
  activeIndex: {
    type: Number,
    required: true,
  },
});
// Referencia para almacenar las letras tras superar la prueba
const letras = ref([
  { label: "L" },
  { label: "I" },
  { label: "L" },
  { label: "O" },
  { label: "A" },
  { label: "D" },
  { label: "A" },
  { label: "L" },
  { label: "D" },
  { label: "V" },
]);
</script>
<template>
  <div class="stepsDiv">
    <!-- Componente de timeline -->
    <PSteps
      :model="letras"
      class="custom-steps"
      :readonly="true"
      :activeStep="1"
    >
      <template #item="{ item, active, index, label }">
        <!-- Estilos en función de si se esta en la pregunta actual o no  -->
        <span
        
          :class="[
            'inline-flex align-items-center justify-content-center align-items-center border-circle  border-1 text-xl h-2rem w-2rem z-1 mb-5',
            {
              'bg-orange text-white ': index === props.activeIndex,
              'bg-white text-green ': index !== props.activeIndex,
            },
          ]"
        >
        <!-- Si el numero de prueba es mayor que el indice, se muetra la letra y si no el numero de prueba  + 1  -->
          {{ index < props.activeIndex ? label : index + 1 }}
        </span>
      </template>
    </PSteps>
  </div>
</template>

