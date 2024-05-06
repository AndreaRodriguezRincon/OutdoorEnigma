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

onMounted(() => {
  const script1 = document.createElement("script");
  script1.src = "https://unpkg.com/leaflet@1.0.3/dist/leaflet-src.js";
  script1.crossOrigin = "";
  document.body.appendChild(script1);

  const script2 = document.createElement("script");
  script2.src = "https://releases.targomo.com/leaflet/latest-full.min.js";
  document.body.appendChild(script2);

  script2.onload = () => {
    const client = new tgm.TargomoClient(
      "westcentraleurope",
      "28SZVTKKWP0Z3AOCA1W6"
    );

    const tileLayer = new tgm.leaflet.TgmLeafletTileLayer(client, "Light");
    map = L.map("map", {
      layers: [tileLayer],
      scrollWheelZoom: false,
    });

    // Function to handle successful retrieval of user's location
    function onLocationFound(e) {
      var radius = e.accuracy / 2;

      // Set the view to the user's location
      map.setView(e.latlng, 16);

      // Set the source location
      let source = { id: 0, lat: e.latlng.lat, lng: e.latlng.lng };

      // Define targets
      let targets = [
        { id: 1, lat: props.localizacion.lat, lng: props.localizacion.lng },
      ];

      // The travel options used to determine which routes should be searched for
      const options = {
        travelType: "walk",
        maxEdgeWeight: 900, // Adjusted maxEdgeWeight to 900 seconds
        edgeWeight: "time",
        pathSerializer: "geojson",
        // yes, "polygon"... this comes from a legacy implementation when polygons were the only service.
        // Will be changing in the future to a more generalized approach.
        polygon: {
          srid: 4326,
        },
      };

      // Requesting routes from the Targomo API
      client.routes.fetch([source], targets, options).then((result) => {
        result.forEach((featureCollection) => {
          L.geoJSON(featureCollection, {
            style: {
              color: "#c4661f",
              weight: 5,
              opacity: 0.5,
            },
          }).addTo(map);
        });
      });
    }

    // Function to handle errors in retrieving user's location
    function onLocationError(e) {
      alert(e.message);
    }

    // Options for geolocation
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    // Try to get user's location
    map.locate(options);

    map.on("locationfound", onLocationFound);
    map.on("locationerror", onLocationError);
  };
});
</script>

<style scoped>
#map {
  width: 300px;
  height: 400px;
}
</style>
