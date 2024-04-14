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
      content: {
        class: 'hover:bg-orange-700',
      },
      label: {
        class: 'text-white',
      },
      button: {
        class: 'text-orange-700',
      },
    }"
  >
    <template #start>
      <img src="../../assets/images/base/logo.png" alt="Logo" class="h-4rem" />
    </template>
  </PMenubar>
</template>
