<script setup>
import { ref } from "vue";
import { actions } from "../stores/timerStore";

const props = defineProps({
  pucelano: {
    type: Object,
    required: true,
  },
});

const tabs = ref([
  {
    title: "Pista 1",
    content: props.pucelano.clue1.text,
    imagen: props.pucelano.clue1.imagen,
    imagePath: props.pucelano.clue1.imagePath,
  },
  {
    title: "Pista 2",
    content: props.pucelano.clue2.text,
    imagen: props.pucelano.clue2.imagen,
    imagePath: props.pucelano.clue2.imagePath,
  },
  {
    title: "Pista 3",
    content: props.pucelano.clue3.text,
    imagen: props.pucelano.clue3.imagen,
    imagePath: props.pucelano.clue3.imagePath,
  },
  {
    title: "Solución",
    content: props.pucelano.answer.text,
    imagen: props.pucelano.answer.imagen,
    imagePath: props.pucelano.answer.imagePath,
  },
]);

const mostrarMensaje = (event) => {
  switch (event.index) {
    case 0:
      if (!props.pucelano.clue1.addTime) {
        props.pucelano.clue1.addTime = true;
        actions.addMinutes(1);
      }
      break;
    case 1:
      if (!props.pucelano.clue2.addTime) {
        props.pucelano.clue2.addTime = true;
        actions.addMinutes(2);
      }
      break;
    case 2:
      if (!props.pucelano.clue3.addTime) {
        props.pucelano.clue3.addTime = true;
        actions.addMinutes(3);
      }
      break;
    case 3:
      if (!props.pucelano.answer.addTime) {
        props.pucelano.answer.addTime = true;
        actions.addMinutes(5);
      }
      break;
  }
};
</script>
<template>
  <PAccordion
    :activeIndex="null"
    class="mt-4 border-0"
    @tab-click="mostrarMensaje"
  >
    <PAccordionTab
      v-for="(tab, index) in tabs"
      :key="tab.title"
      :header="tab.title"
    >
      <template v-if="!tab.imagen">
        <span class="text-brown">{{ tab.content }}</span>
      </template>
      <template v-else>
        <img :src="tab.imagePath" alt="Imagen pista" width="250" />
      </template>
    </PAccordionTab>
  </PAccordion>
</template>

