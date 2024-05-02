<script setup>
import { ref } from "vue";

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
  console.log("Se hizo clic en el tab:", event.index);
};
</script>
<template>
  <PAccordion
    :activeIndex="null"
    class="mt-4 "
    @tab-click="mostrarMensaje"
  >
    <PAccordionTab
      v-for="(tab, index) in tabs"
      :key="tab.title"
      :header="tab.title"
    >
      <template v-if="!tab.imagen">
        <p class="m-0">{{ tab.content }}</p>
      </template>
      <template v-else>
        <img :src="tab.imagePath" alt="Imagen pista" width="250" class="flex align-items-center "/>
      </template>
    </PAccordionTab>
  </PAccordion>
</template>
