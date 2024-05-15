<script setup>
// Importación de utilidades de enrutamiento
import { useRouter } from "vue-router";
const router = useRouter();

// Referencia para almacenar los elementos del menú
const items = ref([
  {
    label: "Inicio",
    // Función para redirigir al usuario a la página de inicio al hacer clic en este elemento del menú
    command: () => {
      router.push("/");
    },
  },
  {
    label: "Enigmas",
    // Función para redirigir al usuario a la página de enigmas al hacer clic en este elemento del menú
    command: () => {
      router.push("/enigmas");
    },
  },
  {
    label: "Quienes somos",
    // Función para redirigir al usuario a la página "Quiénes somos" al hacer clic en este elemento del menú
    command: () => {
      router.push("/quienesSomos");
    },
  },
]);
</script>
<template>
  <!-- Componente de menu de navegación -->
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
  <!-- Contenido para el inicio del menú -->
    <template #start>
      <img src="/images/base/logo.png" alt="Logo" class="h-4rem" />
    </template>
  </PMenubar>
</template>
