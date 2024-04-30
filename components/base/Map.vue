<script setup>
import L from "leaflet";
import { useTimer } from "vue-timer-hook";
const zoom = ref(12);
const lat = ref(0);
const lng = ref(0);
const destinationLat = ref(41.65198);
const destinationLng = ref(-4.72854);
const waypoints = [
  { lat: lat, lng: lng },
  { lat: destinationLat, lng: destinationLng },
];
const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat.value = position.coords.latitude;
      lng.value = position.coords.longitude;
    });
  }
};
onMounted(() => {
  getLocation();
  setInterval(getLocation, 15000);
});

onBeforeUnmount(() => {
  clearInterval(getLocation);
});

const time = new Date(0);
time.setSeconds(time.getSeconds() + 600);
const timer = useTimer(time);
</script>

<template>
  <div class="mt-3" style="height: 30rem; width: 22rem">
    <LMap ref="map" :zoom="zoom" :center="[lat, lng]">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <LMarker :lat-lng="[lat, lng]" />
      <LMarker :lat-lng="[destinationLat, destinationLng]" />
    </LMap>
  </div>
</template>
