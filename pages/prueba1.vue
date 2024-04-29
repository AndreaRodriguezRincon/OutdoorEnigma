<script setup>
const zoom = ref(25);
const lat = ref(0);
const lng = ref(0);
const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat.value = position.coords.latitude;
      lng.value = position.coords.longitude;
    });
  }
};
</script>

<template>
  <button @click="getLocation">Get Location</button>
  {{ lat }} {{ lng }}
  <div class="mt-3" style="height: 30rem; width: 22rem">
    <LMap ref="map" :zoom="zoom" :center="[lat, lng]">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <LMarker :lat-lng="[lat, lng]" />
    </LMap>
  </div>
</template>
