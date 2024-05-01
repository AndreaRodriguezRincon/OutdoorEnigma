<script setup>
const props = defineProps({
  pucelano: {
    type: Object,
    required: true,
  },
});
const tabs = ref([
  { title: "Pista 1", content: props.pucelano.clue1.text },
  { title: "Pista 2", content: props.pucelano.clue2.text },
  { title: "Pista 3", content: props.pucelano.clue3.text },
  { title: "Solución", content: props.pucelano.answer.text },
]);
</script>
<template>
  <PAccordion :activeIndex="null" class="mt-4">
    <PAccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title">
      <p class="m-0">{{ tab.content }}</p>
    </PAccordionTab>
  </PAccordion>
</template>
