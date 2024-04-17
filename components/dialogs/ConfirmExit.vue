<script setup>
const router = useRouter();
const dialogRef = ref();
const visible = ref(false);
const salirJuego = () => {
  router.push("../../");
};
</script>
<template>
  <PDialog
    ref="dialogRef"
    v-model:visible="visible"
    modal
    header="Salir del Juego"
    class="text-brown min-w-min text-brown shadow-3"
  >
    <span class="text-brown">¿Estás seguro que deseas abandonar el juego?</span>
    <div class="flex justify-content-center mt-4 gap-3">
      <PButton
        rounded
        label="Cancelar"
        @click="dialogRef.close"
        class="bg-orange border-none shadow-3"
      />
      <PButton
        rounded
        label="Abandonar"
        @click="salirJuego"
        class="bg-orange border-none shadow-3"
      />
    </div>
  </PDialog>
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
