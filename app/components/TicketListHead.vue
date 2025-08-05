<template>
  <div class="ticket-list-head">
    <ui-radio-button v-model="selectedSortType" value="найдешевший" />
    <ui-radio-button v-model="selectedSortType" value="найшвидший" />
    <ui-radio-button v-model="selectedSortType" value="оптимальний" />
  </div>
</template>

<script setup>
const selectedSortType = defineModel("selectedSortType");
</script>

<style scoped>
.ticket-list-head {
  display: flex;
}
</style>
