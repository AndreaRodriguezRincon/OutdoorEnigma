<template>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css"
  />
  <div id="map" style="height: 400px"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as tgm from "@targomo/googlemaps";

const lat = ref(0);
const lng = ref(0);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat.value = position.coords.latitude;
      lng.value = position.coords.longitude;
      refreshRoutes();
    });
  }
}

getLocation();

const client = new tgm.TargomoClient(
  "westcentraleurope",
  "28SZVTKKWP0Z3AOCA1W6"
);
const options = {
  travelType: "transit",
  maxEdgeWeight: 900,
  edgeWeight: "time",
  pathSerializer: "compact",
  transitFrameDate: 20190219,
  transitFrameTime: 36000,
  transitFrameDuration: 3600,
  transitMaxTransfers: 5,
};

let map;
let sourceMarker;
const targetMarkers = [];

onMounted(() => {
  const tileLayer = new tgm.leaflet.TgmLeafletTileLayer(client, "Light");
  map = L.map("map", {
    layers: [tileLayer],
    scrollWheelZoom: false,
  }).setView([41.6401315, -4.7218309], 15);

  const attributionText =
    '<a href="https://www.targomo.com/developers/resources/attribution/" target="_blank">&copy; Targomo</a>';
  map.attributionControl.addAttribution(attributionText);

  sourceMarker = L.marker([lat.value, lng.value], { draggable: false }).addTo(
    map
  );
  targetMarkers.push(
    L.marker([41.6401315, -4.7218309], { draggable: false }).addTo(map)
  );

  refreshRoutes();
});

function refreshRoutes() {
  const source = [{ lat: lat.value, lng: lng.value, id: "source" }];
  const targets = targetMarkers.map((marker, index) => ({
    lat: marker.getLatLng().lat,
    lng: marker.getLatLng().lng,
    id: index,
  }));

  client.routes.fetch(source, targets, options).then((result) => {
    targetMarkers.forEach((marker) => marker.closePopup().unbindPopup());
    map.eachLayer((layer) => {
      if (layer instanceof L.Polyline) {
        map.removeLayer(layer);
      }
    });

    if (result.length > 0) {
      let circlePoints = [];
      result.forEach((route) => {
        route.routeSegments.forEach((segment) => {
          const leafletPoints = segment.points.map(
            (point) => new L.LatLng(point.lat, point.lng)
          );
          if (segment.type === "WALK") {
            drawDottedLine(leafletPoints);
          } else if (segment.type === "TRANSIT") {
            drawSolidLine(leafletPoints);
          } else if (segment.type === "TRANSFER") {
            circlePoints = circlePoints.concat(leafletPoints);
          }
        });
      });
    }

    targets.forEach((target) => {
      if (!result.find((route) => +route.targetId === target.id)) {
        targetMarkers[target.id]
          .bindPopup(`no route found within 1 hour`, { autoClose: false })
          .openPopup();
      }
    });
  });
}

function drawDottedLine(leafletPoints) {
  const line = new L.Polyline(leafletPoints, {
    color: "red",
    weight: 5,
    opacity: 1,
    smoothFactor: 1,
    dashArray: "5, 10",
  });
  line.addTo(map);
}

function drawSolidLine(leafletPoints) {
  const line = new L.Polyline(leafletPoints, {
    color: "blue",
    weight: 5,
    opacity: 1,
    smoothFactor: 1,
  });
  line.addTo(map);
}
</script>
