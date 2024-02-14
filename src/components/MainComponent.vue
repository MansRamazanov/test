<template>
<Services :servicesList="servicesList"/>
</template>


<script setup>
import Services from './Services.vue';
import { ref, onMounted } from 'vue';
import { getServicesList } from "../data/servicesDataProvider.js";

const servicesList = ref();

onMounted(async () => {
  console.log("onMounted");
  const serviceListData = await getServicesList();
  servicesList.value = serviceListData;
  console.log(servicesList.value);
});
</script>

<style scoped>

</style>