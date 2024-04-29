<script setup>
const router = useRouter();
const explicarPucelano = () => {
  router.push("/pucelano");
};
const visible = ref(false);
</script>
<template>
  <div class="enigmas">
    <TheHeaderEnigma />
    <ConfirmExit v-model:visible="visible" />
    <div class="mt-3 flex flex-column flex align-items-center">
      <PImage
        src="/_nuxt/assets/images/juego/carta.png"
        alt="Image"
        width="300"
        preview
      />
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
        class="text-orange mt-6 mb-4 ml-2 lg:ml-4 hover:bg-white focus:bg-white"
        @click="visible = true"
      />
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
.text-orange {
  color: #c4661f;
}
</style>
