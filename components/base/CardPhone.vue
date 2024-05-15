<script setup>
// Importación de utilidades de enrutamiento
const router = useRouter();
// Definición de las propiedades del componente
const props = defineProps({
  phone: {
    type: Object,
    required: true,
  },
});
// Función para mostrar siguiente prueba
const nextTest = () => {
  // Si la prueba actual es la última, redirige a la página "finalTest"
  if (props.phone.urlQueryParam === "test10") {
    router.push("/finalTest");
  } else {
    // Si no es la última, redirige a la siguiente pregunta
    router.push({
      path: "tests",
      query: { question: props.phone.urlQueryParamNextTest },
    });
  }
};
</script>
<template>
  <!-- Componente de tarjeta -->
  <PCard
    class="mt-4 w-full lg:w-4 border-round-3xl border-solid border-green-800"
  >
    <template #title>
      <span class="text-3xl text-green flex justify-content-center"
        >¡ENHORABUENA!</span
      >
      <span class="mt-2 text-base text-lightGreen flex justify-content-center"
        >Has recuperado el {{ props.phone.index }} móvil</span
      >
    </template>
    <!-- Contenido del componente -->
    <template #content>
      <div class="flex flex-column flex align-items-center">
        <!-- Imagen de móvil con letra -->
        <img
          :src="`${props.phone.imagePhone}`"
          alt="Imagen móvil con letra"
          width="300"
        />
        <PButton
          rounded
          label="Continuar"
          class="mt-4 bg-orange border-none shadow-3"
          @click="nextTest"
        />
      </div>
    </template>
  </PCard>
</template>
