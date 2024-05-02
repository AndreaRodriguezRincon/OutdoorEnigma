<script setup>
const zoom = ref(15);
const poligonoCoords = ref([
  [41.65198, -4.72854],
  [41.65316, -4.72678],
  [41.65675, -4.72832],
  [41.65696, -4.72465],
  [41.65718, -4.72372],
  [41.65618, -4.72335],
  [41.65389, -4.72278],
  [41.64841, -4.72707],
  [41.6478, -4.73068],
]);
const poligonoColor = "#c4661f";
const router = useRouter();
const mostrarPucelano = () => {
  router.push("/inicioEnigma");
};
</script>
<template>
  <div class="enigmas">
    <TheHeader />

    <div class="ml-3 mr-3 flex flex-column flex align-items-center">
      <div class="flex flex-column flex align-items-center">
        <span class="font-bold text-xl text-brown mb-2"
          >"La Noche de los Treinta en Valladolid"</span
        >
        <img
          src="/images/enigma/historiaValladolid.jpg"
          alt="Portada"
          width="350"
        />
      </div>
      <div class="flex flex-column mt-4">
        <span class="font-bold text-xl text-brown"> Lugar de inicio </span>
        <div class="mt-2">
          <span class="pi pi-map-marker text-orange text-2xl"></span>
          <span class="text-brown"> Plaza Mayor de Valladolid </span>
        </div>
      </div>
      <div class="flex flex-column flex align-items-center mt-4">
        <span class="font-bold text-xl text-brown"> Historia</span>
        <span class="mt-2 text-brown text-justify md:w-5">
          Gaby decide celebrar su 30 cumpleaños en la ciudad de Valladolid en
          compañía de sus amigos más cercanos. Después de una noche repleta de
          risas, cena, fiesta, fotos…, al regresar exhaustos al hotel para
          descansar, se percatan de que todos sus móviles han desaparecido.
          Deciden entonces poner fin a la noche y dirigirse a descansar para
          acudir temprano a la policía al día siguiente e informar del
          incidente. Sin embargo, a la mañana siguiente una nota bajo la puerta
          de la habitación de Gaby le indica que si quiere recuperar su móvil y
          el de sus amigos. deberá acudir a la siguiente dirección: Plaza Mayor
          de Valladolid.
        </span>
      </div>
      <div class="flex gap-5 mt-5">
        <PTag rounded class="bg-white border-2 border-green shadow-3">
          <div class="flex align-items-center gap-3 mr-3">
            <img
              alt="Tiempo"
              src="/images/icons/tiempo.png"
              style="width: 20px"
              class="ml-2"
            />
            <span class="text-base text-green"> 90 min </span>
          </div>
        </PTag>
        <PTag rounded class="bg-white border-2 border-green shadow-3">
          <div class="flex align-items-center gap-3 mr-3">
            <img
              alt="Tiempo"
              src="/images/icons/km.png"
              style="width: 25px"
              class="ml-2"
            />
            <span class="text-base text-green">3,5 Km </span>
          </div>
        </PTag>
      </div>
      <div class="mt-5">
        <span class="font-bold text-xl text-brown">Área de juego</span>
        <div class="mt-3" style="height: 30rem; width: 22rem">
          <LMap ref="map" :zoom="zoom" :center="[41.65209, -4.72539]">
            <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              layer-type="base"
              name="OpenStreetMap"
            />
            <LPolygon :lat-lngs="poligonoCoords" :color="poligonoColor" />
          </LMap>
        </div>
      </div>
      <div class="flex flex-column mt-4">
        <span class="font-bold text-xl text-brown">Recomendaciones</span>
        <PTag
          rounded
          class="bg-white border-2 border-green shadow-3 h-3rem mt-3"
        >
          <div class="flex align-items-center gap-3">
            <img
              alt="Tiempo"
              src="/images/icons/bateria.png"
              style="width: 40px"
            />
            <span class="text-base text-green">Batería +70% </span>
          </div>
        </PTag>
        <PTag
          rounded
          class="bg-white border-2 border-green shadow-3 h-3rem mt-3"
        >
          <div class="flex align-items-center gap-3">
            <img
              alt="Tiempo"
              src="/images/icons/zapatos.png"
              style="width: 40px"
            />
            <span class="text-base text-green">Calzado y ropa comoda </span>
          </div>
        </PTag>
        <PTag
          rounded
          class="bg-white border-2 border-green shadow-3 h-3rem mt-3"
        >
          <div class="flex align-items-center gap-4">
            <img
              alt="Tiempo"
              src="/images/icons/clima.png"
              style="width: 40px"
            />
            <span class="text-base text-green"> Revisar el tiempo </span>
          </div>
        </PTag>
      </div>
      <div class="flex justify-content-center">
        <PButton
          rounded
          label="Iniciar Enigma

    "
          class="mt-4 mb-4 shadow-3 bg-orange border-none"
          @click="mostrarPucelano"
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
}
.text-brown {
  color: #783d19;
}
.text-orange {
  color: #c4661f;
}
.text-green {
  color: #5f6f52;
}
.bg-orange {
  background-color: #c4661f;
}
.border-green {
  color: #5f6f52;
}
#map {
  height: 180px;
}
</style>
