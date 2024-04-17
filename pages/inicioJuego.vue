<script setup>
const primeraPrueba = () => {
  router.push("/inicioJuego");
};
</script>

<template>
  <div class="enigmas">
    <div
      class="flex justify-content-center bg-green p-2 border-round-bottom-2xl"
    >
      <img
        src="../assets/images/base/logo.png"
        alt="Image"
        width="150px"
        class="lg:ml-6"
      />
    </div>
    <div class="mt-3 flex flex-column flex align-items-center">
      <PImage
        src="https://www.lanacion.com.ar/resizer/v2/algunas-cartas-guardadas-en-una-caja-con-viejas-LYDCQ5BQ55GWVHFER54E6CGFWQ.jpg?auth=6bfbab9a4695546129d4259ec686044cc047435c26aed8e89f6008e0b2e0ec2b&width=880&height=586&quality=70&smart=true"
        alt="Image"
        width="300"
        preview
        class="shadow-3"
      />
      <div class="flex justify-content-center mt-4">
        <PButton
          rounded
          label="Continuar"
          @click="primeraPrueba"
          class="bg-orange border-none shadow-3"
        />
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
.text-brown {
  color: #783d19;
}
.bg-green {
  background-color: #5f6f52;
}
.bg-orange {
  background-color: #c4661f;
}
</style>
