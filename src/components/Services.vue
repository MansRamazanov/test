<template>
  <!-- <ul class="list-item-group">
    <li v-for="service in servicesList" :key="service.id" >
      <p>{{ service.name }}</p>
      <Services v-if="service.childrens.length > 0" :servicesList="service.childrens"/>
    </li>
  </ul> -->
</template>

<script setup>
const servicesList = defineProps({
  servicesList: Array,
})

console.log(servicesList)
</script>

<style scoped>
.list-item-group{
  margin-left: 20px;
}
</style>
