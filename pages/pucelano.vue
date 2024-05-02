<script setup>
const router = useRouter();
const inicioJuego = () => {
  router.push({
    path: "tests",
    query: { question: "test1" },
  });
};
const visible = ref(false);
</script>
<template>
  <div class="enigmas">
    <TheHeaderEnigma />
    <ConfirmExit v-model:visible="visible" />
    <div class="ml-3 mr-3 flex justify-content-center">
      <PCard class="lg:w-6 mt-3 border-green border-round-3xl shadow-3">
        <template #content>
          <img
            src="../assets/images/enigma/pucelano.png"
            alt="Image"
            width="100px"
            class="lg:ml-6"
          />
          <div class="flex flex-column flex align-items-center">
            <div class="flex flex-column flex align-items-center">
              <span class="text-brown mt-3 lg:w-10 text-justify">
                ¡Hola! Soy <span class="font-bold">Pucelano </span>, así es como
                nos conocen coloquialmente a los habitantes de Valladolid, y
                nadie mejor que yo puede ayudarte en este gran enigma entre las
                calles de la ciudad. En cada desafío, estaré a tu disposición;
                simplemente haz clic sobre mí si necesitas ayuda. Te
                proporcionaré pistas si te encuentras en apuros e incluso la
                solución, pero ten en cuenta que cada vez que me necesites,
                sumarás tiempo a tu marcador. Cada pista añade minutos extras:
                <ul>
                  <li>1 Pista: +1 minuto</li>
                  <li>2 Pista : +2 minutos</li>
                  <li>3 Pista: +3 minutos</li>
                  <li>Solución: +5 minutos</li>
                </ul>
                <span class="font-bold flex justify-content-center">
                  ¿Estás list@ para comenzar el enigma?</span
                >
              </span>
            </div>
            <div class="flex justify-content-center mt-4">
              <PButton
                rounded
                label="Continuar"
                @click="inicioJuego"
                class="bg-orange border-none shadow-3"
              />
            </div>
          </div>
        </template>
      </PCard>
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
