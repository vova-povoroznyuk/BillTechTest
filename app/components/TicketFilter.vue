<template>
  <div>
    <div class="filter-container">
      <p class="filter-caption">кількість пересадок</p>
      <ui-checbox
        value="Всі"
        name="filter"
        class="filter-checkbox"
        v-model="all"
      />
      <ui-checbox
        value="Без пересадок"
        name="filter"
        class="filter-checkbox"
        v-model="zero"
      />
      <ui-checbox
        value="1 пересадка"
        name="filter"
        class="filter-checkbox"
        v-model="one"
      />
      <ui-checbox
        value="2 пересадки"
        name="filter"
        class="filter-checkbox"
        v-model="two"
      />
      <ui-checbox
        value="3 пересадки"
        name="filter"
        class="filter-checkbox"
        v-model="three"
      />
    </div>
  </div>
</template>

<script setup>
const all = defineModel("all");
const zero = defineModel("zero");
const one = defineModel("one");
const two = defineModel("two");
const three = defineModel("three");
</script>

<style scoped>
.filter-container {
  border-radius: 8px;
  padding: 26px 20px;
  box-shadow: 1px 0px 15px 0px rgba(74, 74, 74, 0.43);
}
.filter-caption {
  color: #4a4a4a;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.filter-checkbox {
  margin-bottom: 10px;
}
</style>
