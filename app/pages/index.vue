<template>
  <header class="header">
    <div class="logo">
      <img src="~/assets/images/logo.svg" alt="logo" />
    </div>
  </header>
  <main class="ticket-page">
    <TicketFilter
      class="ticket-filter"
      v-model:all="all"
      @update:all="handleAllChange"
      v-model:zero="filters.zero"
      v-model:one="filters.one"
      v-model:two="filters.two"
      v-model:three="filters.three"
    />

    <TicketList :filters="filters" />
  </main>
</template>

<script setup>
const all = computed({
  get() {
    return filters.zero && filters.one && filters.two && filters.three;
  },
  set(value) {
    filters.zero = value;
    filters.one = value;
    filters.two = value;
    filters.three = value;
  },
});
const handleAllChange = () => {
  filters.zero = all.value;
  filters.one = all.value;
  filters.two = all.value;
  filters.three = all.value;
};
const filters = reactive({
  zero: true,
  one: true,
  two: true,
  three: true,
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.ticket-page {
  display: flex;
  align-items: flex-start;
  max-width: 1720px;
  margin: 0 auto;
  padding: 50px;
}
.ticket-filter {
  margin-right: 20px;
  width: 100%;
  max-width: 232px;
}
.header {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}
</style>
