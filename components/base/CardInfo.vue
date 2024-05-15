<script setup>
// Importación de utilidades de enrutamiento
const { query } = useRoute();
const router = useRouter();
// Definición de las propiedades del componente
const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
});
// Función para mostrar la pagina de teléfono con letras
const showPhone = () => {
  router.push({
    // Redirige a la página "phoneTests" con el parámetro de consulta 'question'
    path: "phoneTests",
    query: { question: props.info.urlQueryParam },
  });
};
</script>
<template>
  <!-- Componente de tarjeta -->
  <PCard class="mt-4 lg:w-4 border-round-3xl border-solid border-green-800">
    <template #title>
      <span class="text-3xl text-green flex justify-content-center"
        >¡CORRECTO!</span
      >
    </template>
    <!-- Contenido del componente -->
    <template #content>
      <div class="flex flex-column flex align-items-center">
        <div class="text-justify">
          <!-- Imagen y texto de información de la prueba -->
          <img
            :src="props.info.imageInfoPath"
            alt="Imagen información prueba"
            height="200"
            class="img-float mr-4"
          />
          <span class="text-brown">
            {{ props.info.textInfo }}
          </span>
        </div>
        <!-- Botón para continuar -->
        <PButton
          rounded
          label="Continuar"
          class="mt-4 bg-orange border-none shadow-3"
          @click="showPhone"
        />
      </div>
    </template>
  </PCard>
</template>
<style scoped>
.img-float {
  float: left;
}
.text-justify {
  text-align: justify;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
