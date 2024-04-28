<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const items = ref([
  {
    label: "Inicio",
    command: () => {
      router.push("/");
    },
  },
  {
    label: "Enigmas",
    command: () => {
      router.push("/enigmas");
    },
  },
  {
    label: "Quienes somos",
    command: () => {
      router.push("/quienesSomos");
    },
  },
]);
</script>
<template>
  <PMenubar
    :model="items"
    :pt="{
      root: {
        class: 'flex justify-content-between border-transparent bg-transparent',
      },
      menuitem: {
        class: 'selected:bg-white',
      },
      content: {
        class: 'hover:bg-white onclick:bg-white',
      },
      label: {
        class: 'text-orange-700',
      },
      button: {
        class: 'text-orange-700 bg-transparent',
      },
    }"
  >
    <template #start>
      <img src="../../assets/images/base/logo.png" alt="Logo" class="h-4rem" />
    </template>
  </PMenubar>
</template>
