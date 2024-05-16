<template>
  <div id="map"></div>
</template>

<script setup>
// Define las props del componente
const props = defineProps({
  localizacion: {
    type: Object,
    required: true,
  },
});
// Declaración de variables para el mapa y los marcadores
let map = null;
let intervalId = null;
let routeLayer = null;
let userMarker = null;
let userMarkerD = null;

onMounted(() => {
  // Crea una nueva instancia de TargomoClient
  const client = new tgm.TargomoClient(
    "westcentraleurope",
    "VMQTOXUKHO5ZZXXN9MY0"
  );

  const tileLayer = new tgm.leaflet.TgmLeafletTileLayer(client, "Light");

  // Inicializa el mapa
  map = L.map("map", {
    layers: [tileLayer],
    scrollWheelZoom: false,
  });
  // Establece el zoom inicial del mapa
  map.setZoom(16);

  // Función para manejar la ubicación encontrada por el navegador
  function onLocationFound(e) {
    // Centra el mapa en la ubicación encontrada
    map.setView(e.latlng);
    // Crea un marcador para la ubicación del usuario
    let myIcon = L.icon({
      iconUrl: "/images/icons/inicio.png",
      iconSize: [28, 28],
      iconAnchor: [22, 24],
    });
    if (userMarker) {
      map.removeLayer(userMarker);
    }
    userMarker = L.marker(e.latlng, { icon: myIcon }).addTo(map);
    // Crea un marcador para la ubicación del usuario
    let myIconD = L.icon({
      iconUrl: "/images/icons/marcador.png",
      iconSize: [35, 35],
      iconAnchor: [18, 28],
    });
    if (userMarkerD) {
      map.removeLayer(userMarkerD);
    }
    userMarkerD = L.marker(
      { lat: props.localizacion.lat, lng: props.localizacion.lng },
      { icon: myIconD }
    ).addTo(map);

    // Define el origen y el destino para el cálculo de la ruta
    let source = { id: 0, lat: e.latlng.lat, lng: e.latlng.lng };

    let targets = [
      { id: 1, lat: props.localizacion.lat, lng: props.localizacion.lng },
    ];

    // Opciones para el cálculo de la ruta
    const options = {
      travelType: "walk",
      maxEdgeWeight: 900,
      edgeWeight: "time",
      pathSerializer: "geojson",
      polygon: {
        srid: 4326,
      },
    };

    // Realiza la solicitud de ruta al servidor
    client.routes.fetch([source], targets, options).then((result) => {
      // Elimina las rutas anteriores
      if (routeLayer && map.hasLayer(routeLayer)) {
        map.removeLayer(routeLayer);
      }
      // Añade la nueva ruta al mapa
      result.forEach((featureCollection) => {
        routeLayer = L.geoJSON(
          {
            ...featureCollection,
            features: featureCollection.features.filter(
              (f) =>
                f.properties.name !== "Source" && f.properties.name !== "Target"
            ),
          },
          {
            style: {
              color: "#c4661f",
              weight: 5,
              opacity: 0.5,
            },
          }
        ).addTo(map);
      });
    });
  }
  // Función para manejar errores de ubicación
  function onLocationError(e) {
    alert(e.message);
  }
  // Opciones para la solicitud de ubicación
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  // Solicita la ubicación del usuario al navegador
  map.locate(options);
  // Escucha el evento de ubicación encontrada
  map.on("locationfound", onLocationFound);
  // Escucha el evento de error de ubicación
  map.on("locationerror", onLocationError);

  // Actualiza la ubicación del usuario periódicamente
  intervalId = setInterval(() => {
    map.locate(options);
  }, 30000);
});

onUnmounted(() => {
  if (intervalId) {
    // Detiene la actualización periódica de la ubicación del usuario
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
#map {
  width: 300px;
  height: 400px;
}
</style>
