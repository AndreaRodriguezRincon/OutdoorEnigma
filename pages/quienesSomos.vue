<script setup></script>
<template>
  <div class="enigmas">
    <TheHeader />
    <div class="ml-3 mr-3 flex flex-column flex align-items-center">
      <PCard
        class="mt-4 w-full lg:w-4 border-round-3xl border-solid border-green-800 shadow-3"
      >
        <template #content>
          <div class="flex flex-column flex align-items-center">
            <span class="text-orange text-xl mb-4"
              >¿Qué es OutDoor Enigma?
            </span>
            <video autoplay loop muted>
              <source :src="'/video/videoValladolid.mp4'" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            <span class="mt-4 mr-3 ml-3 text-brown text-justify">
              Outdoor Enigma propone llevar la experiencia del Escape Room a las
              calles de Valladolid, fusionando el entretenimiento, la educación
              y el turismo. Nuestro enfoque se centra en proporcionar una
              experiencia de juego única, donde la ciudad misma se convierte en
              el escenario de un misterio por resolver. La integración de mapas
              revelará la ubicación a la que el usuario debe desplazarse para
              superar cada enigma y conocer los lugares más importantes de la
              ciudad.
            </span>
            <span class="text-orange text-xl mt-4"> ¡DESCUBRE LA CIUDAD! </span>
          </div>
        </template>
      </PCard>
    </div>
  </div>
</template>
<style scoped>
video {
  width: 90%;
}
</style>
