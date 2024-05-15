<script setup>
// Importación de utilidades de enrutamiento
const router = useRouter();
// Referencia al componente de diálogo
const dialogRef = ref();
// Bandera para controlar la visibilidad del diálogo
const visible = ref(false);
  // Función para salir del enigma y redirigir al usuario a la página principal
const salirJuego = () => {
  router.push("../../");
};
</script>
<template>
   <!-- Componente PDialog para el diálogo de confirmación de salida del enigma -->
  <PDialog
    ref="dialogRef"
    v-model:visible="visible"
    modal
    header="Salir del enigma"
    class="text-brown min-w-min text-brown shadow-3"
    :pt="{
      title: {
        class: 'text-orange-700 ',
      },
    }"
  >
    <span class="text-brown">¿Quieres abandonar el enigma?</span>
   <!-- Botones para confirmar o cancelar la salida del enigma -->
    <div class="flex justify-content-center mt-4 gap-3">
      <PButton
        rounded
        label="Cancelar"
        @click="dialogRef.close"
        class="bg-brown border-none shadow-3"
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
