<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"; // Importa las funciones necesarias de Vue

export default {
  setup() {
    const map = ref(null); // Crea una referencia a tu mapa

    // Función para manejar la ubicación del usuario
    function onLocationFound(e) {
      var radius = e.accuracy / 2;

      // Establece la vista en la ubicación del usuario
      map.value.setView(e.latlng, 16);

      // Define la ubicación de origen
      let source = { id: 0, lat: e.latlng.lat, lng: e.latlng.lng };

      // Define los destinos
      let targets = [
        { id: 1, lat: 41.634489483463256, lng: -4.712865481378941 },
      ];

      // Opciones de viaje para determinar qué rutas se deben buscar
      const options = {
        travelType: "walk",
        maxEdgeWeight: 900, // Ajusta el tiempo máximo de viaje a 900 segundos
        edgeWeight: "time",
        pathSerializer: "geojson",
        polygon: {
          srid: 4326,
        },
      };

      // Solicita rutas a la API de Targomo
      client.routes.fetch([source], targets, options).then((result) => {
        result.forEach((featureCollection) => {
          L.geoJSON(featureCollection, {
            style: {
              color: "#c4661f",
              weight: 5,
              opacity: 0.5,
            },
          }).addTo(map.value);
        });
      });
    }

    // Función para manejar errores en la obtención de la ubicación del usuario
    function onLocationError(e) {
      alert(e.message);
    }

    // Opciones para geolocalización
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    // Intenta obtener la ubicación del usuario
    onMounted(() => {
      map.value.locate(options);
    });

    // Registra los eventos de ubicación del usuario
    onMounted(() => {
      map.value.on("locationfound", onLocationFound);
      map.value.on("locationerror", onLocationError);
    });

    return { map };
  },
};
</script>

<style scoped>
body,
html {
  margin: 0;
  width: 100%;
  height: 100%;
}

#map {
  width: 50%;
  height: 100%;
}
</style>
