<script setup>
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
  { label: "v" },
]);

const activeIndex = 3;
</script>
<template>
  <div class="stepsDiv">
    <PSteps
      :model="letras"
      class="custom-steps"
      :readonly="true"
      :activeStep="1"
    >
      <template #item="{ item, active, index, label }">
        <span
          :class="[
            'inline-flex align-items-center justify-content-center align-items-center border-circle  border-1 text-xl h-2rem w-2rem z-1 mb-5',
            {
              'bg-orange text-white ': index === activeIndex,
              'bg-white text-green ': index !== activeIndex,
            },
          ]"
        >
          {{ index < activeIndex ? label : index + 1 }}
        </span>
      </template>
    </PSteps>
  </div>
</template>
<style scoped>
.bg-orange {
  background-color: #c4661f;
}
.text-green {
  color: #a9b388;
}
</style>
