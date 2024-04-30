<template>
  <PAccordion :activeIndex="null" class="mt-4">
    <PAccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title">
      <p class="m-0">{{ tab.content }}</p>
    </PAccordionTab>
  </PAccordion>
</template>

<script setup>
const tabs = ref([
  { title: "Pista 1", content: "Content 1" },
  { title: "Pista 2", content: "Content 2" },
  { title: "Pista 3", content: "Content 3" },
  { title: "Solución", content: "Content 3" },
]);
</script>
