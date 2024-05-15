<script setup>
// Define la seguridad de la página con el middleware "tests-url"
definePageMeta({
  middleware: "tests-url",
});
const router = useRouter();
const exitEnigma = () => {
  router.push("/");
};
</script>
<template>
  <div class="enigmas">
    <TheHeaderEnigma />
    <div class="ml-3 mr-3 mt-4 flex justify-content-center">
      <PCard
        class="mt-4 w-full lg:w-4 border-round-3xl border-solid border-green-800"
      >
        <template #title>
          <span class="text-3xl text-green flex justify-content-center"
            >¡ENHORABUENA!</span
          >
          <span
            class="mt-2 text-base text-lightGreen flex justify-content-center"
            >Has finalizado el enigma y tu tiempo ha sido:</span
          >
        </template>
        <template #content>
          <div class="flex flex-column flex align-items-center">
            <img
              src="/images/icons/trofeo.png"
              alt="Imagen móvil con letra"
              width="150"
            />
            <Timekeeper class="mt-4" />
            <PButton
              rounded
              label="Salir del Enigma"
              class="mt-4 bg-orange border-none shadow-3"
              @click="exitEnigma"
            />
          </div>
        </template>
      </PCard>
    </div>
  </div>
</template>
