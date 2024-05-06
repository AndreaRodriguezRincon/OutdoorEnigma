<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted } from "vue";
const props = defineProps({
  localizacion: {
    type: Object,
    required: true,
  },
});

let map = null;
let intervalId = null;
let routeLayer = null;
let userMarker = null;
let userMarkerD = null;

onMounted(() => {
  const client = new tgm.TargomoClient(
    "westcentraleurope",
    "28SZVTKKWP0Z3AOCA1W6"
  );

  const tileLayer = new tgm.leaflet.TgmLeafletTileLayer(client, "Light");
  map = L.map("map", {
    layers: [tileLayer],
    scrollWheelZoom: false,
  });

  map.setZoom(16);
  function onLocationFound(e) {
    map.setView(e.latlng);
    var myIcon = L.icon({
      iconUrl: "/images/icons/inicio.png",
      iconSize: [28, 28],
      iconAnchor: [22, 24],
    });
    if (userMarker) {
      map.removeLayer(userMarker);
    }
    userMarker = L.marker(e.latlng, { icon: myIcon }).addTo(map);
    var myIconD = L.icon({
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

    let source = { id: 0, lat: e.latlng.lat, lng: e.latlng.lng };

    let targets = [
      { id: 1, lat: props.localizacion.lat, lng: props.localizacion.lng },
    ];

    const options = {
      travelType: "walk",
      maxEdgeWeight: 900,
      edgeWeight: "time",
      pathSerializer: "geojson",
      polygon: {
        srid: 4326,
      },
    };

    client.routes.fetch([source], targets, options).then((result) => {
      // Clear previous routes
      if (routeLayer && map.hasLayer(routeLayer)) {
        map.removeLayer(routeLayer);
      }
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

  function onLocationError(e) {
    alert(e.message);
  }

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  map.locate(options);

  map.on("locationfound", onLocationFound);
  map.on("locationerror", onLocationError);
  intervalId = setInterval(() => {
    map.locate(options);
  }, 5000);
});

onUnmounted(() => {
  if (intervalId) {
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
