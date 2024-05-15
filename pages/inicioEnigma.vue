<script setup>
const router = useRouter();
  // Función para redirigir a la página "pucelano"
const explicarPucelano = () => {
  router.push("/pucelano");
};
const visible = ref(false);
// Variables reactivas para almacenar la latitud y longitud obtenidas de la geolocalización
const lat = ref(0);
const lng = ref(0);
 // Función para obtener la ubicación actual del usuario mediante geolocalización
const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat.value = position.coords.latitude;
      lng.value = position.coords.longitude;
    });
  }
};
//para ejecutar la función getLocation() después de que el componente se monta
onMounted(() => {
  getLocation();
});
</script>
<template>
  <div class="enigmas">
    <TheHeaderEnigma />
    <ConfirmExit v-model:visible="visible" />
    <div class="mt-3 flex flex-column flex align-items-center">
      <PImage src="/images/enigma/carta.png" alt="Image" width="350" preview />
      <div class="flex justify-content-center mt-4">
        <PButton
          rounded
          label="Continuar"
          class="bg-orange border-none shadow-3"
          @click="explicarPucelano"
        />
      </div>
    </div>
    <div>
      <PButton
        rounded
        text
        icon="pi pi-arrow-left"
        label="Salir"
        class="text-orange mt-6 ml-2 lg:ml-4 hover:bg-white focus:bg-white"
        @click="visible = true"
      />
    </div>
  </div>
</template>
