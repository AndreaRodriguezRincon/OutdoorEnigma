<script setup>
const router = useRouter();
const mostrarHistoriaEnigmaValladolid = () => {
  router.push("/enigmaValladolid");
};
</script>

<template>
  <div class="enigmas">
    <TheHeader />
    <div class="ml-3 mr-3 flex justify-content-center">
      <div class="flex flex-column mt-4">
        <span class="font-bold text-xl text-brown"> Todos los enigmas: </span>
        <div class="flex flex-column flex align-items-center mt-2">
          <img
            src="/images/enigma/enigmaValladolid.jpg"
            alt="Image"
            width="350px"
            @click="mostrarHistoriaEnigmaValladolid"
            class="imgEnigmaValladolid mt-2 shadow-3"
          />
          <span class="font-bold text-brown mt-3">
            "La Noche de los Treinta en Valladolid"
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.enigmas {
  background: linear-gradient(
    rgba(169, 179, 136, 100%),
    rgba(201, 137, 88, 30%)
  );
  height: 100vh;
}
.imgEnigmaValladolid {
  border-radius: 20px;
  cursor: pointer;
}
.text-brown {
  color: #783d19;
}
</style>
