<script setup>
import { actions } from "../stores/timerStore";
const router = useRouter();
// Función para iniciar el juego, reseteando el tiempo y navegando a la página de pruebas
const inicioJuego = () => {
  actions.resetTime();
  router.push({
    path: "tests",
    query: { question: "test1" }, // Se especifica la pregunta inicial
  });
};

const visible = ref(false);
</script>
<template>
  <div class="enigmas">
    <TheHeaderEnigma />
    <ConfirmExit v-model:visible="visible" />
    <div class="ml-3 mr-3 flex justify-content-center">
      <PCard
        class="lg:w-4 mt-3 border-green border-round-3xl border-solid border-green-800 shadow-3"
      >
        <template #content>
          <img
            src="/images/enigma/pucelano.png"
            alt="Image"
            width="100px"
            class="lg:ml-6"
          />
          <div class="flex flex-column flex align-items-center">
            <div class="flex flex-column flex align-items-center">
              <span class="text-brown mt-3 lg:w-10 text-justify">
                ¡Hola! Soy <span class="font-bold">Pucelano</span>, así es como
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
