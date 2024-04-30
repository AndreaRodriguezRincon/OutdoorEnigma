<script setup>
const solution = ref();
const visible = ref(false);
</script>
<template>
  <PCard class="mr-3 ml-3 mt-4 w-11 lg:w-6 border-round-3xl">
    <template #content>
      <div class="flex flex-column flex align-items-center">
        <span class="mr-2 text-center text-brown">
          Encuentra la ubicación de estos dos ornamentos y especifica el nombre
          del lugar o monumento donde se encuentran.
        </span>
        <div class="flex flex-row gap-4 mt-4">
          <img
            src="../../assets/images/juego/CondeAnsurez_1.png"
            alt="Pucelano"
            width="125"
          />
          <img
            src="../../assets/images/juego/CondeAnsurez_2.png"
            alt="Pucelano"
            width="120"
          />
        </div>
        <PFloatLabel class="mt-6">
          <PInputText
            id="solution"
            v-model="solution"
            class="border-round-xl border-2 shadow-3"
          />
          <label for="solution" class="text-brown">Solución</label>
        </PFloatLabel>
        <PButton
          rounded
          label="Comprobar"
          class="mt-4 bg-orange border-none shadow-3"
          @click=""
        />
      </div>
    </template>
  </PCard>
</template>
<style scoped>
.text-brown {
  color: #783d19;
}
.bg-orange {
  background-color: #c4661f;
}
</style>
